export function getRoomSlug(){
    if( window ){
        if( window.location.pathname === '/' ) return '';
        const pathSegments = window.location.pathname.split( '/' );
        const roomName = pathSegments.pop() || pathSegments.pop();
        return roomName;
    }
    return null;
}