import { faEdit, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Badge, Button, Table } from 'react-bootstrap'
import { toast } from 'react-toastify';
import CreateModalMarks from '../Modals/CreateModalMarks';
import EditModalMark from '../Modals/EditModalMark';
import DeactiveModalMarca from '../Modals/DeactiveModalMarca';
import ActiveModalMarca from '../Modals/ActiveModalMarcas';

export default function Marcas() {
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
        const urlListar = 'http://localhost:8000/api/mark/listar';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setLista(pro.data);
        setState(false);
        if (reset) {
            setCurrentPage(0);
        }
    }

    const peticionGetA = async(reset = false) => {
        const urlListar = 'http://localhost:8000/api/mark/listara';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setLista(pro.data);

        if(reset){
            setCurrentPage(0)
        }
    }

    const peticionGetD = async(reset = false) => {
        const urlListar = 'http://localhost:8000/api/mark/listard';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setLista(pro.data);

        if(reset) {
            setCurrentPage(0)
        }
    }

    // Funciones de Busqueda
    const filterMark = () => {
        if (search.length === 0) {
            return lista.slice(currentPage, currentPage + 6);
        }

        const filtered = lista.filter(tproduct => tproduct.nombre.includes(search));
        return filtered.slice(currentPage, currentPage + 6);
    }

    const nextPage = () => {
        if(lista.filter(mark => mark.nombre.includes(search)).length > currentPage + 6){
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
        <div id="marcasData">
            <div id='mDTitle'>
                <h2>Marcas de la empresa</h2>
            </div>

            <div id="mDMenu">
                <div id="tPDMenuButton">
                    <Button onClick={prevPage}>Anterior</Button>
                    <Button onClick={nextPage}>Siguiente</Button>
                </div>

                <input type="text" className='form-control' placeholder='Buscar Producto' value={search} onChange={onSearchChange} />
            </div>

            <div id="mDButtons">
                <Button variant='success' onClick={handleShow}>Crear Marca</Button>
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
                        {
                            filterMark().map(marca => (
                                <tr key={marca.id}>
                                    <td>{marca.id}</td>
                                    <td>{marca.nombre}</td>
                                    <td>{marca.descripcion}</td>
                                    <td>
                                        <div className='estado-a'>
                                            {
                                                marca.estado ? <p><Badge variant="success">Activo</Badge></p> : <p><Badge variant="danger">Desactivado</Badge></p>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <Button onClick={() => {
                                            handleShowEdit(marca.id)
                                        }} variant="warning">
                                            <FontAwesomeIcon icon={faEdit}/>
                                        </Button>

                                        {
                                            marca.estado ?
                                                <Button onClick={() => {
                                                    handleShowDeactive(marca.id)
                                                }}variant='danger'>
                                                    <FontAwesomeIcon icon={faMinusCircle}/>
                                                </Button>
                                            :
                                                <Button onClick={() => {
                                                    handleShowActive(marca.id)
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

            <CreateModalMarks show={show} setShow={setShow} setState={setState}/>
            <EditModalMark show={showE} setShow={setShowE} code={codeE} formData={form} setFormData={setForm} setState={setState}/>
            <DeactiveModalMarca show={showD} setShow={setShowD} code={codeD} setState={setState}/>
            <ActiveModalMarca show={showA} setShow={setShowA} code={codeD} setState={setState}/>
        </div>
    )
}
