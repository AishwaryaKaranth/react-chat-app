import React from "react";
import firebase from 'firebase';

const auth=firebase.auth();
const firestore=firebase.firestore();
const SignIn=()=>{
    const signInWithGoogle=()=>{
        const provider=new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider);
    }

    return(
        <div>
            <button onClick={signInWithGoogle}></button>
        </div>
    )
}

export default SignIn;