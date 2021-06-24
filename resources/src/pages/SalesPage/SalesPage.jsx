import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import CreateModalSales from '../../components/Modals/CreateModalSales';
import DetailModalSales from '../../components/Modals/DetailModalSales';
import './SalesPage.scss';

export default function SalesPage() {
    const [show, setShow] = useState(false);
    const [showD, setShowD] = useState(false);
    const [sale, setSale] = useState(null);
    const [code, setCode] = useState(null);
    const [reload, setReload] = useState(false);

    const handleShow = () => setShow(true);
    const handleShowD = (s, c) => {
        setShowD(true);
        setSale(s);
        setCode(c);
    }

    useEffect(() => {
        if (reload) {
            peticionGet();
            setReload(false);
        }
    }, [reload]);

    // useState para Buscador
    const [ lista, setLista ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ state, setState ] = useState(false);

    useEffect(() => {
        peticionGet();
    }, []);

    // Obtener registros
    const peticionGet = async(reset = false) => {
        const urlListar = 'http://localhost:8000/api/sales/listar';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setLista(pro.data);
        setState(false);
        if (reset) {
            setCurrentPage(0);
        }
    }

    // Funciones de Busqueda
    const filterSales = () => {
        if (search.length === 0) {
            return lista.slice(currentPage, currentPage + 8);
        }

        const filtered = lista.filter(sale => sale.nombre_empresa.includes(search));
        return filtered.slice(currentPage, currentPage + 8);
    }

    const nextPage = () => {
        if(lista.filter(sale => sale.nombre_empresa.includes(search)).length > currentPage + 8){
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
            <Container id="salesPage">
                <div id="salesTitle">
                    <h1>Ventas de la Empresa</h1>
                </div>

                <div id="salesData">
                    <Button variant="success" onClick={handleShow}>Generar Venta</Button>

                    <div id="mDMenu">
                        <div id="tPDMenuButton">
                            <Button onClick={prevPage}>Anterior</Button>
                            <Button onClick={nextPage}>Siguiente</Button>
                        </div>

                        <input type="text" className='form-control' placeholder='Buscar Producto' value={search} onChange={onSearchChange} />
                    </div>

                    <div id="salesTable">
                        <Table id="tabla" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Empresa</th>
                                    <th>Dirección</th>
                                    <th>RUC</th>
                                    <th>Fecha</th>
                                    <th>Total</th>
                                    <th>Resumen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterSales().map(sale => (
                                        <tr key={sale.id}>
                                            <td>{sale.id}</td>
                                            <td>{sale.nombre_empresa}</td>
                                            <td>{sale.direccion}</td>
                                            <td>{sale.ruc}</td>
                                            <td>{sale.fecha}</td>
                                            <td>{sale.total}</td>
                                            <td>
                                                <Button onClick={() => {
                                                    handleShowD(sale, sale.id)
                                                }} variant="warning">Ver más</Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
            <CreateModalSales show={show} setShow={setShow} setReload={setReload}/>
            <DetailModalSales show={showD} setShow={setShowD} sale={sale} code={code}/>
        </>
    )
}
