import React from "react";
import {useAuthState} from 'react-firebase-hooks/auth';
import {Firestore, Storage} from "../firebase_config.js";
import SignIn from "../Auth/signin";
import firebase from "firebase";

const auth=firebase.auth();
const firestore=firebase.firestore();

const Home =()=>{
    const [user]=useAuthState(auth);
    return(
        <div>
            <header>
                Welcome!
            </header>
            <section>
                hello
            </section>
        </div>
    )
}

export default Home;