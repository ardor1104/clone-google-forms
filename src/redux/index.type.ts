import { AxiosResponse } from 'axios';
import { StateType as globalStateType } from './global/index.type';
import { StateType as modalsStateType } from './modals/index.type';
import { StateType as formsStateType } from './forms/index.type';

export type ResponseType<
  Request extends (...args: any[]) => Promise<AxiosResponse<unknown>>,
> = Request extends (...args: any[]) => infer Data ? Awaited<Data> : unknown;

export type InjectStoreType = {
  global: globalStateType;
  modals: modalsStateType;
  forms: formsStateType;
};
