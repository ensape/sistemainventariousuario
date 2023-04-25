import React from "react";
import { createContext, useContext } from "react";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider')

    return context
};

export function AuthProvider({children}) {
    const credentials = {   // user = credentials
        login : true
    };

    return <authContext.Provider value = {{credentials}}>{children}</authContext.Provider>
};
