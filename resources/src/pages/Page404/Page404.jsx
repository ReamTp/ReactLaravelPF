import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logo, img404 } from '../../utils/img.js';
import './Page404.scss';

export default function Page404() {
    return (
        <>
            <Container id="page404">
                <header>
                    <Link to='/'>
                        <img src={logo} /> <span>Camposol&reg;</span>
                    </Link>
                </header>

                <div id='cont-404'>
                    <div id='data-404'>
                        <Jumbotron>
                            <h1>Error 404 Page Not Found</h1>
                            <p>La página solicitada no existe o esta en mantenimiento, por favor volver al Inicio.</p>
                            <Link to='/'>Ir al Inicio</Link>
                        </Jumbotron>
                    </div>

                    <div id='img-404'>
                        <img src={img404} alt='Buscando Pagina' />
                    </div>
                </div>
            </Container>
        </>
    )
}
