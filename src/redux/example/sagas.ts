import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ResponseType } from 'redux/index.type';
import { AxiosResponse } from 'axios';

import logger from 'utils/logger';

import { GET_EXAMPLE_SAGA } from 'redux/constants';
import { getExampleAction, setExampleAction } from './actions';

function* getExample(action: ReturnType<typeof getExampleAction>) {
  const { exampleId, onSucceed, onFail } = action.payload;

  let exampleData;

  try {
    const { data }: ResponseType<() => Promise<AxiosResponse<any>>> =
      yield call(() => {
        return { exampleId };
      });

    exampleData = data;
  } catch (error) {
    logger.error(error);

    if (onFail) {
      yield call(onFail);
    }
  }

  yield put(setExampleAction({ exampleData }));

  if (onSucceed) {
    yield call(onSucceed, exampleData);
  }
}

export default function* exampleSaga() {
  yield all([takeLatest(GET_EXAMPLE_SAGA, getExample)]);
}
