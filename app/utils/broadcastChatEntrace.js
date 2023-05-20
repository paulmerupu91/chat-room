export function broadCastChatEntrance( name ){
    socket.emit('entered the chat', name );
}