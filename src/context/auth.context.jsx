import { useContext, createContext, useState, useEffect } from "react";
import AuthService from "../services/auth.service";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(getUser);
    const login = (user) => SetUser(user);
    const logout = () => {
        AuthService.logout
        SetUser(null);
    }
    function getUser() {
        const temp = localStorage.getItem('user')
        const savedUser = JSON.parse(temp);
        return savedUser || null;
    }
    useEffect(() => {
        const temp = JSON.stringify(user)
        localStorage.setItem('user', temp)

    }, [user])
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext)