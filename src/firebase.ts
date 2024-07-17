import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-XLT0mnAJjAvac4cqo5EGRLPlmLyPwgE",
  authDomain: "rick-and-morty-64eaf.firebaseapp.com",
  projectId: "rick-and-morty-64eaf",
  storageBucket: "rick-and-morty-64eaf.appspot.com",
  messagingSenderId: "577834945083",
  appId: "1:577834945083:web:4faec87fc8b13158f96a1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
