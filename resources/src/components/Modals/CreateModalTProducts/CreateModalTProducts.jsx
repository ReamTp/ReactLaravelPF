import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { SpinnerDotted } from 'spinners-react';
import tPService from '../../../services/TipoProducto';

export default function CreateModalTProducts(props) {
    const {show, setShow, setState} = props;
    const [formData, setFormData] = useState({ nombre: ''} );
    const [cargando, setCargando] = useState(false);

    const handleClose = () => setShow(false);

    const onSubmit = async (e) => {
        // Evitar que el formulario recargue la pagina
        e.preventDefault();

        // Activar Spinner
        setCargando(true);

        if(formData.nombre !== "") {
            // Realizar consulta asyncrona
            const res = await tPService.create(formData);

            // Verificar si hay informacion
            if (res && res.success) {
                toast.success(res.message);
            }
            setCargando(false);
            setState(true);
            handleClose();
            setFormData({nombre: ''});
        } else {
            toast.error('Complete todos los campos')
            setCargando(false);
        }
    };

    const onChange = (e) => {
        // Actualizar valores del formData
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
    };

    return (
        <Modal show={show} onHide={handleClose} centered size='lg'>
            <Modal.Header>
                <Modal.Title>Crear Producto</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div>
                    <h2>Datos del Tipo de Producto</h2>

                    <Form onSubmit={onSubmit} onChange={onChange} id='crearProducto'>
                        <Form.Group>
                            <Form.Label>Nombre del Tipo de Producto</Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Nombre del Producto" defaultValue={formData.nombre} required/>
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="success" form='crearProducto' type='submit'>
                    {!cargando ? (
                        'Crear'
                    ) : (
                        <SpinnerDotted size="30" color="#FFFFFF" />
                    )}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}