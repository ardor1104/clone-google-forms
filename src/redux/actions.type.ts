import * as globalActions from './global/actions';
import * as formsActions from './forms/actions';

type ActionsType<
  Actions extends {
    [key: string]: (...args: any[]) => { type: string; payload?: any };
  },
> = Actions[keyof Actions] extends (...args: any[]) => infer Action
  ? Action
  : never;

type GlobalActionsType = ActionsType<typeof globalActions>;
type FormsActionsType = ActionsType<typeof formsActions>;

export type ReduxActionsType = GlobalActionsType | FormsActionsType;
