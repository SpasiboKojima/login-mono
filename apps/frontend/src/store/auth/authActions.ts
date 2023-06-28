import { createAction } from '@reduxjs/toolkit';
import type { AdditionalUserInfo } from '../types';

type AuthLoginResponsePayload = {
  additionalUserInfo?: AdditionalUserInfo,
  uid: string,
};

export interface AuthErrorPayload {
  code: number
  message: string
}

export const authLogoutRequest = createAction('auth/logout/request');

export const authLogoutResponse = createAction('auth/logout/response');

export const authLoginGoogleRequest = createAction('auth/login/google/request');

export const authLoginGoogleResponse = createAction<AuthLoginResponsePayload>('auth/login/google/response');

export const authError = createAction<{ error: AuthErrorPayload }>('auth/error');
