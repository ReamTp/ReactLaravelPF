import React from 'react'
import { Button, Table } from 'react-bootstrap'
import BuscadorTabla from '../BuscadorTabla'

export default function Marcas() {
    return (
        <div id="marcasData">
            <BuscadorTabla/>
            <div id="marcasTable">
                <Table id="tabla" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5</td>
                            <td>Camposol</td>
                            <td>The best mark of organization productosadsad as administradoresasdasdsadasd</td>
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
