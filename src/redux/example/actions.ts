import { GET_EXAMPLE_SAGA, SET_EXAMPLE } from 'redux/constants';

export const getExampleAction = (payload: {
  exampleId: string;
  onSucceed?: (data: any) => void;
  onFail?: () => void;
}) => ({
  type: GET_EXAMPLE_SAGA,
  payload,
});

export const setExampleAction = (payload: { exampleData: any }) => ({
  type: SET_EXAMPLE,
  payload,
});
