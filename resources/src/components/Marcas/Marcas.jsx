import React from 'react'
import { Button, Table } from 'react-bootstrap'
import BuscadorTabla from '../BuscadorTabla'

export default function Marcas() {
    return (
        <div id="marcasData">
            <div id='mDTitle'>
                <h2>Marcas de la empresa</h2>
            </div>

            <div id="mDButtons">
                <Button variant='success' onClick={() => {}}>Crear Marca</Button>
                <Button variant='info' onClick={() =>{}}>Mostrar Activadas</Button>
                <Button variant='secondary' onClick={() =>{}}>Mostrar Desactivadas</Button>
            </div>

            <BuscadorTabla/>
            <div id="mDTable">
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
