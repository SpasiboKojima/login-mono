import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { signInWithGoogle } from '@local/api';

import { authError, authLoginGoogleRequest, authLoginGoogleResponse, authLogoutRequest, authLogoutResponse } from './authActions';

import type { AuthErrorPayload } from './authActions';

function* watchLogoutRequest() {
  yield takeEvery(authLogoutRequest, function* takeEveryLogoutRequest() {
    try {
      // yield call(() => auth.signOut());
      yield put(authLogoutResponse());
    } catch (error: any) {
      yield put(
        authError({
          error: error as AuthErrorPayload,
        })
      );
    }
  });
}

function* watchLoginGoogleRequest() {
  yield takeEvery(authLoginGoogleRequest, function* takeEveryGoogleLoginRequest() {
    try {
      const response: Awaited<ReturnType<typeof signInWithGoogle>> = yield call(signInWithGoogle);
      yield put(
        authLoginGoogleResponse({
          additionalUserInfo: {
            email: response.user.email || '',
            name: response.user.displayName || '',
          },
          uid: response.user.uid,
        })
      );
    } catch (error: any) {
      yield put(
        authError({
          error: error as AuthErrorPayload,
        })
      );
    }
  });
}

export default function* collectionSaga() {
  yield all([fork(watchLogoutRequest), fork(watchLoginGoogleRequest)]);
}
