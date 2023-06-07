import globalReducer from 'reducers/global/reducer';
import meReducer from 'reducers/me/reducer';
import modalsReducer from 'reducers/modals/reducer';
import formsReducer from 'reducers/forms/reducer';

export default {
  global: globalReducer,
  me: meReducer,
  modals: modalsReducer,
  forms: formsReducer,
};
