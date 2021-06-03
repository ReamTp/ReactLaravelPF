import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BuscadorTabla from '../../components/BuscadorTabla';
import ReactHTMLTableExcel from 'react-html-table-to-excel';
import './PaymentsPage.scss';

export default function PaymentsPage() {
    return (
        <>
            <h1 id="pagosTitle">Pagos de empleados</h1>
            <Container id="payments">
                <div id="pagosDatos">
                    <h2>Datos de Pagos</h2>

                    <BuscadorTabla/>

                    <div id="tablaPago">
                        <Table responsive striped bordered hover id="tabla">
                            <thead>
                                <tr>
                                    <th>Codigo Pago</th>
                                    <th>Codigo Empleado</th>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Encargado</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>Marco Portilla</td>
                                    <td>7000</td>
                                    <td>Gian Carlo</td>
                                    <td>
                                        <Button variant='success' href='mailto:acer92587@gmail.com'>Hablar a Encargado</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2</td>
                                    <td>Jim Marrufo</td>
                                    <td>3000</td>
                                    <td>Gian Carlo</td>
                                    <td>
                                        <Button variant='success' href='mailto:acer92587@gmail.com'>Hablar a Encargado</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2</td>
                                    <td>Jim Marrufo</td>
                                    <td>3000</td>
                                    <td>Gian Carlo</td>
                                    <td>
                                        <Button variant='success' href='mailto:acer92587@gmail.com'>Hablar a Encargado</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2</td>
                                    <td>Jim Marrufo</td>
                                    <td>3000</td>
                                    <td>Gian Carlo</td>
                                    <td>
                                        <Button variant='success' href='mailto:acer92587@gmail.com'>Hablar a Encargado</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2</td>
                                    <td>Jim Marrufo</td>
                                    <td>3000</td>
                                    <td>Gian Carlo</td>
                                    <td>
                                        <Button variant='success' href='mailto:acer92587@gmail.com'>Hablar a Encargado</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2</td>
                                    <td>Jim Marrufo</td>
                                    <td>3000</td>
                                    <td>Gian Carlo</td>
                                    <td>
                                        <Button variant='success' href='mailto:acer92587@gmail.com'>Hablar a Encargado</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2</td>
                                    <td>Jim Marrufo</td>
                                    <td>3000</td>
                                    <td>Gian Carlo</td>
                                    <td>
                                        <Button variant='success' href='mailto:acer92587@gmail.com'>Hablar a Encargado</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2</td>
                                    <td>Jim Marrufo</td>
                                    <td>3000</td>
                                    <td>Gian Carlo</td>
                                    <td>
                                        <Button variant='success' href='mailto:acer92587@gmail.com'>Hablar a Encargado</Button>
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
                    <Link to="/functions/reportes" className="btn btn-warning">Ver Reporte</Link>
                </div>

            </Container>
        </>
    )
}
