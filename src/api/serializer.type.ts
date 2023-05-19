/* eslint-disable @typescript-eslint/naming-convention */
// 서버가 없는 관계로 임시로 serializer 타입을 선언

export type MeViewOutputSerializer = {
  id: string;
  email: string;
  name: string;
  phone: string;
  profile_picture: string;
};

export type FormsViewOutputSerializer = {
  id: string;
  title: string;
  opened_at: string;
  updated_at: string;
  thumbnail: string;
  owner: {
    id: string;
    name: string;
  };
};

export type SingleFormsViewOutputSerializer = {
  id: string;
  title: string;
  opened_at: string;
  updated_at: string;
  thumbnail: string;
  owner: {
    id: string;
    name: string;
  };
};
