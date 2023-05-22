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
        
        fetch( `/api` ).then( res => res.json() ).then( res => {
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
            <div className="py-5 h-100 overflow-hidden ">
                <div className="container h-100">

                    
                    <div className="row h-100">
                        <div className="col-md-8 col-12 h-100 d-flex flex-column justify-content-center">
                            <div className="large-cta font-black mb-5">
                                Join the <span className="text-secondary">chat</span>.
                            </div>
                            <LoginWithGoogleButton user={user} setUser={setUser}/>
                        </div>
                        <div className="col-md-4 col-12">
                            <BgIconsRandom />
                        </div>
                        
                    </div>

                </div>
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

        <div className="container py-2 footer border-top">
            <a href="https://github.com/paulmerupu91/chat-room" className="link-muted link-reset link-underline link-underline-opacity-0 d-flex justify-content-end align-items-center">
                <img src={GithubImg} alt="Github logo" width={20} height={20} className="me-2" />
                <span className="text-small">Github Repository</span>
            </a>
        </div>
        </>
    )
}

export default App;
