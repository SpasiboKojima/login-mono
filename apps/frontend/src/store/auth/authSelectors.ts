import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const selectAuth = ({ auth }: RootState) => auth;

export const selectAuthAuthorized = createSelector(selectAuth, ({ authorized }) => authorized);
export const selectAuthUserId = createSelector(selectAuth, ({ userId }) => userId);
export const selectAuthAdditionalUserInfo = createSelector(selectAuth, ({ additionalUserInfo }) => additionalUserInfo);
