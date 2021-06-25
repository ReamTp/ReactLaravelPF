import React, { useEffect, useState } from 'react';
import { Badge, Button, Container, Table } from 'react-bootstrap';
import DeleteModalTrainings from '../../components/Modals/DeleteModalTrainings';
import CreateModalTrainings from '../../components/Modals/CreateModalTrainings';
import cServices from '../../services/Capacitaciones';
import './TrainingsPage.scss';
import { toast } from 'react-toastify';

export default function TrainingsPage() {
    const [show, setShow] = useState(false);
    const [showD, setShowD] = useState(false);
    const [codeD, setCodeD] = useState(null);
    const [lista, setLista ] = useState([]);
    const [reload, setReload] = useState(false);
    const [ search, setSearch ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(0);

    useEffect(() => {
        getCapacitaciones();
    }, []);

    useEffect(() => {
        if (reload) {
            getCapacitaciones()
            setReload(false);
        }
    }, [reload])

    const handleShow = () => setShow(true);
    const handleShowDelete = (cod) => {
        setShowD(true);
        setCodeD(cod)
    }

    const getCapacitaciones = async () => {
        const res = await cServices.listar();
        setLista(res);
    }

    // Funciones de Busqueda
    const filterCapacitaciones = () => {
        if (search.length === 0) {
            return lista.slice(currentPage, currentPage + 8);
        }

        const filtered = lista.filter(sale => sale.titulo.includes(search));
        return filtered.slice(currentPage, currentPage + 8);
    }

    const nextPage = () => {
        if(lista.filter(sale => sale.titulo.includes(search)).length > currentPage + 8){
            setCurrentPage(currentPage + 8)
        } else {
            toast.error('No hay más datos');
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 8)
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
                    <h1>Capacitaciones de Usuarios</h1>
                </div>

                <div id="userPageDatos">
                    <div id="userPageMenu">
                        <div id="userPageBasic">
                            <Button onClick={handleShow} variant="success">Crear Nueva Capacitacion</Button>
                        </div>

                        <div id="mDMenu">
                            <div id="tPDMenuButton">
                                <Button onClick={prevPage}>Anterior</Button>
                                <Button onClick={nextPage}>Siguiente</Button>
                            </div>

                            <input type="text" className='form-control' placeholder='Buscar Producto' value={search} onChange={onSearchChange} />
                        </div>
                    </div>

                    <div id="userPageTabla">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Titulo</th>
                                    <th>Fecha</th>
                                    <th>Hora Inicio</th>
                                    <th>Hora Fin</th>
                                    <th>Estado</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    filterCapacitaciones().length > 0 ? (
                                        filterCapacitaciones().map(cap => (
                                            <tr key={cap.id}>
                                                <td>{cap.id}</td>
                                                <td>{cap.titulo}</td>
                                                <td>{cap.fecha}</td>
                                                <td>{cap.hora_inicio}</td>
                                                <td>{cap.hora_fin}</td>
                                                <td>
                                                    {
                                                        cap.estado ? <Badge variant="success">Vigente</Badge> : <Badge variant="danger">Finalizada</Badge>
                                                    }
                                                </td>
                                                <td>
                                                    <Button disabled={!cap.estado} onClick={() => {
                                                        handleShowDelete(cap.id)
                                                    }} variant='danger'>Desactivar</Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                    : <td colSpan="7" key="0"><center>Sin Capacitaciones</center></td>
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
            <CreateModalTrainings show={show} setShow={setShow} setReload={setReload}>
                <h2>Crear Carousel</h2>
            </CreateModalTrainings>
            <DeleteModalTrainings show={showD} setShow={setShowD} code={codeD} setReload={setReload}/>
        </>
    )
}
