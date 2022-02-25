import { initializeApp } from 'firebase/app';
import { configApi } from '../constants/api';

const firebaseConfig = {
    apiKey: configApi.REACT_APP_FIREBASE_API_KEY,
    authDomain: configApi.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: configApi.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: configApi.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: configApi.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: configApi.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: configApi.REACT_APP_FIREBASE_APP_ID
};

initializeApp(firebaseConfig);