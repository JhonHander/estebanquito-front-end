// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getUserInfo } from '../requests/getUserInfo';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUserInfo();
            setUser(userData);
            console.log('User:::', userData);
        };
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
