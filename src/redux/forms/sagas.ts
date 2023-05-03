import { all, call, takeLatest } from 'redux-saga/effects';

import logger from 'utils/logger';

import { DELETE_FORMS_SAGA } from 'redux/constants';

import { deleteFormsAction } from './actions';

export function* deleteForms(action: ReturnType<typeof deleteFormsAction>) {
  const { id, succeedFunc, failedFunc } = action.payload;

  try {
    // 원래 api 요청이 필요하지만 서버가 없으니 생략
    // const { data } = yield call(FormsService.deleteForms, {
    //   id,
    // });
    logger.log(id);

    if (succeedFunc) {
      yield call(succeedFunc);
    }
  } catch (error) {
    logger.error(error);

    if (failedFunc) {
      yield call(failedFunc);
    }
  }
}

export default function* formsSaga() {
  yield all([takeLatest(DELETE_FORMS_SAGA, deleteForms)]);
}
