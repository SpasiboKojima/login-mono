import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  return signInWithPopup(auth, provider);
};
