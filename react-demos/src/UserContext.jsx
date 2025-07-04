import { createContext } from "react";  
import React, { useState } from "react";


const UserContext = createContext();

const UserProvider = ({children}) =>{
    const [user, setUser] = useState("Raj");

    return(
        <UserContext.Provider value={{user,setUser}}>
           {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };