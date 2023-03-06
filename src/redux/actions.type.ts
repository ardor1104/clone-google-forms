import * as exampleActions from './example/actions';

type ActionsType<
  Actions extends {
    [key: string]: (...args: any[]) => { type: string; payload?: any };
  },
> = Actions[keyof Actions] extends (...args: any[]) => infer Action
  ? Action
  : never;

type ExampleActionsType = ActionsType<typeof exampleActions>;

export type ReduxActionsType = ExampleActionsType;
