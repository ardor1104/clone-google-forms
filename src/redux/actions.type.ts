import * as globalActions from './global/actions';

type ActionsType<
  Actions extends {
    [key: string]: (...args: any[]) => { type: string; payload?: any };
  },
> = Actions[keyof Actions] extends (...args: any[]) => infer Action
  ? Action
  : never;

type ExampleActionsType = ActionsType<typeof globalActions>;

export type ReduxActionsType = ExampleActionsType;
