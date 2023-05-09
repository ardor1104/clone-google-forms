import produce from 'immer';
import { ReduxActionsType } from 'redux/actions.type';
import { SET_ME_INFO } from 'redux/constants';
import { StateType } from './index.type';

// 로직상 로그인을 하지 않은 유저는 페이지 접속이 불가능하기에 서버가 없는 지금은 임의로 값을 채웠습니다.
const initialState: StateType = {
  isLoggedIn: true,
  info: {
    id: '3b01d37f-bffb-40bf-87ee-6f00cf348ca6',
    email: 'test@gmail.com',
    name: 'TEAZLE',
    phone: '01234567890',
    profile_picture:
      'https://www.truebluenation.com/forum/uploads/monthly_2017_09/T.png.b6d03c176342eab9a77402726a051291.png',
  },
};

const meReducer = (state = initialState, action: ReduxActionsType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_ME_INFO: {
        const { info } = action.payload;

        draft.info = info;
        break;
      }
      default:
        break;
    }
  });
};

export default meReducer;
