import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom';
/*
    PrivateRouter: Componente que valida si el usuario esta autenticado para luego enviarlo
    a la ruta deseada si este esta logueado correctamente o al login si este no lo esta.
*/

// {component: Component} - Obtener el componente del router luego renombrarlo y poner el primer
// caracter para que React lo detecte como componente
export default function PrivateRoute({component: Component, ...rest}) {
    // Obtener verificacion del usuario
    let auth = false;
    
    if(localStorage.getItem('token') != null){
        auth = true;
    }
    
    // Obtener informacion de la ruta anterior
    const location = useLocation();
    
    return (
        // ...rest obtener todos los atributos dados al ser invocado este componente
        <Route {...rest}>
            {/* Validar si el usuario esta autenticado para mandarlo al componente deseado o  en caso contrario al login  */}
            {auth ? <Component /> : <Redirect to={{ pathname: '/login', state: { from:location }}} />}
        </Route>
    )
}
