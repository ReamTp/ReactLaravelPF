import React from 'react';
import { Button } from 'react-bootstrap';
import { campo } from '../../utils/img';
import './MyFunctionsPage.scss';

export default function MyFunctions() {
    return (
        <>
            <div id="function-home">
                <div className="text">
                    <h1>Bienvenido a tus Funciones</h1>
                    <p>Acá es donde podras desempeñar todas tus funciones asignadas por tus jefes.</p>
                    <Button variant='outline-success'>Aprender más</Button>
                    <div className="clearfix"></div>
                </div>
                <div className="s_circle">
                    Camposol&reg;
                </div>
                <img id='campo' src={campo} />
            </div>
        </>
    )
}
