
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBmoaC-bwUzb4SWVJb_MBbPVkYrA4mt7g8",
    authDomain: "appmycel-a87ee.firebaseapp.com",
    projectId: "appmycel-a87ee",
    storageBucket: "appmycel-a87ee.appspot.com",
    messagingSenderId: "600543358299",
    appId: "1:600543358299:web:82de0dcc9cd0f95c5d3e7e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)