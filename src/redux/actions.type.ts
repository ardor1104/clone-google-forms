import * as globalActions from './global/actions';
import * as meActions from './me/actions';
import * as modalsActions from './modals/actions';
import * as formsActions from './forms/actions';

type ActionsType<
  Actions extends {
    [key: string]: (...args: any[]) => { type: string; payload?: any };
  },
> = Actions[keyof Actions] extends (...args: any[]) => infer Action
  ? Action
  : never;

type GlobalActionsType = ActionsType<typeof globalActions>;
type MeActionsType = ActionsType<typeof meActions>;
type ModalsActionsType = ActionsType<typeof modalsActions>;
type FormsActionsType = ActionsType<typeof formsActions>;

export type ReduxActionsType =
  | GlobalActionsType
  | MeActionsType
  | ModalsActionsType
  | FormsActionsType;
