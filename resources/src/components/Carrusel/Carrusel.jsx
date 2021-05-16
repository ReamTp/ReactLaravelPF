import React from 'react';
import { Button, Carousel, Jumbotron } from 'react-bootstrap';
import { CN3, CN4, CN6 } from '../../utils/img';
import './Carrusel.scss';

export default function Carrusel() {
    const time = 7000;

    return (
        <Carousel fade>
            <Carousel.Item interval={time}>
                <img src={CN6} />
                
                <Carousel.Caption>
                    <Jumbotron>
                        <h2>Bienvenido a Camposol</h2>
                        <p>Camposol una empresa que se preocupa por ti y tu familia</p>
                        <Button variant='success'>Ver mas</Button>
                    </Jumbotron>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={time}>
                <img src={CN4} />
                
                <Carousel.Caption>
                    <Jumbotron>
                        <h2>Nuevas Campañas pronto</h2>
                        <p>Nuevas Campañas se acercan pronto a Camposol enterate aqui</p>
                        <Button variant='success'>Ver mas</Button>
                    </Jumbotron>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={time}>
                <img src={CN3} />
                
                <Carousel.Caption>
                    <Jumbotron>
                        <h2>Nuevo control de calidad</h2>
                        <p>Nuevas reformas para el control de calidad de los productos.</p>
                        <Button variant='success'>Ver mas</Button>
                    </Jumbotron>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
