import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import searchImg from '../../assets/img/img404.jpg';
import camposol from '../../assets/img/logoCamposol.png';
import './Page404.scss';

export default function Page404() {
    return (
        <>
            <header>
                <Link to='/'>
                    <img src={camposol} alt='Logo de Camposol' />
                </Link>
            </header>
            
            <div id='cont-404'>
                <Jumbotron>
                    <h1>Error 404 Page Not Found</h1>
                    <p>La página solicitada no existe o esta en mantenimiento, por favor volver al Inicio.</p>
                    <Link to='/'>Ir al Inicio</Link>
                </Jumbotron>
                <img src={searchImg} alt='Buscando Pagina' />
            </div>
        </>
    )
}
