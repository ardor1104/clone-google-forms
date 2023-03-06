import produce from 'immer';
import { ReduxActionsType } from 'redux/actions.type';
import { SET_EXAMPLE } from 'redux/constants';
import { StateType } from './index.type';

const initialState: StateType = {
  exampleData: null,
};

const exampleReducer = (state = initialState, action: ReduxActionsType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_EXAMPLE: {
        draft.exampleData = action.payload.exampleData;
        break;
      }
      default:
    }
  });
};

export default exampleReducer;
