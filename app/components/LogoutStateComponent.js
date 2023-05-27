import { useContext } from "react"

import UserContext from "../contexts/UserContext";
import BgIconsRandom from "./BgIconsRandom";
import LoginWithGoogleButton from "./LoginWithGoogleButton";

export default function LogoutStateComponent(){

    const { user, setUser, userDataInClientChecked } = useContext( UserContext );

    return(
        <div className="py-5 h-100 overflow-hidden ">
            <div className="container h-100">

                
                <div className="row h-100">
                    <div className="col-md-8 col-12 h-100 d-flex flex-column justify-content-center">
                        <div className="large-cta font-black mb-5">
                            Join the <span className="text-secondary">chat</span>
                        </div>
                        { 
                            !user &&
                            userDataInClientChecked &&
                            <LoginWithGoogleButton user={user} setUser={setUser}/>
                        }
                    </div>
                    <div className="col-md-4 col-12">
                        <BgIconsRandom />
                    </div>
                    
                </div>

            </div>
        </div>

    )
}