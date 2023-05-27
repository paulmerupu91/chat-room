import { getRoomSlug } from "./utils/getRoomSlug";
import { defaultRooms } from "../api/defaultRooms";
import  * as io from 'socket.io-client/dist/socket.io';

const roomSlug = getRoomSlug();

if( roomSlug === false ) return;

// window.addEventListener( "load", initSocket );

function initSocket(){
    console.log( 'initializing socket object' );
    
    if( defaultRooms.map( room => room.slug ).includes( roomSlug ) ){
        var socket = io(`/${roomSlug}`);
        console.log( 'socket main', socket );
        
        const eventSocketCreated = new CustomEvent( "socketCreated", {
            detail: {
                socket: socket
            }
        } );
        window.socket = socket;

        document.dispatchEvent( eventSocketCreated );
    }

}

initSocket();