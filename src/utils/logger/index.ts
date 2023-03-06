/* eslint-disable no-console */
// thx to sehvdi
import { MODE } from '../../../config';

// @ts-ignore
const isDevelopmentMode = MODE === 'development';

const logger = {
  log(...args: any[]) {
    if (isDevelopmentMode) {
      console.log(...args);
    }
  },
  error(...args: any[]) {
    if (isDevelopmentMode) {
      console.error(...args);
    }
  },
  warn(...args: any[]) {
    if (isDevelopmentMode) {
      console.warn(...args);
    }
  },
};

export default logger;
