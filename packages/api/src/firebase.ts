import { FirebaseOptions, initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import firebase from 'firebase/compat/app';
import { Firestore, getFirestore } from 'firebase/firestore';

export let firestore: Firestore;

export const initializeFirebase = (config: FirebaseOptions) => {
  const app = initializeApp(config);

  firestore = getFirestore(app);

  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LcdCd8mAAAAAE3VsGicwNyVWQUYomzgE-umbZlC'),
    isTokenAutoRefreshEnabled: true,
  });
};

export type QuerySnapshot = firebase.firestore.QuerySnapshot;
