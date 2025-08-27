import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALyoV_OG593Ha5nNTCpy_KCL1r9WT_58w",
  authDomain: "otp1-67d10.firebaseapp.com",
  projectId: "otp1-67d10",
  storageBucket: "otp1-67d10.firebasestorage.app",
  messagingSenderId: "601806371104",
  appId: "1:601806371104:web:785561a5303484f16fff45",
  measurementId: "G-2JYGV6DK00"
};

// Initialize Firebase
if (!getApps().length) {
	initializeApp(firebaseConfig);
}
// Initialize Firebase auth
export const auth = getAuth();

// // Import the functions you need from the SDKs you need
