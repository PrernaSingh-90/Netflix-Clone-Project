import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCIWwBJzfOelocnSiW2zn8YRdQSmWi_O9Q",
  authDomain: "netflix-clone-b9dfa.firebaseapp.com",
  projectId: "netflix-clone-b9dfa",
  storageBucket: "netflix-clone-b9dfa.appspot.com",
  messagingSenderId: "521704254791",
  appId: "1:521704254791:web:104aa7cf000752d51a7062"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
  const res =  await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await addDoc(collection(db, "user"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email,
  });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}


const login = async (email, password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout =  () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};
