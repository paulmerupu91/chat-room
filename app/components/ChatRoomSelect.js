import React from 'react'

function ChatRoomSelect( {rooms} ) {
    
  return (
    <div className='container  my-5'>

        <h3>Chat Rooms</h3>
        <div className="d-flex flex-wrap">
        {
            rooms.map( (room, i) => <div key={`room-${i}`} className="btn d-inline-flex align-items-center btn-outline-secondary rounded-pill me-2 mb-3">{room.name}</div> )
        }
        </div>
        
    </div>
  )
}

export default ChatRoomSelect