import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import BuscadorTabla from '../../components/BuscadorTabla';
import ReactHTMLTableExcel from 'react-html-table-to-excel';
import boletasUserService from '../../services/BoletasUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';
import GenerarBoletaUser from '../../components/Modals/GenerarBoletaUser/GenerarBoletaUser';
import './PaymentsPage.scss';
import { toast } from 'react-toastify';

export default function PaymentsPage() {
    const [lista, setLista] = useState([]);
    const [show, setShow] = useState(false);
    const [reload, setReload] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const handleShow = () => setShow(true);

    const obtenerDatos = async() => {
        const res = await boletasUserService.listar();
        setLista(res);
        setCurrentPage(0);
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

    useEffect(() => {
        if (reload) {
            obtenerDatos()
            setReload(false);
        }
    }, [reload])

    // Paginacion
    const filterBoletas = () => {
        return lista.slice(currentPage, currentPage + 3);
    }

    const nextPage = () => {
        if(lista.length > currentPage + 3){
            setCurrentPage(currentPage + 3)
        } else {
            toast.error('No hay más datos');
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 3)
        } else {
            toast.error('No hay más datos');
        }
    }

    return (
        <>
            <h1 id="pagosTitle">Pagos de empleados</h1>
            <Container id="payments">
                <div id="pagosDatos">
                    <h2>Datos de Pagos</h2>

                    <div>
                        <BuscadorTabla/>
                        <div>
                            <Button onClick={prevPage}>Anterior</Button>
                            <Button onClick={nextPage}>Siguiente</Button>
                        </div>
                    </div>

                    <div id="tablaPago">
                        <Table responsive striped bordered hover id="tabla">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Cod. Empleado</th>
                                    <th>Nombre</th>
                                    <th>Sueldo</th>
                                    <th>Encargado</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    filterBoletas().length > 0 ? (
                                        filterBoletas().map(bu => (
                                            <tr key={bu.id}>
                                                <td>{bu.id}</td>
                                                <td>{bu.id_empleado}</td>
                                                <td>{bu.empleado}</td>
                                                <td>S/. {bu.sueldo}</td>
                                                <td>{bu.encargado}</td>
                                                <td>
                                                    <Button variant='success' href={"mailto:"+bu.correo}>Hablar a Encargado</Button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : <tr><td colSpan='6'><h3><center><FontAwesomeIcon icon={faBellSlash}/> Sin Boletas</center></h3></td></tr>
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>

                <div id="pagosMenu">
                    <h2>Opciones</h2>
                    <Button onClick={handleShow} variant="warning">Pagar Empleado</Button>
                    <ReactHTMLTableExcel
                        id="btn-excel"
                        className="btn btn-success"
                        table="tabla"
                        filename="ListaPagos"
                        sheet="Pagina 1"
                        buttonText="Exportar a Excel"
                    />
                </div>

            </Container>
            <GenerarBoletaUser show={show} setShow={setShow} setReload={setReload}/>
        </>
    )
}
