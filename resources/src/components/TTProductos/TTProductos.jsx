import React from 'react';
import { Button, Table } from 'react-bootstrap';
import BuscadorTabla from '../../components/BuscadorTabla';

export default function TTProductos() {
    return (
        <div id="tProductData">
            <BuscadorTabla/>
            <div id="salesTable">
                <Table id="tabla" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5</td>
                            <td>Alcachofas</td>
                            <td>Activo</td>
                            <td>
                                <Button onClick={() => {
                                    handleShow(1)
                                }} variant="warning">Editar</Button>
                                <Button onClick={() => {
                                    handleShow(1)
                                }} variant="danger">Desactivar</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
