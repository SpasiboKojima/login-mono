import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { firestore } from './firebase';

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const response = await signInWithPopup(auth, provider);

  try {
    const docRef = doc(firestore, 'users', response.user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(docRef, {
        name: response.user.displayName,
        email: response.user.email,
      });
    }
  } catch (err) {
    console.error('err :>> ', err);
  }

  return response;
};
