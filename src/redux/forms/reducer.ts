import produce from 'immer';
import { ReduxActionsType } from 'redux/actions.type';
import {
  SWITCH_FORMS_VIEW_TYPE,
  SET_FORMS_FILTER,
  SET_FORMS_SORT,
  SET_FORMS_LIST_VIEW_TITLE,
} from 'redux/constants';
import { StateType } from './index.type';

const initialState: StateType = {
  viewType: 'listView',
  filter: 'all',
  sort: 'lastOpened',
  listViewTitle: null,
  list: [
    {
      id: 'bdd1e380-ad04-42ae-84e5-3fbcbd74bf39',
      title: '제목 없는 설문지5',
      opened_at: '2023-05-03T12:00:00.000000+09:00',
      updated_at: '2023-05-03T12:00:00.000000+09:00',
      thumbnail: 'https://wallpaper.dog/large/20538421.jpg',
      ownerName: 'TEAZLE',
    },
    {
      id: 'edd42b41-89d8-4aae-bb9f-ff7fe8bade07',
      title: '제목 없는 설문지4',
      opened_at: '2023-04-28T12:00:00.000000+09:00',
      updated_at: '2023-04-28T12:00:00.000000+09:00',
      thumbnail:
        'https://thumbs.dreamstime.com/b/flowers-composition-pattern-made-chamomiles-petals-pastel-purple-background-spring-summer-concept-flat-lay-top-view-copy-144695810.jpg',
      ownerName: 'TEAZLE',
    },
    {
      id: 'e228d963-4b06-43ca-b1c1-d9f80baf0baa',
      title: '제목 없는 설문지3',
      opened_at: '2023-04-03T14:15:08.380319+09:00',
      updated_at: '2023-04-03T14:15:09.276999+09:00',
      thumbnail:
        'https://papers.co/wallpaper/papers.co-so75-blur-gradation-pink-purple-pastel-6-wallpaper.jpg',
      ownerName: 'TEAZLE',
    },
    {
      id: '1db832b6-a4a2-4d29-b99b-b2ecf9ed9284',
      title: '제목 없는 설문지2',
      opened_at: '2023-04-02T07:43:01.996670+09:00',
      updated_at: '2023-04-02T07:32:15.697013+09:00',
      thumbnail:
        'https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.0.3',
      ownerName: 'Alive',
    },
    {
      id: '295c21ab-ab22-4a29-a314-9f8e12d06008',
      title: '제목 없는 설문지1',
      opened_at: '2023-04-01T14:15:08.537493+09:00',
      updated_at: '2023-04-01T14:15:08.091927+09:00',
      thumbnail:
        'https://i.pinimg.com/originals/d0/b7/2c/d0b72c0f7022546b01e13d545f0e66fc.jpg',
      ownerName: 'Delmont',
    },
  ],
};

const formsReducer = (state = initialState, action: ReduxActionsType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SWITCH_FORMS_VIEW_TYPE: {
        if (draft.viewType === 'listView') {
          draft.viewType = 'goBoardView';
        } else {
          draft.viewType = 'listView';
        }
        break;
      }
      case SET_FORMS_FILTER: {
        const { filter } = action.payload;

        draft.filter = filter;
        break;
      }
      case SET_FORMS_SORT: {
        const { sort } = action.payload;

        draft.sort = sort;
        break;
      }
      case SET_FORMS_LIST_VIEW_TITLE: {
        const { listViewTitle } = action.payload;

        draft.listViewTitle = listViewTitle;
        break;
      }
      default:
        break;
    }
  });
};

export default formsReducer;
