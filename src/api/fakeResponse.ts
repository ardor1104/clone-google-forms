/* eslint-disable no-bitwise */
// 백엔드 서버가 없기 때문에 고정된 값을 return하는 가짜 response 함수를 만들었습니다.
// 가급적 프론트에 영향을 주지 않기 위해 러프하게 값을 전달합니다.

import {
  FormsViewOutputSerializer,
  SingleFormsViewOutputSerializer,
} from './serializer.type';

const DUMMY_FORMS_1 = {
  id: '295c21ab-ab22-4a29-a314-9f8e12d06008',
  title: '제목 없는 설문지1',
  opened_at: '2023-04-01T14:15:08.091927+09:00',
  updated_at: '2023-04-01T14:15:08.537493+09:00',
  thumbnail:
    'https://i.pinimg.com/originals/d0/b7/2c/d0b72c0f7022546b01e13d545f0e66fc.jpg',
  owner: {
    id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca1',
    name: 'Delmont',
  },
};
const DUMMY_FORMS_2 = {
  id: '1db832b6-a4a2-4d29-b99b-b2ecf9ed9284',
  title: '제목 없는 설문지2',
  opened_at: '2023-04-02T07:43:01.996670+09:00',
  updated_at: '2023-04-02T08:32:15.697013+09:00',
  thumbnail:
    'https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.0.3',
  owner: {
    id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca0',
    name: 'Alive',
  },
};
const DUMMY_FORMS_3 = {
  id: 'e228d963-4b06-43ca-b1c1-d9f80baf0baa',
  title: '제목 없는 설문지3',
  opened_at: '2023-04-03T14:15:08.380319+09:00',
  updated_at: '2023-04-04T14:15:09.276999+09:00',
  thumbnail:
    'https://papers.co/wallpaper/papers.co-so75-blur-gradation-pink-purple-pastel-6-wallpaper.jpg',
  owner: {
    id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
    name: 'TEAZLE',
  },
};
const DUMMY_FORMS_4 = {
  id: 'edd42b41-89d8-4aae-bb9f-ff7fe8bade07',
  title: '제목 없는 설문지4',
  opened_at: '2023-05-06T12:00:00.000000+09:00',
  updated_at: '2023-04-29T12:00:00.000000+09:00',
  thumbnail:
    'https://thumbs.dreamstime.com/b/flowers-composition-pattern-made-chamomiles-petals-pastel-purple-background-spring-summer-concept-flat-lay-top-view-copy-144695810.jpg',
  owner: {
    id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
    name: 'TEAZLE',
  },
};
const DUMMY_FORMS_5 = {
  id: 'bdd1e380-ad04-42ae-84e5-3fbcbd74bf39',
  title: '제목 없는 설문지5',
  opened_at: '2023-05-03T12:00:00.000000+09:00',
  updated_at: '2023-05-04T12:00:00.000000+09:00',
  thumbnail: 'https://wallpaper.dog/large/20538421.jpg',
  owner: {
    id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
    name: 'TEAZLE',
  },
};

export function fakeGetForms({
  filter = 'all',
  sort = 'lastOpened',
  keyword,
}: {
  filter?: 'all' | 'own' | 'notOwned';
  sort?: 'lastOpened' | 'lastEdit' | 'lastModifiedDate' | 'ascending';
  keyword?: string;
}): Array<FormsViewOutputSerializer> {
  if (filter === 'own') {
    if (sort === 'lastOpened') {
      return [DUMMY_FORMS_4, DUMMY_FORMS_5, DUMMY_FORMS_3];
    } else if (sort === 'ascending') {
      return [DUMMY_FORMS_3, DUMMY_FORMS_4, DUMMY_FORMS_5];
    } else {
      return [DUMMY_FORMS_5, DUMMY_FORMS_4, DUMMY_FORMS_3];
    }
  } else if (filter === 'notOwned') {
    if (sort === 'lastOpened') {
      return [DUMMY_FORMS_2, DUMMY_FORMS_1];
    } else if (sort === 'ascending') {
      return [DUMMY_FORMS_1, DUMMY_FORMS_2];
    } else {
      return [DUMMY_FORMS_2, DUMMY_FORMS_1];
    }
  } else if (keyword === '1') {
    return [DUMMY_FORMS_1];
  } else if (keyword === '2') {
    return [DUMMY_FORMS_2];
  } else if (keyword === '3') {
    return [DUMMY_FORMS_3];
  } else if (keyword === '4') {
    return [DUMMY_FORMS_4];
  } else if (keyword === '5') {
    return [DUMMY_FORMS_5];
  } else if (sort === 'lastOpened') {
    return [
      DUMMY_FORMS_4,
      DUMMY_FORMS_5,
      DUMMY_FORMS_3,
      DUMMY_FORMS_2,
      DUMMY_FORMS_1,
    ];
  } else if (sort === 'ascending') {
    return [
      DUMMY_FORMS_1,
      DUMMY_FORMS_2,
      DUMMY_FORMS_3,
      DUMMY_FORMS_4,
      DUMMY_FORMS_5,
    ];
  } else {
    return [
      DUMMY_FORMS_5,
      DUMMY_FORMS_4,
      DUMMY_FORMS_3,
      DUMMY_FORMS_2,
      DUMMY_FORMS_1,
    ];
  }
}

export function fakePatchForms({
  id,
  title,
}: {
  id: string;
  title?: string;
}): FormsViewOutputSerializer {
  const formsList: Array<FormsViewOutputSerializer> = [
    DUMMY_FORMS_5,
    DUMMY_FORMS_4,
    DUMMY_FORMS_3,
    DUMMY_FORMS_2,
    DUMMY_FORMS_1,
  ];

  const selectedForms = formsList.find((formsItem) => formsItem.id === id);

  const changedList: {
    updated_at: string;
    title?: string;
  } = { updated_at: new Date().toISOString() };

  if (title) {
    changedList.title = title;
  }

  if (selectedForms) {
    return {
      ...selectedForms,
      ...changedList,
    };
  } else {
    throw new Error();
  }
}

export function fakePostForms({
  template,
}: {
  template?: 'contact' | 'event' | 'party' | 'tShirt';
}): SingleFormsViewOutputSerializer {
  // @ts-ignore
  const id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
  const opened_at = new Date().toISOString();
  const updated_at = new Date().toISOString();
  const owner = {
    id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
    name: 'TEAZLE',
  };

  if (template === 'contact') {
    return {
      id,
      title: '연락처 정보',
      opened_at,
      updated_at,
      thumbnail:
        'https://www.fabmood.com/wp-content/uploads/2022/04/spring-wallpaper-2.jpg',
      owner,
    };
  } else if (template === 'event') {
    return {
      id,
      title: '행사 참석 여부',
      opened_at,
      updated_at,
      thumbnail:
        'https://image.slidesdocs.com/responsive-images/docs/classic-watercolor-smudge-in-apricot-color-page-border-background-word-template_e35f45f318__1131_1600.jpg',
      owner,
    };
  } else if (template === 'party') {
    return {
      id,
      title: '파티 초대',
      opened_at,
      updated_at,
      thumbnail: 'https://wallpaperaccess.com/full/93547.jpg',
      owner,
    };
  } else if (template === 'tShirt') {
    return {
      id,
      title: '티셔츠 신청',
      opened_at,
      updated_at,
      thumbnail:
        'https://png.pngtree.com/background/20211217/original/pngtree-japanese-cartoon-pink-purple-cloud-light-effect-mobile-phone-wallpaper-background-picture-image_1597163.jpg',
      owner,
    };
  } else {
    return {
      id,
      title: '제목 없는 설문지',
      opened_at,
      updated_at,
      thumbnail:
        'https://i.pinimg.com/originals/8c/88/96/8c8896413e600e4954824e4abcc24eb5.jpg',
      owner,
    };
  }
}
