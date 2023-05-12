// 백엔드 서버가 없기 때문에 고정된 값을 return하는 가짜 response 함수를 만들었습니다.
// 프론트에 가급적 영향을 주지 않기 위해 러프하게 값을 전달합니다.

import { FormsViewOutputSerializer } from './serializer.type';

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
      return [
        {
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
        },
        {
          id: 'bdd1e380-ad04-42ae-84e5-3fbcbd74bf39',
          title: '제목 없는 설문지5',
          opened_at: '2023-05-03T12:00:00.000000+09:00',
          updated_at: '2023-05-04T12:00:00.000000+09:00',
          thumbnail: 'https://wallpaper.dog/large/20538421.jpg',
          owner: {
            id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
            name: 'TEAZLE',
          },
        },
        {
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
        },
      ];
    } else if (sort === 'ascending') {
      return [
        {
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
        },
        {
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
        },
        {
          id: 'bdd1e380-ad04-42ae-84e5-3fbcbd74bf39',
          title: '제목 없는 설문지5',
          opened_at: '2023-05-03T12:00:00.000000+09:00',
          updated_at: '2023-05-04T12:00:00.000000+09:00',
          thumbnail: 'https://wallpaper.dog/large/20538421.jpg',
          owner: {
            id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
            name: 'TEAZLE',
          },
        },
      ];
    } else {
      return [
        {
          id: 'bdd1e380-ad04-42ae-84e5-3fbcbd74bf39',
          title: '제목 없는 설문지5',
          opened_at: '2023-05-03T12:00:00.000000+09:00',
          updated_at: '2023-05-04T12:00:00.000000+09:00',
          thumbnail: 'https://wallpaper.dog/large/20538421.jpg',
          owner: {
            id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
            name: 'TEAZLE',
          },
        },
        {
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
        },
        {
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
        },
      ];
    }
  } else if (filter === 'notOwned') {
    if (sort === 'lastOpened') {
      return [
        {
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
        },
        {
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
        },
      ];
    } else if (sort === 'ascending') {
      return [
        {
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
        },
        {
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
        },
      ];
    } else {
      return [
        {
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
        },
        {
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
        },
      ];
    }
  } else if (keyword === '1') {
    return [
      {
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
      },
    ];
  } else if (keyword === '2') {
    return [
      {
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
      },
    ];
  } else if (keyword === '3') {
    return [
      {
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
      },
    ];
  } else if (keyword === '4') {
    return [
      {
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
      },
    ];
  } else if (keyword === '5') {
    return [
      {
        id: 'bdd1e380-ad04-42ae-84e5-3fbcbd74bf39',
        title: '제목 없는 설문지5',
        opened_at: '2023-05-03T12:00:00.000000+09:00',
        updated_at: '2023-05-04T12:00:00.000000+09:00',
        thumbnail: 'https://wallpaper.dog/large/20538421.jpg',
        owner: {
          id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
          name: 'TEAZLE',
        },
      },
    ];
  } else if (sort === 'lastOpened') {
    return [
      {
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
      },
      {
        id: 'bdd1e380-ad04-42ae-84e5-3fbcbd74bf39',
        title: '제목 없는 설문지5',
        opened_at: '2023-05-03T12:00:00.000000+09:00',
        updated_at: '2023-05-04T12:00:00.000000+09:00',
        thumbnail: 'https://wallpaper.dog/large/20538421.jpg',
        owner: {
          id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
          name: 'TEAZLE',
        },
      },
      {
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
      },
      {
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
      },
      {
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
      },
    ];
  } else if (sort === 'ascending') {
    return [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        id: 'bdd1e380-ad04-42ae-84e5-3fbcbd74bf39',
        title: '제목 없는 설문지5',
        opened_at: '2023-05-03T12:00:00.000000+09:00',
        updated_at: '2023-05-04T12:00:00.000000+09:00',
        thumbnail: 'https://wallpaper.dog/large/20538421.jpg',
        owner: {
          id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
          name: 'TEAZLE',
        },
      },
    ];
  } else {
    return [
      {
        id: 'bdd1e380-ad04-42ae-84e5-3fbcbd74bf39',
        title: '제목 없는 설문지5',
        opened_at: '2023-05-03T12:00:00.000000+09:00',
        updated_at: '2023-05-04T12:00:00.000000+09:00',
        thumbnail: 'https://wallpaper.dog/large/20538421.jpg',
        owner: {
          id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
          name: 'TEAZLE',
        },
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
    ];
  }
}
