import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function NavDropdown( {isVisible, user, handleLogout} ) {
    
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
                    style={{top: "55px", maxWidth: "240px"}}
                    className="w-100 position-absolute right-0 shadow-sm"
				>
					<div className="position-relative">
                    
						<ul className="list-group">
                            {user &&
                            <>

                                <li
                                    className="list-group-item"
                                >
                                    <a
                                        href="#"
                                        className="link-secondary link-underline-opacity-0"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </a>
                                </li>
                                <li
                                    className="list-group-item text-small email-info"
                                >
                                    {user?.email}
                                </li>
                            </>
                            }
							
						</ul>
						
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default NavDropdown;
