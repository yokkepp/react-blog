import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDiog6ru3c-Zsp27RF6QglYp2VDQH884jM",
	authDomain: "react-6b4a6.firebaseapp.com",
	projectId: "react-6b4a6",
	storageBucket: "react-6b4a6.appspot.com",
	messagingSenderId: "534594113271",
	appId: "1:534594113271:web:252600661b379d8d4e4df2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
