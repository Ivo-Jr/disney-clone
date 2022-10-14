import { initializeApp  } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC0p7BWxIl9Zng8yd6v9xI0Gd4uX2sCXjo",
  authDomain: "disney-clone-bcb41.firebaseapp.com",
  projectId: "disney-clone-bcb41",
  storageBucket: "disney-clone-bcb41.appspot.com",
  messagingSenderId: "189633993039",
  appId: "1:189633993039:web:48639849a98b3279578d3a",
  measurementId: "G-C048LP92HS"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { 
  auth, 
  provider, 
  signInWithPopup,
  signOut, 
  onAuthStateChanged 
};
