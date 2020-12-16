import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routes/AppRouter'

const init = () =>{
    //para evalar convertimos a un objeto
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
}


export const HeroesApp = () => {
    //usamos nuestro reducer
    const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
       localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        //higher order component
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
