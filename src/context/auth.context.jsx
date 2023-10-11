import { useContext, createContext , useState } from "react";
import AuthService from "../services/auth.service";
const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const [user , SetUser] = useState(null);
    const login = (user) => SetUser(user);
    const logout = () => {
        AuthService.logout
        SetUser(null);
    }
    return (
        <AuthContext.Provider value={{user , login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext)