import React, { useEffect, useState } from 'react';
import { Button, Col, Collapse, Form, InputGroup, Modal, Row, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import pagosService from '../../../services/BoletasUser';

export default function GenerarBoletaUser(props) {
    const {show, setShow, setReload} = props;
    const [formData, setFormData] = useState(iniciarDatos());
    const [empleados, setEmpleados] = useState([]);
    const [comision, setComision] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        peticionGetEmpleados();
        peticionComisiones();
    }, []);

    const handleClose = () => setShow(false);

    const peticionGetEmpleados = async() => {
        const urlListar = 'http://localhost:8000/api/pagos/getempleados';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setEmpleados(pro.data);
    }

    const peticionComisiones = async() => {
        const urlListar = 'http://localhost:8000/api/comisiones/listar';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setComision(pro.data);
    }

    const onSubmit = async(e) => {
        e.preventDefault();

        if(formData.sueldo_neto > 0) {
            const res = await pagosService.create(formData);

            if(res && res.success){
                toast.success(res.message);
                setReload(true);
                handleClose();
                setFormData(iniciarDatos());
            } else {
                toast.error(res.message);
            }
        } else {
            toast.warning('Ingrese un empleado');
        }
    }

    const onChange = (e) => {
        if (e.target.name === 'empleado') {
            editarTotal(e.target.value);
        }
    }

    const editarTotal = (id) => {
        if (id > 0) {
            empleados.map(emp => {
                if (emp.id == id) {
                    let comPor = 0;

                    comision.map(com => {
                        com.operacion ? comPor -= com.porcentaje: comPor += com.porcentaje;
                    });

                    const resp = emp.sueldo_bruto * ((100 - comPor)/100);
                    setFormData({...formData, empleado: parseInt(id), sueldo_neto: resp});

                    document.getElementById('total').value = resp.toFixed(2);
                }
            });
        } else {
            setFormData({...formData, empleado: '', sueldo_neto: 0});

            document.getElementById('total').value = 0;
        }
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Generar Nuevo Pago</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <h2>Datos de la Boleta de Pago</h2>

                    <Form onSubmit={onSubmit} onChange={onChange} id='crearBoleta'>
                        <Form.Group>
                            <Form.Label>Empleado</Form.Label>
                            <Form.Control as='select' name='empleado' id="empleado" defaultValue={formData.empleado}>
                                <option value='0' key="0">Elegir un Empleado...</option>
                                {
                                    empleados.map(emp => (
                                        <option value={emp.id} key={emp.id}>{emp.nombre} {emp.apellido}</option>
                                    ))
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sueldo Neto</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>S/.</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" name="total" id="total" defaultValue="0" disabled/>
                            </InputGroup>
                        </Form.Group>
                    </Form>

                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >Ver Comisiones</Button>

                    <br/>
                    <br/>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            {
                                comision ? (
                                    comision.map(com => (
                                        <Row key={com.id}>
                                            <Col>{com.nombre}</Col>
                                            <Col></Col>
                                            <Col>{com.operacion ? "+" : "-"}  {com.porcentaje} %</Col>
                                        </Row>
                                    ))
                                ) : ''
                            }
                        </div>
                    </Collapse>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="success" form="crearBoleta" type="submit">Generar Nuevo Pago</Button>
            </Modal.Footer>
        </Modal>
    )
}

const iniciarDatos = () => {
    return {
        empleado: '',
        sueldo_neto: 0,
        encargado: JSON.parse(localStorage.getItem('token')).id,
    }
}
