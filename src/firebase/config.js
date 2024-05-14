import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAxLPahdFI0obTgCbrwZlI0mIb2Cr1oU_g",
    authDomain: "learn-react-69efa.firebaseapp.com",
    projectId: "learn-react-69efa",
    storageBucket: "learn-react-69efa.appspot.com",
    messagingSenderId: "614705468063",
    appId: "1:614705468063:web:2c9a1169761cb8320e08aa"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth=firebase.auth();
const projectStorage=firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp}