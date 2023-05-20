import React, { useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import toast from 'react-hot-toast';
import { broadCastChatEntrance } from "../utils/broadcastChatEntrace";

function LoginWithGoogleButton() {

    const { user, setUser } = useContext( UserContext );

	useEffect(() => {
		async function handleCredentialResponse(response) {
			console.log("Encoded JWT ID token: " + response.credential);
            const toastId = toast.loading('Loading your profile...');
			try {
				const res = await fetch(`${window.location.origin}/authenticate`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: JSON.stringify(response),
				});
				const resJson = await res.json();

				console.log("res res", resJson);
                toast.success('Profile loaded!');

                const { email, name, picture } = resJson;
                toast.dismiss( toastId );
                setUser( { email, name, picture } );

                broadCastChatEntrance( name );
			} catch (err) {
				console.log("err with authentication", err);
                toast.error('Something went wrong');

			}
		}
		window.onload = function () {
			google.accounts.id.initialize({
				client_id:
					"329246443409-t7k2jd2n8vg7uc730uqsk8rr5630huj0.apps.googleusercontent.com",
				callback: handleCredentialResponse,
			});
			google.accounts.id.renderButton(
				document.getElementById("buttonDiv"),
				{ theme: "outline", size: "large" } // customization attributes
			);
			google.accounts.id.prompt(); // also display the One Tap dialog
		};
	}, []);
	return (
        <div className="container mb-4">
            <div id="buttonDiv"></div>
        </div>
    )
}

export default LoginWithGoogleButton;
