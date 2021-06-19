import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { SpinnerDotted } from 'spinners-react';
import pService from '../../../services/Products';

export default function CreateModalProducts(props) {
    const {show, setShow, setState} = props;
    const [formData, setFormData] = useState(inicialesValores());
    const [cargando, setCargando] = useState(false);
    const [marca, setMarca] = useState([]);
    const [tipoP, setTipoP] = useState([]);

    const handleClose = () => setShow(false);

    useEffect(() => {
        peticionGetMark();
        peticionGetTipoP();
    }, []);

    const peticionGetMark = async() => {
        const urlListar = 'http://localhost:8000/api/mark/listara';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setMarca(pro.data);
    }

    const peticionGetTipoP = async() => {
        const urlListar = 'http://localhost:8000/api/tproducts/listara';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setTipoP(pro.data);
    }

    const onSubmit = async (e) => {
        // Evitar que el formulario recargue la pagina
        e.preventDefault();

        // Activar Spinner
        setCargando(true);

        if(formData.marca != '0' && formData.tipo_producto != '0') {
            // Realizar consulta asyncrona
            const res = await pService.create(formData);

            // Verificar si hay informacion
            if (res && res.success) {
                toast.success(res.message);
                setCargando(false);
                setState(true);
                handleClose();
                setFormData(inicialesValores());
            } else {
                toast.error(res.message);
            }
        } else {
            toast.error('Complete todos los campos')
            setCargando(false);
        }
    };

    const onChange = (e) => {
        // Actualizar valores del formData
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Modal show={show} onHide={handleClose} centered size='lg'>
            <Modal.Header>
                <Modal.Title>Crear Producto</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <h2>Datos del Producto</h2>

                    <Form onSubmit={onSubmit} onChange={onChange} id='crearProducto'>
                        <Form.Group>
                            <Form.Label>Nombre del Producto</Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Nombre del Producto" defaultValue={formData.nombre} required/>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control as='select' name='marca' defaultValue={formData.marca}>
                                        <option value='0'>Elegir Marca...</option>
                                        {
                                            marca.map(m => (
                                                <option value={m.id} key={m.id}>{m.nombre}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Tipo Producto</Form.Label>
                                    <Form.Control as='select' name='tipo_producto' defaultValue={formData.tipo_producto}>
                                        <option value='0'>Elegir Tipo Producto...</option>
                                        {
                                            tipoP.map(tp => (
                                                <option value={tp.id} key={tp.id}>{tp.nombre}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Stock</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Tn</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="number" name="stock" placeholder="Stock" defaultValue={formData.stock} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Peso</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Kg</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="number" name="peso_unit" placeholder="Peso Unitario" defaultValue={formData.peso_unit} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Precio</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>S/.</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="number" name="precio_unit" placeholder="Precio Unitario" defaultValue={formData.precio_unit} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="success" form='crearProducto' type='submit'>
                    {!cargando ? (
                        'Guardar Cambios'
                    ) : (
                        <SpinnerDotted size="30" color="#FFFFFF" />
                    )}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

function inicialesValores() {
    return {
        nombre: '',
        marca: '0',
        tipo_producto: '0',
        stock: '',
        peso_unit: '',
        precio_unit: ''
    }
}