import { createContext, useState } from "react";

const LogoutContext = createContext()
// AuthProvider is for setup
const LogoutProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false)
    
    return(
        <LogoutContext.Provider value={{loggedIn, setLoggedIn}}>
            {/* children is default keyword in line 11 */}
            {props.children}
        </LogoutContext.Provider>
    )
}

export {LogoutContext, LogoutProvider}