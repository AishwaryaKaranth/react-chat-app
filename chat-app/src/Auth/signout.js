import React from "react"
import firebase from "firebase";

const SignOut=()=>{
    return auth.currentUser &&(
        <div>
            <button onClick={()=>auth.signOut()}></button>
        </div>
    )
}

export default SignOut;