import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import SpinnerPage from '../../components/SpinnerPage/SpinnerPage';
import userServices from '../../services/User';

export default function LevelRoute({component: Component, ...rest}) {
    const [verficado, setVerificado] = useState(false);
    const [cargando, setCargando] = useState(true)
    const [level, setLevel] = useState(null);
    let spinner = '';
    
    const usarApi = async () => {
        const res = await userServices.level();
        if(res){
            setVerificado(true);
            setCargando(false);
            setLevel(res);
        }else{
            setVerificado(false);
            setCargando(false);
        }
    }

    function validar(){
        if (cargando || verficado) {
            if (cargando) {
                usarApi();
            }
            
            return verficado ? <Component nivel={level} /> : '';
        } else {
            toast.warn('No tienes acceso a esta pagina');
            return <Redirect to='/page404' />;
        }
    }
    
    if (cargando) {
        spinner = <SpinnerPage/>;
    } else {
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



