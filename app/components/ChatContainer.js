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

    function sendMessage(){
        const inputVal = refInputField.current.value;
        if( inputVal && inputVal.trim().length > 0 ){
            socket.emit('chat message', {email: email, name: name, message: inputVal});
        }
        refInputField.current.value = '';
        console.log( 'refChatContainer.current.scrollHeight', refChatContainer.current.scrollHeight )
    }

    function handleKeyDownReturn( e ){

        if( returnToSend && e.key === 'Enter' ){
            sendMessage();
        }
    }

	return (
		<div className="container ">
			<div ref={refChatContainer} className="chat-container overflow-scroll border-start border-secondary vh-50 ">

                {
                    messages?.map?.( (messageData, i) => <MessageItem key={`${i}_${email}`} messageData={messageData} /> )
                }

            </div>

            {/* Message Input */}
            <form>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <div  className="d-flex align-items-start">
                    <textarea  className="form-control"  ref={refInputField} onKeyDown={ handleKeyDownReturn } ></textarea>

                    <div className="d-flex flex-column">
                        <button type="submit" className="btn btn-secondary ms-2" onClick={handleSendMessage}>Send</button>

                        
                    </div>
                </div>
                <Toggle className="mt-2" toggleOn={returnToSend} triggerToggle={ () => setReturnToSend( !returnToSend ) } text={"Press Enter to send"} />
            </form>

		</div>
	);
}

export default ChatContainer