import { AxiosResponse } from 'axios';
import { StateType as globalStateType } from './global/index.type';

export type ResponseType<
  Request extends (...args: any[]) => Promise<AxiosResponse<unknown>>,
> = Request extends (...args: any[]) => infer Data ? Awaited<Data> : unknown;

export type InjectStoreType = {
  global: globalStateType;
};
