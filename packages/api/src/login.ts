import { AuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { auth } from './firebase';

export const signInWithPopup = (provider: AuthProvider) =>
  auth
    .signInWithPopup(provider)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(provider);
};
