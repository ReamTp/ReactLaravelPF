import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { SpinnerDotted } from 'spinners-react';
import productService from '../../../services/Products';

export default function EditModalProducts(props) {
    const {show, setShow, code, formData, setFormData, setState} = props;
    const [cargando, setCargando] = useState(false);
    const [cargando2, setCargando2] = useState(true);
    const [marca, setMarca] = useState([]);
    const [tipoP, setTipoP] = useState([]);
    const handleClose = () => setShow(false);

    const peticionDos = async (id) => {
        if (cargando2 && show) {
            const res = await productService.obtener(id);

            setFormData({
                id: res.id,
                nombre: res.nombre,
                marca: res.marca.id,
                tipo_producto: res.tipo_producto.id,
                stock: res.stock,
                peso_unit: res.peso_unit,
                precio_unit: res.precio_unit
            });
            setCargando2(false);
        }
    }

    useEffect(() => {
        peticionGetMark();
        peticionGetTipoP();
    }, []);

    peticionDos(code);
    !show && !cargando2 ? setCargando2(true) : '';

    const peticionGetMark = async() => {
        const urlListar = 'http://localhost:8000/api/mark/listar';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setMarca(pro.data);
    }

    const peticionGetTipoP = async() => {
        const urlListar = 'http://localhost:8000/api/tproducts/listar';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setTipoP(pro.data);
    }

    const onSubmit = async (e) => {
        // Evitar que el formulario recargue la pagina
        e.preventDefault();

        // Activar Spinner
        setCargando(true);

        // Realizar consulta asyncrona
        const res = await productService.editar(formData);

        // Verificar si hay informacion
        if (res && res.success) {
            toast.success(res.message);
            setCargando(false);
            setState(true);
        } else {
            toast.error(res.message);
        }
    };

    const onChange = (e) => {
        // Actualizar valores del formData
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Modal show={show} onHide={handleClose} centered size='lg'>
            <Modal.Header>
                <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <h2>Datos del Producto</h2>

                    <Form onSubmit={onSubmit} onChange={onChange} id='updateProducto'>
                        <Form.Group>
                            <Form.Label>Nombre del Producto</Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Nombre del Producto" defaultValue={formData.nombre}/>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control as='select' name='marca'>
                                        {
                                            marca.map(m => (
                                                <option value={m.id} key={m.id} selected={m.id == formData.marca ? "selected": ""}>{m.nombre}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Tipo Producto</Form.Label>
                                    <Form.Control as='select' name='tipo_producto'>
                                        {
                                            tipoP.map(tp => (
                                                <option value={tp.id} key={tp.id} selected={tp.id == formData.tipo_producto ? 'selected': ''}>{tp.nombre}</option>
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
                                        <Form.Control type="number" name="stock" placeholder="Stock" defaultValue={formData.stock}/>
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
                                        <Form.Control type="number" name="peso_unit" placeholder="Peso Unitario" defaultValue={formData.peso_unit}/>
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
                                        <Form.Control type="number" name="precio_unit" placeholder="Precio Unitario" defaultValue={formData.precio_unit}/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="warning" onClick={handleClose} form='updateProducto' type='submit'>
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