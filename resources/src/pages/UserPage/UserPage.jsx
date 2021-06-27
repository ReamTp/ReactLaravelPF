import { faEdit, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ActiveModalUser from '../../components/Modals/ActiveModalUser';
import CreateModalUser from '../../components/Modals/CreateModalUser';
import DeleteModalUser from '../../components/Modals/DeleteModalUser';
import EditModalUser from '../../components/Modals/EditModalUser';
import userServices from '../../services/User.js';
import './UserPage.scss';

export default function UserPage() {
    const [show, setShow] = useState(false);
    const [showE, setShowE] = useState(false);
    const [codeE, setCodeE] = useState(null);
    const [showD, setShowD] = useState(false);
    const [showA, setShowA] = useState(false);
    const [codeD, setCodeD] = useState(null);
    const [lista, setLista ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(0);
    const [reload, setReload] = useState(false);
    const [formData, setFormData] = useState({});

    const handleShow = () => setShow(true);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        if (reload) {
            getUsers()
            setReload(false);
        }
    }, [reload])

    const handleShowEdit = (cod) => {
        setShowE(true);
        setCodeE(cod);
        setFormData({})
    }

    const handleShowDelete = (cod) => {
        setShowD(true);
        setCodeD(cod)
    }

    const handleShowActive = (cod) => {
        setShowA(true);
        setCodeD(cod)
    }

    const getUsers = async () => {
        const res = await userServices.listar();
        setLista(res);
    }

    // Funciones de Busqueda
    const filterUsers = () => {
        if (search.length === 0) {
            return lista.slice(currentPage, currentPage + 5);
        }

        let filtered = lista.filter(sale => sale.nombre.includes(search));

        if(filtered.length <= 0) {
            filtered = lista.filter(sale => sale.apellido.includes(search));
        }

        if(filtered.length <= 0) {
            filtered = lista.filter(sale => sale.correo.includes(search));
        }

        return filtered.slice(currentPage, currentPage + 5);
    }

    const nextPage = () => {
        let cant = lista.filter(sale => sale.nombre.includes(search)).length;

        if (cant <= 0 ){
            cant = lista.filter(sale => sale.apellido.includes(search)).length;
        }

        if (cant <= 0 ){
            cant = lista.filter(sale => sale.correo.includes(search)).length;
        }

        if(cant > currentPage + 5){
            setCurrentPage(currentPage + 5)
        } else {
            toast.error('No hay más datos');
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 5)
        } else {
            toast.error('No hay más datos');
        }
    }

    const onSearchChange = ({target}) => {
        setCurrentPage(0);
        setSearch(target.value);
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
                            <h2>Datos de los Usuarios</h2>
                            <Button variant="success" onClick={handleShow}>Crear Nuevo Usuario</Button>
                        </div>

                        <div id="mDMenu">
                            <input type="text" className='form-control' placeholder='Buscar Producto' value={search} onChange={onSearchChange} />

                            <div class="pagination">
                                <Button onClick={prevPage}>Anterior</Button>

                                <div class="pagination-number">
                                    <p>{currentPage + 1} - {currentPage + 5 < lista.length ? <span>{currentPage + 5}</span> : <span>{lista.length}</span>} de {lista.length}</p>
                                </div>

                                <Button onClick={nextPage}>Siguiente</Button>
                            </div>
                        </div>
                    </div>

                    <div id="userPageTabla">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Correo</th>
                                    <th>DNI</th>
                                    <th>Celular</th>
                                    <th>Telefono</th>
                                    <th>Tipo</th>
                                    <th>Departamento</th>
                                    <th>Sueldo</th>
                                    <th>Cumpleaños</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    filterUsers().map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.nombre}</td>
                                            <td>{user.apellido}</td>
                                            <td>{user.correo}</td>
                                            <td>{user.dni}</td>
                                            <td>{user.celular}</td>
                                            <td>{user.telefono}</td>
                                            <td>{(user.tipo_usuario.titulo.split(' '))[0]}</td>
                                            <td>{user.departamento.nombre}</td>
                                            <td>S/.{user.sueldo_bruto}</td>
                                            <td>{user.fecha}</td>
                                            <td>
                                                <Button onClick={() => {
                                                    handleShowEdit(user.id)
                                                }} variant='warning'>
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </Button>
                                                {
                                                    user.estado ?
                                                        <Button onClick={() => {
                                                            handleShowDelete(user.id)
                                                        }}variant='danger'>
                                                            <FontAwesomeIcon icon={faMinusCircle}/>
                                                        </Button>
                                                    :
                                                        <Button onClick={() => {
                                                            handleShowActive(user.id)
                                                        }}variant='success'>
                                                            <FontAwesomeIcon icon={faPlusCircle}/>
                                                        </Button>
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>

            <CreateModalUser show={show} setShow={setShow} setReload={setReload}/>
            <EditModalUser show={showE} setShow={setShowE} code={codeE} setReload={setReload} formData={formData} setFormData={setFormData}/>
            <DeleteModalUser show={showD} setShow={setShowD} code={codeD} setReload={setReload}/>
            <ActiveModalUser show={showA} setShow={setShowA} code={codeD} setReload={setReload}/>
        </>
    )
}
