import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo')
        if (userInfo) {
            setUserLogged(true)
            setUser(JSON.parse(userInfo)) // transforma a string em objeto
        } else {
            setUserLogged(false)
            setUser({})
        }
        setLoading(false)
    }, [])

    const loginUser = async (inputValues) => {
        const response = await fetch('http://localhost:3001/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputValues)
            }
        );
        const data = JSON.stringify(await response.json());
        localStorage.setItem('userInfo', data);
        setUserLogged(true);
        setUser(JSON.parse(data));
        navigate("/");
    }

    const logoutUser = async () => {
        setUserLogged(false)
        localStorage.clear();
        navigate("/login");
    }
    if (loading) {
        return (<h1>Loading...</h1>)
    }

    return (
        <AuthContext.Provider value={{ loginUser, userLogged, logoutUser, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }