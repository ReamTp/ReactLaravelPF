import React, { useEffect, useState } from 'react';
import { Badge, Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import BuscadorTabla from '../../components/BuscadorTabla';
import ReactHTMLTableExcel from 'react-html-table-to-excel';
import CreateModalProducts from '../../components/Modals/CreateModalProducts';
import EditModalProducts from '../../components/Modals/EditModalProducts';
import DeleteModalProducts from '../../components/Modals/DeleteModalProducts';
import ActiveModalProducts from '../../components/Modals/ActiveModalProducts';
import './ProductsPaga.scss';

export default function ProductsPage() {
    const [lista, setLista] = useState([]);
    const [show, setShow] = useState(false);
    const [showE, setShowE] = useState(false);
    const [codeE, setCodeE] = useState(null);
    const [showD, setShowD] = useState(false);
    const [showA, setShowA] = useState(false);
    const [codeD, setCodeD] = useState(null);
    const [state, setState] = useState(false);
    const [form, setForm] = useState({});

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

    const peticionGet = async() => {
        const urlListar = 'http://localhost:8000/api/products/listar';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setLista(pro.data);
        setState(false);
    }

    state ? peticionGet() : '';

    return (
        <>
            <h1 id="pagosTitle">Productos de la Empresa</h1>
            <Container id="payments">
                <div id="pagosDatos">
                    <h2>Datos de Productos</h2>

                    <BuscadorTabla/>

                    <div id="tablaPago">
                        <Table responsive striped bordered hover id="tabla" className='producto'>
                            <thead>
                                <tr>
                                    <th>Codigo</th>
                                    <th>Nombre</th>
                                    <th>Tipo de Producto</th>
                                    <th>Stock</th>
                                    <th>Precio Unt.</th>
                                    <th>Estado</th>
                                    <th>Opcion</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    lista.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.nombre}</td>
                                            <td>{product.tipo_producto.nombre}</td>
                                            <td>{product.stock}</td>
                                            <td>S/. {product.precio_unit}</td>
                                            <td>
                                                <div className='estado-a'>
                                                    {
                                                        product.estado ? <p><Badge variant="success">Activo</Badge></p> : <p><Badge variant="danger">Desactivado</Badge></p>
                                                    }
                                                </div>
                                            </td>
                                            <td>
                                                <Button onClick={() => {
                                                    handleShowEdit(product.id)
                                                }} variant='warning'>
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </Button>

                                                {
                                                    product.estado ?
                                                        <Button onClick={() => {
                                                            handleShowDeactive(product.id)
                                                        }}variant='danger'>
                                                            <FontAwesomeIcon icon={faMinusCircle}/>
                                                        </Button>
                                                    :
                                                        <Button onClick={() => {
                                                            handleShowActive(product.id)
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

                <div id="pagosMenu">
                    <h2>Opciones</h2>

                    <Button onClick={handleShow}>Crear Producto</Button>
                    <ReactHTMLTableExcel
                        id="btn-excel"
                        className="btn btn-success"
                        table="tabla"
                        filename="ListaPagos"
                        sheet="Pagina 1"
                        buttonText="Exportar a Excel"
                    />
                    <Link to="/functions/gerentegeneral/reportes" className="btn btn-warning">Ver Reporte</Link>
                </div>

            </Container>
            <CreateModalProducts show={show} setShow={setShow} setState={setState}/>
            <EditModalProducts show={showE} setShow={setShowE} code={codeE} formData={form} setFormData={setForm} setState={setState}/>
            <DeleteModalProducts show={showD} setShow={setShowD} code={codeD} setState={setState}/>
            <ActiveModalProducts show={showA} setShow={setShowA} code={codeD} setState={setState}/>
        </>
    )
}