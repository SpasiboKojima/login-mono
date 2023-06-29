import { collection, doc, getDoc } from 'firebase/firestore';

import { firestore } from './firebase';

export const getUserInfo = async (userId: string) => {
  const collectionRef = collection(firestore, 'users');
  const docRef = doc(collectionRef, userId);
  const snapshot = await getDoc(docRef);
  const data = snapshot.data();

  return data;
};
