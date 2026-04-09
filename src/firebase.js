import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-M4WR-1ppw4GurJkbc-vLESMQmxMKAxY",
  authDomain: "fir-react-05.firebaseapp.com",
  projectId: "fir-react-05",
  storageBucket: "fir-react-05.firebasestorage.app",
  messagingSenderId: "507759076174",
  appId: "1:507759076174:web:4f0d29e028c30a8648741f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage };