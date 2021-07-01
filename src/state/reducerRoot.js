import {combineReducers} from 'redux';

import authReducer from '@features/auth/redux/auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
