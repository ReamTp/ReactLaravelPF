import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { SpinnerDotted } from 'spinners-react';
import tPService from '../../../services/TipoProducto';

export default function EditModalTProducts(props) {
    const {show, setShow, code, formData, setFormData, setState} = props;
    const [cargando, setCargando] = useState(false);
    const [cargando2, setCargando2] = useState(true);
    const handleClose = () => setShow(false);

    const peticionDos = async (id) => {
        if (cargando2 && show) {
            const res = await tPService.obtener(id);

            setFormData({
                id: res.id,
                nombre: res.nombre
            });
            setCargando2(false);
        }
    }

    peticionDos(code);
    !show && !cargando2 ? setCargando2(true) : '';

    const onSubmit = async (e) => {
        // Evitar que el formulario recargue la pagina
        e.preventDefault();

        // Activar Spinner
        setCargando(true);

        // Realizar consulta asyncrona
        const res = await tPService.editar(formData);

        // Verificar si hay informacion
        if (res && res.success) {
            toast.success(res.message);
        }
        setCargando(false);
        setState(true);
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
                    <h2>Datos del Tipo de Producto</h2>

                    <Form onSubmit={onSubmit} onChange={onChange} id='updateProducto'>
                        <Form.Group>
                            <Form.Label>Nombre del Tipo de Producto</Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Nombre del Producto" defaultValue={formData.nombre}/>
                        </Form.Group>
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