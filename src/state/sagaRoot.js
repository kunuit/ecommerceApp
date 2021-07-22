import {all} from 'redux-saga/effects';

import {authSagas} from '@features/auth/redux/auth.saga';
import {categorySagas} from '@features/category/redux/category.saga';

function* rootSaga() {
  yield all([...authSagas, ...categorySagas]);
}

export default rootSaga;
