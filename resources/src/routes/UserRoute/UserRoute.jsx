import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import SpinnerPage from '../../components/SpinnerPage/SpinnerPage';
import userServices from '../../services/User';

export default function UserRoute({component: Component, ...rest}) {
    const [verficado, setVerificado] = useState(false);
    const [cargando, setCargando] = useState(true);
    let spinner = '';

    const usarApi = async () => {
        const res = await userServices.auth();

        if(res && res.resp){
            setVerificado(true);
            setCargando(false);
        }else{
            setCargando(false);
        }
    }

    function validar(){
        if (cargando || verficado) {
            if (cargando) {
                usarApi();
            }

            return verficado ? <Component /> : '';
        } else {
            toast.warn('Inicie Sesión para acceder a esta página');
            return <Redirect to='/' />;
        }
    }

    if (cargando) {
        spinner = <SpinnerPage/>
    } else {;
        spinner = '';
    }

    return (
        // ...rest obtener todos los atributos dados al ser invocado este componente
        <Route {...rest}>
            {/* Validar si el usuario esta autenticado para mandarlo al componente deseado o  en caso contrario al login  */}
            {spinner}
            {validar()}
        </Route>
    )
}
