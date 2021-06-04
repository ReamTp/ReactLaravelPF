import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

export default function DetailModalSales(props) {
    const {show, setShow, children, code} = props;
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered size='lg'>
            <Modal.Header>
                <Modal.Title>Detalle de Venta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div id="dModalSTitle">
                    <h2><span>Boleta</span><span>N°2</span></h2>
                </div>

                <div id="dModalSData">
                    <div id="dModalSDDatos">
                        <p>Empresa: Tecsup</p>
                        <p>Empresa: Av. España 452</p>
                        <p>RUC: 85741254254</p>
                        <p>Fecha: 10/11/2020</p>
                        <p>Total: 1500</p>
                        <div id="dModalSDResumen">
                            <h3>Productos Vendidos</h3>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Precio Unt.</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Esparragos Rojos</td>
                                        <td>15000</td>
                                        <td>2.8</td>
                                        <td>42000</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="info" onClick={handleClose}>Aceptar</Button>
            </Modal.Footer>
        </Modal>
    )
}
