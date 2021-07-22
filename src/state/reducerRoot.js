import {combineReducers} from 'redux';

import authReducer from '@features/auth/redux/auth.reducer';
import categoryReducer from '@features/category/redux/category.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
});

export default rootReducer;
