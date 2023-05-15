import { all, call, takeLatest } from 'redux-saga/effects';
import { fakeGetForms, fakePatchForms } from 'api/fakeResponse';

import logger from 'utils/logger';

import {
  GET_FORMS_SAGA,
  PATCH_FORMS_SAGA,
  DELETE_FORMS_SAGA,
} from 'redux/constants';

import { getFormsAction, patchFormsAction, deleteFormsAction } from './actions';

function* getForms(action: ReturnType<typeof getFormsAction>) {
  const { filter, sort, keyword, succeedFunc, failedFunc } = action.payload;

  try {
    // 원래 api 요청이 필요하지만 서버가 없으니 생략
    // const { data } = yield call(FormsService.getForms, {
    //   id,
    //   title,
    // });
    // --- 서버가 없어 임의로 response 생성 대체 코드, 실 서비스 시 존재해선 안될 코드
    const data = fakeGetForms({ filter, sort, keyword });
    // ---

    logger.log(filter, sort, keyword);

    if (succeedFunc) {
      yield call(succeedFunc, data);
    }
  } catch (error) {
    logger.error(error);

    if (failedFunc) {
      yield call(failedFunc);
    }
  }
}

function* patchForms(action: ReturnType<typeof patchFormsAction>) {
  const { id, title, succeedFunc, failedFunc } = action.payload;

  try {
    // 원래 api 요청이 필요하지만 서버가 없으니 생략
    // const { data } = yield call(FormsService.patchForms, {
    //   id,
    //   title,
    // });
    // --- 서버가 없어 임의로 response 생성 대체 코드, 실 서비스 시 존재해선 안될 코드
    const data = fakePatchForms({ id, title });
    // ---

    logger.log(id, title);

    if (succeedFunc) {
      yield call(succeedFunc, data);
    }
  } catch (error) {
    logger.error(error);

    if (failedFunc) {
      yield call(failedFunc);
    }
  }
}

function* deleteForms(action: ReturnType<typeof deleteFormsAction>) {
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
  yield all([
    takeLatest(GET_FORMS_SAGA, getForms),
    takeLatest(PATCH_FORMS_SAGA, patchForms),
    takeLatest(DELETE_FORMS_SAGA, deleteForms),
  ]);
}
