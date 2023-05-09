import { MeViewOutputSerializer } from 'api/serializer.type';

export type StateType = {
  isLoggedIn: boolean;
  info: MeViewOutputSerializer;
};
