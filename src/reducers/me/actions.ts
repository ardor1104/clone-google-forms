import { MeViewOutputSerializer } from 'api/serializer.type';

import { SET_ME_INFO } from 'reducers/constants';

export const setMeInfoAction = (payload: { info: MeViewOutputSerializer }) => ({
  type: SET_ME_INFO,
  payload,
});
