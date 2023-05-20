import React, { useEffect, useRef, useState, useCallback } from "react";
import ChatContainer from "./components/ChatContainer";
import ChatRoomSelect from "./components/ChatRoomSelect";
import NavBar from "./components/NavBar";
import UserContext from './contexts/UserContext';
import LoginWithGoogleButton from "./components/LoginWithGoogleButton";
import toast, { Toaster } from 'react-hot-toast';
import GithubImg from './images/github-mark.svg';
import BgIconsRandom from './components/BgIconsRandom';

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
        
        fetch( 'https://localhost:3000/api' ).then( res => res.json() ).then( res => {
            if( res && res.lastTenMessages && res.lastTenMessages.length > 0 ){

                if( messages && messages.length ){
                    setMessages( [...res.lastTenMessages, ...messages] )
                } else {
                    setMessages( res.lastTenMessages );
                }
            }
        } );
        
    }, [] )

    const LogoutStateComponent = () => {
        return(
            <div className="py-5 h-100 overflow-hidden">

                <LoginWithGoogleButton user={user} setUser={setUser}/>
                <div className="large-cta d-flex my-5 container align-items-baseline">
                    Join the chat.
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                    </svg> */}
                </div>
                <BgIconsRandom />

            </div>

        )
    }

    return(
        <>
        <UserContext.Provider value={{user, setUser}}>
        
            <NavBar />
            {/* { user?.email && <div className="container">Email: {user.email}</div> } */}
            { !(user?.email) && <LogoutStateComponent /> }
            { user?.email && <ChatContainer messages={messages} setMessages={setMessages} /> }
            {/* <ChatRoomSelect  rooms={defaultRooms}/> */}
            <Toaster />
        </UserContext.Provider>

        <div className="container py-2 footer">
            <a href="https://github.com/paulmerupu91/chat-room" className="link-muted link-reset link-underline link-underline-opacity-0 d-flex justify-content-end align-items-center">
                <img src={GithubImg} alt="Github logo" width={20} height={20} className="me-2" />
                <span className="text-small">Github Repository</span>
            </a>
        </div>
        </>
    )
}

export default App;
