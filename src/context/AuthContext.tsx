import { createContext, ReactNode, useState } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    username;
    isLogged: boolean;
    userLogin: (user) => void;
    logout: (user) => void;
}

let isLogged = false;

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [username, setUserName] = useState('');

    function userLogin(name) {
        setUserName(name)
        isLogged = true;
    }

    function logout() {
        setUserName('');
        isLogged = false;
    }

    return (
        <AuthContext.Provider
            value={{
                username,
                isLogged,
                userLogin,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}