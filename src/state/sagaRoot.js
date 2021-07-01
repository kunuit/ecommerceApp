import {all} from 'redux-saga/effects';

import {authSagas} from '@features/auth/redux/auth.saga';

function* rootSaga() {
  yield all([...authSagas]);
}

export default rootSaga;
