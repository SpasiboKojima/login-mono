// import { auth, FirebaseUser, GoogleAuthProvider } from 'global/firebase';
import { all, fork, put, takeEvery } from 'redux-saga/effects';

import { authError, authLoginGoogleRequest, authLogoutRequest, authLogoutResponse } from './authActions';

// import type { AuthProvider } from 'firebase/auth';

// import type { AdditionalUserInfo } from '../types';
import type { AuthErrorPayload } from './authActions';

// interface UserCredential {
//   additionalUserInfo?: AdditionalUserInfo;
//   user: FirebaseUser;
// }

// interface ISignInPayload {
//   response: UserCredential;
//   error: Error;
// }

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

// const signInWithPopup = (provider: AuthProvider) =>
//   auth
//     .signInWithPopup(provider)
//     .then((response) => ({ response }))
//     .catch((error) => ({ error }));

function* watchLoginGoogleRequest() {
  yield takeEvery(authLoginGoogleRequest, function* takeEveryGoogleLoginRequest() {
    try {
      // const provider = new GoogleAuthProvider();
      // const { response, error }: ISignInPayload = yield call(signInWithPopup, provider);
      // if (error) {
      //   const providerError: AuthErrorPayload = { code: 400, message: error.message };
      //   yield put(authError({ error: providerError }));
      // } else {
      //   const {
      //     additionalUserInfo,
      //     user: { uid },
      //   } = response;
      //   yield put(
      //     authLoginGoogleResponse({
      //       additionalUserInfo,
      //       uid,
      //     })
      //   );
      // }
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
