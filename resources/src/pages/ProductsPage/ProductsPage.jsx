import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BuscadorTabla from '../../components/BuscadorTabla';
import ReactHTMLTableExcel from 'react-html-table-to-excel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './ProductsPaga.scss';

export default function ProductsPage() {
    return (
        <>
            <h1 id="pagosTitle">Productos de la Empresa</h1>
            <Container id="payments">
                <div id="pagosDatos">
                    <h2>Datos de Productos</h2>

                    <BuscadorTabla/>

                    <div id="tablaPago">
                        <Table responsive striped bordered hover id="tabla" className='producto'>
                            <thead>
                                <tr>
                                    <th>Codigo</th>
                                    <th>Nombre</th>
                                    <th>Tipo de Producto</th>
                                    <th>Stock</th>
                                    <th>Precio Unt.</th>
                                    <th>Estado</th>
                                    <th>Opcion</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td>Esparragos enlatados blancos</td>
                                    <td>Esparragos</td>
                                    <td>7000</td>
                                    <td>S/. 4,5</td>
                                    <td>
                                        <div className='estado-a'>
                                            <p>Activo</p>
                                        </div>
                                    </td>
                                    <td>
                                        <Button variant='warning'>
                                            <FontAwesomeIcon icon={faEdit}/>
                                        </Button>
                                        <Button variant='danger'>
                                            <FontAwesomeIcon icon={faMinusCircle}/>
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                <div id="pagosMenu">
                    <h2>Opciones</h2>
                    <ReactHTMLTableExcel
                        id="btn-excel"
                        className="btn btn-success"
                        table="tabla"
                        filename="ListaPagos"
                        sheet="Pagina 1"
                        buttonText="Exportar a Excel"
                    />
                    <Link to="/functions/gerentegeneral/reportes" className="btn btn-warning">Ver Reporte</Link>
                </div>

            </Container>
        </>
    )
}
