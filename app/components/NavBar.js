import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import NavDropdown from "./NavDropdown";
import RoomsDropdown from "./RoomsDropdown";
import { getRoomSlug } from "./../utils/getRoomSlug";

function handleDropdownMenuClose( {setIsVisibleUserDropdown, setIsVisibleRoomsDropdown} ){

    document.addEventListener( 'click', e => {
        console.log( 'e', e.target );
    
        if( document.querySelector( '.drop-down-triggers' ).contains( e.target ) ) return;
        
        if(
            !( document.querySelector( '.dropdown-nav-menus' ).contains( e.target ) )
        ){
            setIsVisibleUserDropdown( false );
            setIsVisibleRoomsDropdown( false );
        }
    } )

}

function NavBar() {
	const { user, setUser, setUserDataInClientChecked } = useContext(UserContext);
    const [ isVisibleUserDropdown, setIsVisibleUserDropdown ] = useState();
    const [ isVisibleRoomsDropdown, setIsVisibleRoomsDropdown ] = useState();

    useEffect( () => {
        handleDropdownMenuClose( {setIsVisibleUserDropdown, setIsVisibleRoomsDropdown} );
    }, [] )

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
					<div className="col-md-4 drop-down-triggers col-2 d-flex justify-content-end text-right position-relative">
                    {/* <button onClick={ () => setIsVisibleDropdown( !isVisibleDropdown ) }>Menu</button> */}
                        <button className="btn btn-sm btn-outline-secondary border-0 rounded-pill" onClick={ () => setIsVisibleRoomsDropdown( !isVisibleRoomsDropdown ) }>
                            <RoomSvg  />
                        </button>
                        <button className="btn btn-sm btn-outline-secondary border-0 rounded-pill" onClick={ () => setIsVisibleUserDropdown( !isVisibleUserDropdown ) }>
                            <UserIcon  />
                        </button>
						
					</div>
                    
				</div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end dropdown-nav-menus">
                        <NavDropdown handleLogout={handleLogout} user={user} isVisible={isVisibleUserDropdown}/>
                        <RoomsDropdown isVisible={isVisibleRoomsDropdown}/>
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

const RoomSvg = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="22"
		height="22"
		fill="currentColor"
		className="bi bi-box"
		viewBox="0 0 16 16"
	>
		<path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
	</svg>
);