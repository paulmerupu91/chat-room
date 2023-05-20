import React, { useContext } from "react";
import Avatar from "react-avatar";
import UserContext from "../contexts/UserContext";
import * as linkify from 'linkifyjs';
import linkifyStr from "linkify-string";

function MessageItem({ messageData }) {

	const { message, name, email } = messageData;
	console.log("message", message);
	console.log("name", name);
    const { user } = useContext( UserContext );
    const userEmail = user.email;
    const initials = ((name.split( ' ' ))?.map?.( word => word.split('').splice( 0, 1 ) )).join('');

    const html = linkifyStr(message, {
        target: "_blank",
    });
    console.log( 'html', html );
	return (
		<div className={`d-flex align-items-baseline p-2 ${email === userEmail ? `flex-row-reverse` : ``}`}>
			<span>
				<Avatar
					name={name}
					initials={initials}
					maxInitials={2}
					size="30"
					textSizeRatio={2}
					round={true}
                    color={"#09cd57"}
				/>
			</span>
			<span className="mx-2 rounded-2 px-2 py-1 border-black-20 border" dangerouslySetInnerHTML={{__html: html}}>
				
			</span>
		</div>
	);
}

export default MessageItem;
