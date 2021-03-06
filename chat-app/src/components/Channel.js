import React from "react";
import {useState, useEffect, useRef} from "react";
import firebase from "firebase";
import {useFirestoreQuery} from "../hooks";
import Message from "./Message";
import {db} from "../firebase_config.js";
const Channel=({user=null})=>{

    
    const messagesRef=db.collection("messages");
    const messages=useFirestoreQuery(
        messagesRef.orderBy('createdAt','desc').limit(100)
    );

    const [newMessage, setNewMessage]=useState('');
    const input=useRef();
    const bottom=useRef();

    const {uid, displayName, photoURL}=user;
    useEffect(()=>{
        if(input.current){
            input.current.focus();
        }
    },[input]);

    const handleChange=(e)=>{
        setNewMessage(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        const trimmedMessage=newMessage.trim();
        if(trimmedMessage){
            messagesRef.add({
                text:trimmedMessage,
                createdAt:firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL,
            });
            setNewMessage('');
            bottom.current.scrollIntoView({behavior:'smooth'});
        }

    };
    return(
        <div className="flex flex-col h-full">
      <div className="overflow-auto h-full">
        <div className="py-4 max-w-screen-lg mx-auto">
          <div className="border-b dark:border-gray-600 border-gray-200 py-8 mb-4">
            <div className="font-bold text-3xl text-center">
              <p className="mb-1">Welcome to</p>
              <p className="mb-3">Chattr</p>
            </div>
            
          </div>
          <ul>
            {messages
              ?.sort((first, second) =>
                first?.createdAt?.seconds <= second?.createdAt?.seconds ? -1 : 1
              )
              ?.map(message => (
                <li key={message.id}>
                  <Message {...message} />
                </li>
              ))}
          </ul>
          <div ref={bottom} />
        </div>
      </div>
      <div className="mb-6 mx-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row bg-gray-200 dark:bg-coolDark-400 rounded-md px-4 py-3 z-10 max-w-screen-lg mx-auto dark:text-white shadow-md"
        >
          <input
            ref={input}
            type="text"
            value={newMessage}
            onChange={handleChange}
            placeholder="Type your message here..."
            className="flex-1 bg-transparent outline-none"
          />
          <button
            type="submit"
            disabled={!newMessage}
            className="uppercase font-semibold text-sm tracking-wider text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    )
};

export default Channel;
