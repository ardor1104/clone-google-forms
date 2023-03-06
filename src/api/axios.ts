import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import logger from 'utils/logger';

import { API_URL } from '../../config';

export const IS_NOT_AUTH = 'evoclass/Promise/IS_NOT_AUTH' as const;

interface CustomAxiosRequestConfigType extends AxiosRequestConfig {
  retry: {
    currentTimes: number;
    maxTimes: number;
    delay: number;
  };
}

const defaultConfig = (
  propsConfig?: CustomAxiosRequestConfigType,
  withCredentials?: boolean,
) => ({
  withCredentials,
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  retry: {
    currentTimes: 0,
    maxTimes: 3,
    delay: 1000,
  },
  ...propsConfig,
});

export default function customAxios(
  propsConfig?: CustomAxiosRequestConfigType,
  withAuth = true,
): AxiosInstance {
  const instance = axios.create(defaultConfig(propsConfig, withAuth));

  instance.interceptors.request.use(
    async (config) => {
      if (withAuth) {
        const token = localStorage.getItem('access_token');

        const configWithAuthorization = Object.assign(config, {
          ...config,
          headers: {
            ...config.headers,
            Authorization: token ? `JWT ${token}` : '',
          },
        });

        return configWithAuthorization;
      } else {
        return Promise.resolve(config);
      }
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      const isRetryExist = !!error?.config?.retryConfig;

      if (isRetryExist) {
        const isRejected =
          error?.response?.status === 400 || error?.response?.status === 403;
        if (isRejected) {
          return Promise.reject(error);
        }

        const isUnauthorized = error?.response?.status === 401;
        if (isUnauthorized) {
          // use refresh_token to get access_token
          // const configWithNewAuthorization = Object.assign(error.config, {
          //   ...error.config,
          //   headers: {
          //     ...error.config.headers,
          //     Authorization: token ? `JWT ${token}` : '',
          //   },
          // });
          // return instance.request(configWithNewAuthorization);
          return Promise.reject(error);
        }

        const currentRetryTimes = error?.config?.retry?.currentTimes;
        const maxRetryTimes = error?.config?.retry?.maxTimes;
        const canRetryRequest = currentRetryTimes < maxRetryTimes;
        if (canRetryRequest) {
          Object.defineProperty(error.config.retry, 'currentTimes', {
            value: currentRetryTimes + 1,
          });

          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(instance(error.config));
              logger.error(
                `${error?.config?.url}: Retry attempt #${currentRetryTimes}`,
              );
            }, error.config.retry?.delay ?? 0);
          });
        }

        return Promise.reject(error);
      } else {
        return Promise.reject(error);
      }
    },
  );

  return instance;
}
