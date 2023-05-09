import globalReducer from 'redux/global/reducer';
import meReducer from 'redux/me/reducer';
import modalsReducer from 'redux/modals/reducer';
import formsReducer from 'redux/forms/reducer';

export default {
  global: globalReducer,
  me: meReducer,
  modals: modalsReducer,
  forms: formsReducer,
};
