import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Modal, Row, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ventasService from '../../../services/Ventas';

export default function CreateModalSales(props) {
    const {show, setShow} = props;
    const [formData, setFormData] = useState(iniciarDatos());
    const [productos, setProductos] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        peticionGetProductos();
    }, []);

    useEffect(() => {
        setFormData({...formData, productos: products});
    }, [products]);

    const borrarProducto = (id) => {
        const newProduct = products.filter( product => product.producto !== id);
        setProducts(newProduct);
    }

    const handleClose = () => setShow(false);

    const peticionGetProductos = async() => {
        const urlListar = 'http://localhost:8000/api/products/listara';
        const resp = await fetch(urlListar);
        const pro = await resp.json();
        setProductos(pro.data);
    }

    const onSubmit = async(e) => {
        e.preventDefault();

        if(products.length > 0) {
            const res = await ventasService.create(formData);

            if(res && res.success){
                toast.success(res.message);
                handleClose();
                setFormData(iniciarDatos());
                setProducts([]);
            } else {
                toast.error(res.message);
            }
        } else {
            toast.error("Agregue un Producto como minimo!!");
        }
        console.log(formData);
    }

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const editarTotal = (id, cant) => {
        setFormData({...formData, productos: products});

        const obj = productos.map(producto => {
            if (producto.id == id) {
                return {precio: parseFloat(producto.precio_unit), cantidad: parseInt(cant)}
            }
        });

        obj.forEach(datos => {
            if (datos != null) {
                const tot = parseFloat(document.getElementById('total').value) + (datos.precio * datos.cantidad);
                setFormData({...formData, total : tot.toFixed(2)});
                document.getElementById('total').value = tot.toFixed(2);
            }
        });
    }

    const agregarProductos = () => {
        const prod = document.getElementById('producto').value;
        const cant = document.getElementById('cantidad').value;

        if (prod != 0 && cant != 0){
            setProducts([...products, {producto: prod, cantidad: cant}]);
            editarTotal(prod, cant);
            document.getElementById('cantidad').value = 0;
            document.getElementById('producto').value = 0;
        } else {
            toast.error("Ingrese un producto y su cantidad");
        }
    }

    return (
        <Modal show={show} onHide={handleClose} centered size='lg'>
            <Modal.Header>
                <Modal.Title>Generar Nueva Venta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <h2>Datos de la Nueva Venta</h2>

                    <Form onSubmit={onSubmit} onChange={onChange} id='crearBoleta'>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nombre de la Empresa</Form.Label>
                                    <Form.Control type="text" name="nombre" placeholder="Nombre de la Empresa" defaultValue={formData.nombre} required/>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label>RUC</Form.Label>
                                    <Form.Control type="number" name="ruc" placeholder="RUC de la Empresa" defaultValue={formData.ruc} required/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" name="direccion" placeholder="Dirección de la Empresa" defaultValue={formData.direccion} required/>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Producto</Form.Label>
                                    <Form.Control as='select' name='producto' defaultValue={formData.producto} id="producto">
                                        <option value='0'>Elegir un Producto...</option>
                                        {
                                            productos.map(producto => (
                                                <option value={producto.id} key={producto.id}>{producto.nombre}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Cantidad</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Tm.</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="number" name="cantidad" defaultValue="0" id="cantidad" required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Total</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>S/.</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="text" name="total" id="total" defaultValue="0" disabled/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button onClick={agregarProductos}>Agregar Producto</Button>
                    </Form>

                    <Table id="tablaMSales" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length !== 0 ?
                                    products.map(product => (
                                        <tr key={product.producto}>
                                            {productos.map(producto => {
                                                if (producto.id == product.producto) {
                                                    return <td key={product.producto}>{producto.nombre}</td>
                                                }
                                            })}
                                            <td>{product.cantidad} Tm.</td>
                                            <td>
                                                <Button onClick={() => {
                                                    borrarProducto(product.producto)
                                                }} variant="danger">Quitar</Button>
                                            </td>
                                        </tr>
                                    ))
                                :
                                <tr>
                                    <td colSpan="3">Sin Productos</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="success" form="crearBoleta" type="submit">Generar Venta</Button>
            </Modal.Footer>
        </Modal>
    )
}

const iniciarDatos = () => {
    return {
        nombre: '',
        ruc: '',
        direccion: '',
        productos: [],
        total: 0
    }
}
