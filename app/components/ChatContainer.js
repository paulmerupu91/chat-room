import React from 'react';
import React, { useEffect, useRef, useState, useContext } from "react";

import MessageItem from "./MessageItem";
import UserContext from '../contexts/UserContext';
import Toggle from './Toggle';

function ChatContainer( {messages, setMessages} ) {
    const refInputField = useRef();
    const refChatContainer = useRef();
    const { user: {email, name} } = useContext( UserContext );

    const [ returnToSend, setReturnToSend ] = useState( true );

    useEffect( () => {
        refChatContainer.current.scrollTo('0', refChatContainer.current.scrollHeight);
        refInputField.current.value = refInputField.current.value.trimStart();
    }, [messages] )

    function handleSendMessage(e){
        e.preventDefault();
        console.log( 'refInputField', refInputField );

        sendMessage()
    }

    function sendMessage( value ){
        const inputVal = value || refInputField.current.value;
        if( inputVal && inputVal.trim().length > 0 ){
            socket.emit('chat message', {email: email, name: name, message: inputVal});
        }
        refInputField.current.value = '';
        console.log( 'refChatContainer.current.scrollHeight', refChatContainer.current.scrollHeight )
    }

    const InsertEmoji = ({value}) => <span className="emoji-send border border-light bg-light px-2 py-1 rounded-2 mx-2" onClick={() => sendMessage(value)}>{value}</span>

    function handleKeyDownReturn( e ){

        if( returnToSend && e.key === 'Enter' ){
            sendMessage();
        }
    }

	return (
        <>

        
		<div className="container-fluid overflow-scroll h-100" ref={refChatContainer}>
			<div  className="chat-container container ">

                {
                    messages?.map?.( (messageData, i) => <MessageItem key={`${i}_${email}`} messageData={messageData} /> )
                }

            </div>
        </div>
        <div className="container-fluid border-top position-sticky bottom-0 bg-white">
            <div className="container">
                
                {/* Message Input */}
                <form className="py-3">
                    
                    <div className="d-flex mx-n2 mb-3">
                        
                        {/* Wave */}
                        <InsertEmoji value="&#128075;" />

                        {/* Laugh */}
                        <InsertEmoji value="&#128516;" />

                        {/* Applause */}
                        <InsertEmoji value="&#128079;" />

                        {/* Heart */}
                        <InsertEmoji value="&#128155;" />

                        {/* 100 */}
                        <InsertEmoji value="&#128175;" />

                        {/* Sad */}
                        <InsertEmoji value="&#128542;" />

                        {/* Hands Raised */}
                        <InsertEmoji value="&#128588;" />

                        {/* Angry */}
                        {/* <InsertEmoji value="&#128545;" /> */}
                        
                    </div>
                    <div  className="d-flex align-items-start">

                        <div className="w-100" >
                            
                            <textarea className="form-control"  ref={refInputField} onKeyDown={ handleKeyDownReturn } ></textarea>
                        </div>

                        <div className="d-flex flex-column">
                            <button type="submit" className="btn btn-secondary ms-2" onClick={handleSendMessage}>Send</button>

                            
                        </div>
                    </div>
                    <Toggle className="mt-2" toggleOn={returnToSend} triggerToggle={ () => setReturnToSend( !returnToSend ) } text={"Press &#xF131; to send"}>
                        Press Enter
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-return-left mx-1 p-1 bg-light h5" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                        </svg> to send
                    </Toggle>
                </form>
            </div>

		</div>

        </>
	);
}

export default ChatContainer