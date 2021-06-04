import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import DeleteModalTrainings from '../../components/Modals/DeleteModalTrainings';
import CreateModalTrainings from '../../components/Modals/CreateModalTrainings';
import './TrainingsPage.scss';

export default function TrainingsPage() {
    const [show, setShow] = useState(false);
    const [showD, setShowD] = useState(false);
    const [codeD, setCodeD] = useState(null);

    const handleShow = () => setShow(true);
    const handleShowDelete = (cod) => {
        setShowD(true);
        setCodeD(cod)
    }

    return (
        <>
            <Container id="userPage">
                <div id="userPageTitle">
                    <h1>Capacitaciones de Usuarios</h1>
                </div>

                <div id="userPageDatos">
                    <div id="userPageMenu">
                        <div id="userPageBasic">
                            <Button onClick={handleShow} variant="success">Crear Nueva Capacitacion</Button>
                        </div>

                        <div id="userPageBuscador">
                            <input type="text" id="userName" placeholder="Buscar..."/>
                        </div>
                    </div>

                    <div id="userPageTabla">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Descripción</th>
                                    <th>Fecha</th>
                                    <th>Hora Inicio</th>
                                    <th>Hora Fin</th>
                                    <th>Estado</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Capacitacion de Juegos</td>
                                    <td>10/12/2021</td>
                                    <td>10:50</td>
                                    <td>14:50</td>
                                    <td>Activa</td>
                                    <td>
                                        <Button onClick={() => {
                                            handleShowDelete(1)
                                        }} variant='danger'>Desactivar</Button>
                                    </td>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr>
                                    <th>Código</th>
                                    <th>Descripción</th>
                                    <th>Fecha</th>
                                    <th>Hora Inicio</th>
                                    <th>Hora Fin</th>
                                    <th>Estado</th>
                                    <th>Opciones</th>
                                </tr>
                            </tfoot>
                        </Table>
                    </div>

                    <div id="userPagePagination">
                        <Button>Anterior</Button>
                        <Button>Siguiente</Button>
                    </div>
                </div>
            </Container>
            <CreateModalTrainings show={show} setShow={setShow}>
                <h2>Crear Carousel</h2>
            </CreateModalTrainings>
            <DeleteModalTrainings show={showD} setShow={setShowD} code={codeD}/>
        </>
    )
}
