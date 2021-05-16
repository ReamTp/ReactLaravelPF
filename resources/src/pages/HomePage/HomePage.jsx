import React from 'react';
import { Container } from 'react-bootstrap';
import Carrusel from '../../components/Carrusel/Carrusel';
import logo from '../../assets/img/Camposol.png';
import filosofia from '../../assets/img/Filosofia.jpg';
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
                    
                    <img src={filosofia} />

                    <div className='about-box'>
                        <div className='philosophy'>
                            <p>Camposol se preocupa. Honramos y salvaguardamos la relación entre nuestras granjas, nuestros socios y las familias que disfrutan del fruto del trabajo.</p>
                            <p>Cultivamos nuestro fruto con amor – amor a la tierra, de nuestro inestimable equipo y socios de todo el mundo – para asegurar que nuestros socios y las familias a las que sirven tengan la mejor comida que la naturaleza puede proporcionar. Lo consideramos parte de nuestra familia y queremos compartir nuestro aprecio con sus clientes para que pueda seguir prosperando.</p>
                            <p>Como una de las pocas empresas de productos globales integradas verticalmente, somos capaces de garantizar un control interno completo de nuestra cadena de suministro desde nuestras propias granjas hasta estantes de supermercados, proporcionándole así frutas producidas de forma sostenible en las que sus clientes puedan confiar.</p>
                            <p>Todo nuestro equipo, en nuestras granjas, plantas de embalaje y oficinas, trabaja hacia nuestro objetivo compartido de crear la más alta calidad y las frutas más frescas, sabrosas y deliciosas a nuestros socios para garantizar que pueda servir mejor a sus clientes. </p>
                        </div>
                        <div className='philosophy'>
                            <p>Nuestro compromiso con la innovación, la coherencia, la trazabilidad y la integridad garantiza que nuestros frutos satisfagan sus necesidades. Somos una empresa con un fuerte propósito moral, proporcionando empleos de alta calidad y un producto superior sin dejar de ser buenos administradores de nuestros recursos humanos y naturales. Y estamos siempre enfocados en nuestro objetivo principal: proporcionar la mejor y más saludable comida para las familias de todo el mundo.</p>
                            <p>Con operaciones en Perú, Colombia y Uruguay, Camposol emplea ahora, en temporada alta, a más de 16.000 trabajadores en temporada alta. Nuestra cartera actual incluye arándanos, aguacates, uvas de mesa, mangos, mandarinas y camarones de nuestras granjas en Marinasol, el principal productor de camarón en Perú.</p>
                            <p>Según el estudio The Merco Talent 2018, una métrica universalmente respetada para la excelencia empresarial en el mundo de habla hispana, Camposol es una de las organizaciones líderes en atraer y mantener talento. Empleamos a los mejores, y se quedan con nosotros.</p>
                        </div>
                    </div>
                </div>

                <div className='commitment'>
                    <h2>Nuestro Compromiso</h2>
                    <div className='commiment-box'>
                        <div>
                            <p>Camposol cree firmemente que para garantizar su sostenibilidad futura, el respeto a los principios éticos, a los empleados y al medio ambiente es un requisito indispensable. Por lo tanto, operamos de acuerdo con nuestras directrices de responsabilidad social, los Objetivos del Milenio y los Principios del Pacto Mundial de las Naciones Unidas, de los cuales hemos sido miembros activos desde 2008.</p>
                            <p>Camposol fue la primera empresa agroindustrial peruana en elaborar un Informe de Sostenibilidad utilizando indicadores GRI internacionales, bajo la evaluación de Price Waterhouse Coopers. Los resultados confirmaron nuestro éxito general: no sólo nuestro desempeño económico, sino también nuestro desempeño social y ambiental.</p>
                            <p>El compromiso de Camposol con la calidad, la coherencia, la rendición de cuentas, la frescura y la sostenibilidad sigue ganándose el respeto y la confianza en nuestra industria, así como con las familias de todas partes que disfrutan de nuestros productos. Camposol significa cuidado, por nuestros socios, por nuestros equipos y por nuestras comunidades.</p>
                        </div>
                        <img src={compromiso} />
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
