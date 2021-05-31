import React from 'react';
import { Container } from 'react-bootstrap';
import Carrusel from '../../components/Carrusel/Carrusel';
import logo from '../../assets/img/Camposol.png';
import filosofia from '../../assets/img/Filosofia2.png';
import compromiso from '../../assets/img/Compromiso.jpg';
import './HomePage.scss';

export default function Home() {
    return (
        <div id='home'>
            <Carrusel />

            <Container>
                <h1>Camposol cuidando de la granja a la familia</h1>

                <div className='about'>
                    <h2>Nuestra Filosofia</h2>

                    <div>
                        <div id='about-img'>
                            <img src={filosofia} />
                        </div>

                        <div id='about-box'>
                            <div className='philosophy'>
                                <p>Camposol se preocupa. Honramos y salvaguardamos la relación entre nuestras granjas, nuestros socios y las familias que disfrutan del fruto del trabajo.</p>
                                <p>Cultivamos nuestro fruto con amor – amor a la tierra, de nuestro inestimable equipo y socios de todo el mundo – para asegurar que nuestros socios y las familias a las que sirven tengan la mejor comida que la naturaleza puede proporcionar. Lo consideramos parte de nuestra familia y queremos compartir nuestro aprecio con sus clientes para que pueda seguir prosperando.</p>
                                <p>Nuestro compromiso con la innovación, la coherencia, la trazabilidad y la integridad garantiza que nuestros frutos satisfagan sus necesidades. Somos una empresa con un fuerte propósito moral, proporcionando empleos de alta calidad y un producto superior sin dejar de ser buenos administradores de nuestros recursos humanos y naturales. Y estamos siempre enfocados en nuestro objetivo principal: proporcionar la mejor y más saludable comida para las familias de todo el mundo.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='commitment'>
                    <h2>Nuestro Compromiso</h2>

                    <div>
                        <div id='commiment-box'>
                            <p>Camposol cree firmemente que para garantizar su sostenibilidad futura, el respeto a los principios éticos, a los empleados y al medio ambiente es un requisito indispensable. Por lo tanto, operamos de acuerdo con nuestras directrices de responsabilidad social, los Objetivos del Milenio y los Principios del Pacto Mundial de las Naciones Unidas, de los cuales hemos sido miembros activos desde 2008.</p>
                            <p>Camposol fue la primera empresa agroindustrial peruana en elaborar un Informe de Sostenibilidad utilizando indicadores GRI internacionales, bajo la evaluación de Price Waterhouse Coopers. Los resultados confirmaron nuestro éxito general: no sólo nuestro desempeño económico, sino también nuestro desempeño social y ambiental.</p>
                            <p>El compromiso de Camposol con la calidad, la coherencia, la rendición de cuentas, la frescura y la sostenibilidad sigue ganándose el respeto y la confianza en nuestra industria, así como con las familias de todas partes que disfrutan de nuestros productos. Camposol significa cuidado, por nuestros socios, por nuestros equipos y por nuestras comunidades.</p>
                        </div>

                        <div id="commiment-img">
                            <img src={compromiso} />
                        </div>
                    </div>
                </div>
            </Container>

            <footer className='halfCircle'>
                <div className='logo'>
                    <img src={logo} />
                    <p>Camposol</p>
                </div>
            </footer>
        </div>
    )
}
