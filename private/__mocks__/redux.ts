import * as reactRedux from 'react-redux';
import store from '../../src/store';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

useSelectorMock.mockReturnValue({ store });
useDispatchMock.mockReturnValue(jest.fn());
