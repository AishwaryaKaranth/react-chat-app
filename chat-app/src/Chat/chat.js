import React from "react";

const Chat=()=>{
    const ref=useRef();
    const messageRef=firestore.collection('messages');
    const query=messagesRef.orderBy('createdAt').limit(25);
    
    return(
      <>
      </>
    )
  }
  