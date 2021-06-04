import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import BuscadorTabla from '../../components/BuscadorTabla';
import CreateModalSales from '../../components/Modals/CreateModalSales';
import DetailModalSales from '../../components/Modals/DetailModalSales';
import './SalesPage.scss';

export default function SalesPage() {
    const [show, setShow] = useState(false);
    const [showD, setShowD] = useState(false);
    const [code, setCode] = useState(null);

    const handleShow = () => setShow(true);
    const handleShowD = cod => {
        setShowD(true);
        setCode(cod);
    }

    return (
        <>
            <Container id="salesPage">
                <div id="salesTitle">
                    <h1>Ventas de la Empresa</h1>
                </div>

                <div id="salesData">
                    <Button variant="success" onClick={handleShow}>Generar Venta</Button>
                    <BuscadorTabla/>
                    <div id="salesTable">
                        <Table id="tabla" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Empresa</th>
                                    <th>Dirección</th>
                                    <th>RUC</th>
                                    <th>Fecha</th>
                                    <th>Total</th>
                                    <th>Resumen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5</td>
                                    <td>Tecsup</td>
                                    <td>Av. España 452</td>
                                    <td>85741254254</td>
                                    <td>10/11/2020</td>
                                    <td>1500</td>
                                    <td>
                                        <Button onClick={() => {
                                            handleShowD(1)
                                        }} variant="warning">Ver más</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Tecsup</td>
                                    <td>Av. España 452</td>
                                    <td>85741254254</td>
                                    <td>10/11/2020</td>
                                    <td>1500</td>
                                    <td>
                                        <Button onClick={() => {
                                            handleShowD(1)
                                        }} variant="warning">Ver más</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>TecLoad</td>
                                    <td>Av. España 452</td>
                                    <td>85741254254</td>
                                    <td>10/11/2020</td>
                                    <td>1500</td>
                                    <td>
                                        <Button onClick={() => {
                                            handleShowD(1)
                                        }} variant="warning">Ver más</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Tecsup</td>
                                    <td>Av. España 452</td>
                                    <td>85741254254</td>
                                    <td>10/11/2020</td>
                                    <td>1500</td>
                                    <td>
                                        <Button onClick={() => {
                                            handleShowD(1)
                                        }} variant="warning">Ver más</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Tecsup</td>
                                    <td>Av. España 452</td>
                                    <td>85741254254</td>
                                    <td>10/11/2020</td>
                                    <td>1500</td>
                                    <td>
                                        <Button onClick={() => {
                                            handleShowD(1)
                                        }} variant="warning">Ver más</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Tecsup</td>
                                    <td>Av. España 452</td>
                                    <td>85741254254</td>
                                    <td>10/11/2020</td>
                                    <td>1500</td>
                                    <td>
                                        <Button onClick={() => {
                                            handleShowD(1)
                                        }} variant="warning">Ver más</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
            <CreateModalSales show={show} setShow={setShow}/>
            <DetailModalSales show={showD} setShow={setShowD} code={code}/>
        </>
    )
}
