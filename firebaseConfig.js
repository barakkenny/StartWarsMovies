import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_API_KEY,
  authDomain: "login-auth-ce0bb.firebaseapp.com",
  projectId: "login-auth-ce0bb",
  storageBucket: "login-auth-ce0bb.appspot.com",
  messagingSenderId: "579905441613",
  appId: "1:579905441613:web:03fcaaefafacd9d11a7104"
};

export const app = initializeApp(firebaseConfig);

