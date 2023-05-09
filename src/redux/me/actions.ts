import { MeViewOutputSerializer } from 'api/serializer.type';

import { SET_ME_INFO } from 'redux/constants';

export const setMeInfoAction = (payload: { info: MeViewOutputSerializer }) => ({
  type: SET_ME_INFO,
  payload,
});
