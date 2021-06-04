import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import CreateModalUser from '../../components/Modals/CreateModalUser';
import DeleteModalUser from '../../components/Modals/DeleteModalUser';
import EditModalUser from '../../components/Modals/EditModalUser';
import './UserPage.scss';

export default function UserPage() {
    const [show, setShow] = useState(false);
    const [showE, setShowE] = useState(false);
    const [codeE, setCodeE] = useState(null);
    const [showD, setShowD] = useState(false);
    const [codeD, setCodeD] = useState(null);

    const handleShow = () => setShow(true);

    const handleShowEdit = (cod) => {
        setShowE(true);
        setCodeE(cod);
    }

    const handleShowDelete = (cod) => {
        setShowD(true);
        setCodeD(cod)
    }

    return (
        <>
            <Container id="userPage">
                <div id="userPageTitle">
                    <h1>Usuarios de la empresa</h1>
                </div>

                <div id="userPageDatos">
                    <div id="userPageMenu">
                        <div id="userPageBasic">
                            <Button variant="success" onClick={handleShow}>Crear Nuevo Usuario</Button>
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
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Correo</th>
                                    <th>DNI</th>
                                    <th>Celular</th>
                                    <th>Telefono</th>
                                    <th>Tipo de Usuario</th>
                                    <th>Departamento</th>
                                    <th>Sueldo Bruto</th>
                                    <th>Cumpleaños</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Rafael Elias</td>
                                    <td>Arriaga Mendoza</td>
                                    <td>ream_tp@outlook.com</td>
                                    <td>74027083</td>
                                    <td>956271174</td>
                                    <td>2356114</td>
                                    <td>Recursos Humanos</td>
                                    <td>Gerente</td>
                                    <td>15000</td>
                                    <td>10/04/2003</td>
                                    <td>
                                        <Button onClick={() => {
                                            handleShowEdit(1)
                                        }} variant='warning'>Editar</Button>
                                        <Button onClick={() => {
                                            handleShowDelete(1)
                                        }} variant='danger'>Desactivar</Button>
                                    </td>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Correo</th>
                                    <th>DNI</th>
                                    <th>Celular</th>
                                    <th>Telefono</th>
                                    <th>Tipo de Usuario</th>
                                    <th>Departamento</th>
                                    <th>Sueldo Bruto</th>
                                    <th>Cumpleaños</th>
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
            <CreateModalUser show={show} setShow={setShow}>
                <h1>Hola</h1>
            </CreateModalUser>

            <EditModalUser show={showE} setShow={setShowE} code={codeE}>
                <h1>Hola</h1>
            </EditModalUser>

            <DeleteModalUser show={showD} setShow={setShowD} code={codeD}/>
        </>
    )
}
