import React, { useEffect, useRef, useState, useCallback } from "react";
import ChatContainer from "./components/ChatContainer";
import ChatRoomSelect from "./components/ChatRoomSelect";
import NavBar from "./components/NavBar";
import UserContext from './contexts/UserContext';
import LoginWithGoogleButton from "./components/LoginWithGoogleButton";
import toast, { Toaster } from 'react-hot-toast';
import GithubImg from './images/github-mark.svg';
import BgIconsRandom from './components/BgIconsRandom';
import { useSocket } from './utils/useSocket';
import { getRoomSlug } from "./utils/getRoomSlug";
import { playAudioNotification } from './utils/playAudioNotification';
import LogoutStateComponent from "./components/LogoutStateComponent";

const roomSlug = getRoomSlug();

function toastEnteredTheChat(name){
    toast.success( `${name} joined.` );
}
console.log( 'setting clone' );
let setMessagesGlob = () => {};
let setSocketLoadedGlob = () => {};

useSocket( socket => {

    console.log( 'Socket loaded in App.js', typeof setSocketLoadedGlob );
    socket.on('entered the chat', toastEnteredTheChat);
    socket.on('chat message', function(data) {
    
        playAudioNotification();
        
        console.log( 'data', data );
        setMessagesGlob( messages => {
            if( messages && messages.length > 0 ){
                return [...messages, data]
            } else {
                return [data];
            }
        } );
        
    });
    
    setSocketLoadedGlob( true );

} );




function App() {

    const [user, setUser] = useState( null );
    const [userDataInClientChecked, setUserDataInClientChecked] = useState( false );

    const [messages, setMessages] = useState( [] );
    const [socketLoaded, setSocketLoaded] = useState( false );

    setMessagesGlob = setMessages;
    setSocketLoadedGlob = setSocketLoaded;

    useEffect( () => {

        // Load user data from localStorage if exists
        const userData = localStorage.getItem( 'crUserData' );
        const userDataJson = JSON.parse( userData );
        if( userDataJson?.email ){
            const { email, name, picture } = userDataJson;
            setUser( { email, name, picture } );
            
        }

        setUserDataInClientChecked( true );
        
        fetch( `/api` ).then( res => res.json() ).then( res => {
            if( res && res.lastTenMessages && res.lastTenMessages[roomSlug] && res.lastTenMessages[roomSlug].length > 0 ){

                if( messages && messages.length ){
                    setMessages( [...res.lastTenMessages[roomSlug], ...messages] )
                } else {
                    setMessages( res.lastTenMessages[roomSlug] );
                }
            }
        } );

        
        
    }, [] )

    const elSiteIcon = document.getElementById( 'site-icon' );
    const srcIconNotif = document.getElementById( 'site-icon-notif' ).src;
    const srcIconNormal = document.getElementById( 'site-icon-normal' ).src;

    useEffect( () => {
        
        elSiteIcon.href = srcIconNotif;
        setTimeout( () => {
            elSiteIcon.href = srcIconNormal;
        }, 4000 )
    }, [messages] )

    

    return(
        <>
        <UserContext.Provider value={{user, setUser, setUserDataInClientChecked, userDataInClientChecked}}>
        
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
