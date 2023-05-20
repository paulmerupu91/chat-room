import React, { useEffect, useRef, useState, useCallback } from "react";
import ChatContainer from "./components/ChatContainer";
import ChatRoomSelect from "./components/ChatRoomSelect";
import NavBar from "./components/NavBar";
import UserContext from './contexts/UserContext';
import LoginWithGoogleButton from "./components/LoginWithGoogleButton";
import toast, { Toaster } from 'react-hot-toast';

function toastEnteredTheChat(name){
    toast.success( `${name} joined.` );
}

socket.on('entered the chat', toastEnteredTheChat);

function App() {

    const defaultRooms = [
        {
            name: 'New York'
        },
        {
            name: 'San Diego'
        },
        {
            name: 'Miami'
        },
        {
            name: 'Chicago'
        },
        {
            name: 'Austin'
        },
        {
            name: 'Boston'
        },
    ]

    const [user, setUser] = useState( null );

    const [messages, setMessages] = useState( [] );

    socket.on('chat message', function(data) {
        console.log( 'data', data );
        if( Array.isArray( messages ) && messages.length > 0 ){
            console.log( 'Messages found' );
            setMessages( () => [...messages, data] );
        } else {
            console.log( 'Messages not found' );
            setMessages( [data] );
        }
    });
    

    useEffect( () => {
        
        
        
    }, [] )

    return(
        <>
        <UserContext.Provider value={{user, setUser}}>
        
            <NavBar />
            { user?.email && <div className="container">Email: {user.email}</div> }
            { !(user?.email) && <LoginWithGoogleButton user={user} setUser={setUser}/> }
            { user?.email && <ChatContainer messages={messages} setMessages={setMessages} /> }
            <ChatRoomSelect  rooms={defaultRooms}/>
            <Toaster />
        </UserContext.Provider>
        </>
    )
}

export default App;
