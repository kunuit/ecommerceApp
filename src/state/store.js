import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagaRoot';
import reducers from './reducerRoot';
import {createStore, applyMiddleware, compose} from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['home', 'postNew', 'upload', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

// create redux redux-saga redux-dev-tool for browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create redux redux-saga for mobile
const composeEnhancersRNDebugger =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [applyMiddleware(...middleware)];
export const store = createStore(
  persistedReducer,
  composeEnhancersRNDebugger(...enhancers),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
