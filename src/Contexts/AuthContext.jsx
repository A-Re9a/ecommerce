import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return !!localStorage.getItem('userToken');
    });

    const login = (user) => {
        localStorage.setItem('userToken', JSON.stringify(user));
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        setIsLoggedIn(!!token);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
