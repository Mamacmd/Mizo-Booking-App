import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// I Google Firebase config dahna tur - a hnua i thlak dawn nia
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "mizo-booking-app.firebaseapp.com",
  projectId: "mizo-booking-app",
  storageBucket: "mizo-booking-app.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);