export function useSocket( cb ){
    let socket;
    if( window?.socket ){
        console.log( 'From useSocket: socket available globally' );
        socket = window.socket;
        cb( socket );
    } else {
        document.addEventListener( 'socketCreated', (e) => {
            
            console.log( 'Socket found with listener' );
            socket = e.detail.socket;
            cb( socket );
            
        } )
    }
    
}