import React, { useContext } from "react";
import Avatar from "react-avatar";
import UserContext from "../contexts/UserContext";
import * as linkify from "linkifyjs";
import linkifyStr from "linkify-string";

function MessageItem({ messageData }) {
	const { message = null, name = null, email : senderEmail, timeReceived = null, type = null } = messageData;
	console.log("message", message);
	console.log("name", name);

    if( type == 'notification: user joined' ){
        return(
            <div className="d-flex justify-content-center">
                <small className="border  rounded-pill px-2 py-1 text-secondary text-small text-center d-inline-block">{`${name} joined the chat`}</small>
            </div>
        ) 
    }
	const { user } = useContext(UserContext);
	const userEmail = user.email;
	const initials = name
		.split(" ")
		?.map?.((word) => word.split("").splice(0, 1))
		.join("");

	const html = linkifyStr(message, {
		target: "_blank",
	});
	console.log("html", html);

    const ownMessage = senderEmail === userEmail;

	return (
		<div
			className={`d-flex align-items-baseline p-2 ${
				ownMessage ? `flex-row-reverse` : ``
			}`}
		>
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
            <div className={`mx-2 d-flex flex-column ${ownMessage ? `align-items-end` : `align-items-start`}`}>

                <div
                    className=" rounded-2 px-2 py-1 border-black-200 border"
                    dangerouslySetInnerHTML={{ __html: html }}
                >
                </div>
                <div className="text-small mt-1">
                    <small>

                        {timeReceived && timeReceived.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })}
                    </small>
                </div>
            </div>
		</div>
	);
}

export default MessageItem;
