import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import NavDropdown from "./NavDropdown";
import { getRoomSlug } from "./../utils/getRoomSlug";

function NavBar() {
	const { user, setUser, setUserDataInClientChecked } = useContext(UserContext);
    const [ isVisibleDropdown, setIsVisibleDropdown ] = useState();

    const roomName = getRoomSlug();
    console.log( 'roomName', roomName );

	const handleLogout = (e) => {
		e.preventDefault();
		setUser(() => {
			localStorage.setItem("crUserData", null);
			return null;
		});
		window.location.reload();
	};

	return (
		<div className="container-fluid navbar position-sticky top-0 border-bottom">
			<div className="container py-3">
				<div className="row d-flex align-items-center">
					<div className="col-10 col-md-8">
						<h1 className=" h3 text-secondary mb-0">
                            ChatRoom
                            { roomName && <span className="ms-3 lead text-black text-uppercase">{`${roomName.replace( '-', ' ' )}`}</span> }
                        </h1>
					</div>
					<div className="col-md-4 col-2 d-flex flex-column align-items-end text-right position-relative">
                    {/* <button onClick={ () => setIsVisibleDropdown( !isVisibleDropdown ) }>Menu</button> */}
                        <button className="btn btn-sm btn-outline-secondary border-0 rounded-pill" onClick={ () => setIsVisibleDropdown( !isVisibleDropdown ) }>
                            <UserIcon  />
                        </button>
						
					</div>
                    
				</div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <NavDropdown handleLogout={handleLogout} user={user} isVisible={isVisibleDropdown}/>
                    </div>
                </div>
			</div>
		</div>
	);
}

export default NavBar;

const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>