import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { defaultRooms } from "../../api/defaultRooms";

function RoomsDropdown({ isVisible = false }) {

    const generalRoom = {
        name: 'General',
        href: '/'
    }

    const handleRoomClick = (room) => {
        if( room.name == '' ){
            window.location.href = generalRoom.href
        } else {
            window.location.href = `/rooms/${room.slug}`
        }
    }

    
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					style={{ top: "55px", maxWidth: "240px" }}
					className="w-100 position-absolute right-0 shadow-sm"
				>
					<div className="position-relative">
						<ul className="list-group">
                        { defaultRooms.map( (room) =>
							<li key={`room_${room.name}`} className="list-group-item">
								<a
									href="#"
									className="link-secondary link-underline-opacity-0"
									onClick={(e) => handleRoomClick( room )}
								>
									{room.name == '' ? generalRoom.name : room.name}
								</a>
							</li>
                        ) }
							
						</ul>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default RoomsDropdown;
