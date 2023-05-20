import React, { useContext } from "react";
import Avatar from "react-avatar";
import UserContext from "../contexts/UserContext";

function MessageItem({ messageData }) {

	const { message, name, email } = messageData;
	console.log("message", message);
	console.log("name", name);
    const { user } = useContext( UserContext );
    const userEmail = user.email;
    const initials = ((name.split( ' ' ))?.map?.( word => word.split('').splice( 0, 1 ) )).join('');

	return (
		<div className={`d-flex mx-n2 align-items-baseline p-3 ${email === userEmail ? `flex-row-reverse` : ``}`}>
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
			<span className="mx-2 rounded-2 px-3 py-2 border-primary border">
				{message}
			</span>
		</div>
	);
}

export default MessageItem;