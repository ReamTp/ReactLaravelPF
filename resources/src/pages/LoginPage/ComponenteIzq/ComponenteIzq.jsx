import React from 'react'
import { Col } from 'react-bootstrap';

import camposol from '../../../assets/img/loginBackground.jpg';
import logo from '../../../assets/img/logoCamposol.png';
import './ComponenteIzq.scss';


export default function ComponenteIzq(){
    return(
        <div id='loginCIzq'>
            <img src={camposol} alt='Camposol Empleados' className='fondo' />
            <div>
                <img src={logo} alt='Camposol logo' />
            </div>
        </div>
    );
}
