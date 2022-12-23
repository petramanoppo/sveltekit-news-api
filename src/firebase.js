// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDRkpi3xxtSRXX4eViowmw3mgrS3NIoU2I',
	authDomain: 'uas-pti-kelompok3.firebaseapp.com',
	projectId: 'uas-pti-kelompok3',
	storageBucket: 'uas-pti-kelompok3.appspot.com',
	messagingSenderId: '371607974036',
	appId: '1:371607974036:web:779d9829a6eb1818ab8481',
	measurementId: 'G-HENHCLH2XP'
};
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
