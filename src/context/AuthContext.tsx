import { createContext, ReactNode, useState } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    username;
    userLogin: (user) => void;
    isLogged: boolean;
}

let isLogged = false;

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [username, setUserName] = useState('');

    function userLogin(name) {
        setUserName(name)
        isLogged = true;
    }

    return (
        <AuthContext.Provider
            value={{
                username,
                userLogin,
                isLogged
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}