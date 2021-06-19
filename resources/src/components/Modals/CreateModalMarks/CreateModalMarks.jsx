import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { SpinnerDotted } from 'spinners-react';
import mService from '../../../services/Marcas';

export default function CreateModalMarks(props) {
    const {show, setShow, setState} = props;
    const [formData, setFormData] = useState({ nombre: '', descripcion : ''});
    const [cargando, setCargando] = useState(false);

    const handleClose = () => setShow(false);

    const onSubmit = async (e) => {
        // Evitar que el formulario recargue la pagina
        e.preventDefault();

        // Activar Spinner
        setCargando(true);

        if(formData.nombre !== "") {
            // Realizar consulta asyncrona
            const res = await mService.create(formData);

            // Verificar si hay informacion
            if (res && res.success) {
                toast.success(res.message);
            }
            setCargando(false);
            setState(true);
            handleClose();
            setFormData({ nombre: '', descripcion : ''});
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
                <Modal.Title>Crear Marca</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div>
                    <h2>Datos de la Marca</h2>

                    <Form onSubmit={onSubmit} onChange={onChange} id='crearProducto'>
                        <Form.Group>
                            <Form.Label>Nombre de la Marca</Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Nombre de la Marca" defaultValue={formData.nombre} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descripción de la Marca</Form.Label>
                            <Form.Control as='textarea' name="descripcion" placeholder="Descripcion de la Marca" defaultValue={formData.descripcion}/>
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