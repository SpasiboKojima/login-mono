import { FirebaseOptions, initializeApp } from 'firebase/app';

export const initializeFirebase = (config: FirebaseOptions) => {
  const app = initializeApp(config);
};
