import {takeLatest, put, call} from 'redux-saga/effects';
import {TypeCategory} from './category.type';
import {getAllCategoryAPI} from '../modules/category.api';
import {ConvertData2Success} from '../../../modules/utils';

function* fetchALLSaga(action) {
  // show loading
  yield put({
    type: TypeCategory.changeFields,
    payload: {
      changeFields: {
        showLoading: true,
        actionLoading: action.payload.actionLoading,
      },
    },
  });

  const {code, error, message, payload} = yield call(getAllCategoryAPI);

  if (error) {
    yield put({
      type: TypeCategory.changeFields,
      payload: {
        changeFields: {
          showLoading: false,
          actionLoading: null,
          errorCategory: message,
        },
      },
    });
  } else {
    yield put({
      type: TypeCategory.fetchAllSuccess,
      payload: {
        data: ConvertData2Success(payload),
      },
    });
  }
}

export const categorySagas = [takeLatest(TypeCategory.fetchAll, fetchALLSaga)];
