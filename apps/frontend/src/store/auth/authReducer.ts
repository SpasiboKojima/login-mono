import { createReducer } from '@reduxjs/toolkit';

import { AdditionalUserInfo } from '../types';
import { authError, authLoginGoogleRequest, authLoginGoogleResponse, authLogoutResponse } from './authActions';

interface AuthSlice {
  userId: string;
  authorized: boolean;
  additionalUserInfo?: AdditionalUserInfo;
  error?: string;
}

const initialState: AuthSlice = {
  userId: '',
  authorized: false,
  // additionalUserInfo: undefined,
  additionalUserInfo: {
    profile: {
      name: 'Alex',
      email:'someemail'
    }
  },
  error: undefined,
};

const authReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(authLogoutResponse, (state) => {
      state.userId = '';
      state.error = undefined;
      state.authorized = false;
      state.additionalUserInfo = undefined;
    })
    .addCase(authLoginGoogleRequest, (state) => {
      state.error = undefined;
    })
    .addCase(authLoginGoogleResponse, (state, { payload: { additionalUserInfo, uid } }) => {
      state.userId = uid;
      state.error = undefined;
      state.additionalUserInfo = additionalUserInfo;
    })
    .addCase(authError, (state, { payload: { error } }) => {
      state.error = error.message;
    })
);

export default authReducer;
