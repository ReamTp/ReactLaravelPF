import { faEdit, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ActiveModalTProducts from '../Modals/ActiveModalTProducts';
import CreateModalTProducts from '../Modals/CreateModalTProducts';
import DeactiveModalTProduct from '../Modals/DeactiveModalTProduct';
import EditModalTProducts from '../Modals/EditModalTProducts';

export default function TTProductos() {
    const [ form, setForm ] = useState({});
    const [state, setState] = useState(false);

    // useState para modales
    const [ show, setShow ] = useState(false);
    const [ showE, setShowE ] = useState(false);
    const [ showD, setShowD ] = useState(false);
    const [ showA, setShowA ] = useState(false);
    const [ codeD, setCodeD ] = useState(null);
    const [ codeE, setCodeE ] = useState(null);

    // useState para Buscador
    const [ lista, setLista ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(0);

    // Funciones para activar modal
    const handleShow = () => setShow(true);

    const handleShowDeactive = (cod) => {
        setShowD(true);
        setCodeD(cod)
        setState(false);
    }

    const handleShowActive = (cod) => {
        setShowA(true);
        setCodeD(cod)
        setState(false);
    }

    const handleShowEdit = (cod) => {
        setShowE(true);
        setCodeE(cod)
        setForm({})
    }

    useEffect(() => {
        peticionGet();
    }, []);

    // Obtener registros
    const peticionGet = async(reset = false) => {
        const urlListar = 'http://localhost:8000/api/tproducts/listar';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setLista(pro.data);
        setState(false);

        if (reset) {
            setCurrentPage(0);
        }
    }

    const peticionGetA = async(reset = false) => {
        const urlListar = 'http://localhost:8000/api/tproducts/listara';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setLista(pro.data);

        if(reset){
            setCurrentPage(0)
        }
    }

    const peticionGetD = async(reset = false) => {
        const urlListar = 'http://localhost:8000/api/tproducts/listard';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setLista(pro.data);

        if(reset) {
            setCurrentPage(0)
        }
    }

    // Funciones de Busqueda
    const filterTProduct = () => {
        if (search.length === 0) {
            return lista.slice(currentPage, currentPage + 6);
        }

        const filtered = lista.filter(tproduct => tproduct.nombre.includes(search));
        return filtered.slice(currentPage, currentPage + 6);
    }

    const nextPage = () => {
        if(lista.filter(tproduct => tproduct.nombre.includes(search)).length > currentPage + 6){
            setCurrentPage(currentPage + 6)
        } else {
            toast.error('No hay más datos');
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 6)
        } else {
            toast.error('No hay más datos');
        }
    }

    const onSearchChange = ({target}) => {
        setCurrentPage(0);
        setSearch(target.value);
    }

    state ? peticionGet() : '';

    return (
        <div id="tProductData">
            <div id='tPDataTitle'>
                <h2>Tipos de Productos de la empresa</h2>
            </div>

            <div id="tPDMenu">
                <div id="tPDMenuButton">
                    <Button onClick={prevPage}>Anterior</Button>
                    <Button onClick={nextPage}>Siguiente</Button>
                </div>

                <input type="text" className='form-control' placeholder='Buscar Producto' value={search} onChange={onSearchChange} />
            </div>

            <div id="tPDataButtons">
                <Button variant='success' onClick={handleShow}>Crear Tipo de Producto</Button>
                <Button variant='secondary' onClick={() => {
                    peticionGet(true)
                }}>Mostrar Todos</Button>
                <Button variant='info' onClick={() =>{
                    peticionGetA(true)
                }}>Mostrar Activados</Button>
                <Button variant='danger' onClick={() =>{
                    peticionGetD(true)
                }}>Mostrar Desactivados</Button>
            </div>

            <div id="tPDataTable">
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
                        {
                            filterTProduct().map(tproduct => (
                                <tr key={tproduct.id}>
                                    <td>{tproduct.id}</td>
                                    <td>{tproduct.nombre}</td>
                                    <td>
                                        <div className='estado-a'>
                                            {
                                                tproduct.estado ? <p><Badge variant="success">Activo</Badge></p> : <p><Badge variant="danger">Desactivado</Badge></p>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <Button onClick={() => {
                                            handleShowEdit(tproduct.id)
                                        }} variant='warning'>
                                            <FontAwesomeIcon icon={faEdit}/>
                                        </Button>

                                        {
                                            tproduct.estado ?
                                                <Button onClick={() => {
                                                    handleShowDeactive(tproduct.id)
                                                }}variant='danger'>
                                                    <FontAwesomeIcon icon={faMinusCircle}/>
                                                </Button>
                                            :
                                                <Button onClick={() => {
                                                    handleShowActive(tproduct.id)
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

            <CreateModalTProducts show={show} setShow={setShow} setState={setState}/>
            <EditModalTProducts show={showE} setShow={setShowE} code={codeE} formData={form} setFormData={setForm} setState={setState}/>
            <DeactiveModalTProduct show={showD} setShow={setShowD} code={codeD} setState={setState}/>
            <ActiveModalTProducts show={showA} setShow={setShowA} code={codeD} setState={setState}/>
        </div>
    )
}
