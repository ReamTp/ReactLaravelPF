import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import vService from '../../../services/Ventas';

export default function DetailModalSales(props) {
    const {show, setShow, sale, code} = props;
    const handleClose = () => setShow(false);
    const [details, setDetails] = useState([]);
    const [cargando, setCargando] = useState(true);

    const peticionDetalle = async (code) => {
        if (cargando && show && code) {
            const res = await vService.obtenerDetalles(code);
            setDetails(res);
            setCargando(false);
        }
    }

    peticionDetalle(code);
    !show && !cargando ? setCargando(true) : '';

    return (
        sale != null ?
        <Modal show={show} onHide={handleClose} centered size='lg'>
            <Modal.Header>
                <Modal.Title>Detalle de Venta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div id="dModalSTitle">
                    <h2><span>Boleta </span><span>N°{sale.id}</span></h2>
                </div>

                <div id="dModalSData">
                    <div id="dModalSDDatos">
                        <p>Empresa: {sale.nombre_empresa}</p>
                        <p>Dirección: {sale.direccion}</p>
                        <p>RUC: {sale.ruc}</p>
                        <p>Fecha: {sale.fecha}</p>
                        <p>Total: {sale.total}</p>
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
                                    {
                                        details.length !== 0 ?
                                            details.map(detail => (
                                                <tr key={detail.id}>
                                                    <td>{detail.id}</td>
                                                    <td>{detail.nombre}</td>
                                                    <td>{detail.precio_unit}</td>
                                                    <td>{detail.cantidad}</td>
                                                    <td>{detail.total}</td>
                                                </tr>
                                            ))
                                        : (
                                            <tr>
                                                <td colSpan="5">
                                                    <center>Sin Datos</center>
                                                </td>
                                            </tr>
                                        )
                                    }
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
        : ''
    )
}
