import { AxiosResponse } from 'axios';
import { StateType as ExampleStateType } from './example/index.type';

export type ResponseType<
  Request extends (...args: any[]) => Promise<AxiosResponse<unknown>>,
> = Request extends (...args: any[]) => infer Data ? Awaited<Data> : unknown;

export type InjectStoreType = {
  exampleType: ExampleStateType;
};
