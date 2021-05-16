import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function PublicRoute({component: Component, ...rest}) {
    let auth = false;
    
    if(localStorage.getItem('token') != null){
        auth = true;
    }

    return (
        // ...rest obtener todos los atributos dados al ser invocado este componente
        <Route {...rest}>
            {/* Validar si el usuario esta autenticado para mandarlo al componente deseado o  en caso contrario al login  */}
            {!auth ? <Component /> : <Redirect to='/' />}
        </Route>
    )
}
