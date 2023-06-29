import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import localforage from 'localforage';
import { persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

/**
 * Application reducers
 */
import authReducer from './auth/authReducer';
/**
 * Application sagas
 */
import authSaga from './auth/authSaga';

/**
 * Configure persistant storage
 */
const persistConfig = {
  key: 'local',
  whitelist: ['auth'],
  storage: localforage,
};

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: persistReducer(
    {
      key: 'auth',
      storage: localforage,
    },
    authReducer
  ),
  router: connectRouter(history),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [routerMiddleware(history), sagaMiddleware],
});

/**
 * Run all Sagas
 */
sagaMiddleware.run(authSaga);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
