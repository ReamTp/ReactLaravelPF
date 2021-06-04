import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function EditModalUser(props) {
    const {show, setShow, children, code} = props;
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered size='lg'>
            <Modal.Header>
                <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {children}
                <h2>{code}</h2>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="warning" onClick={handleClose}>Guardar Cambios</Button>
            </Modal.Footer>
        </Modal>
    )
}
