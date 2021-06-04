import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function DeleteModalTrainings(props) {
    const {show, setShow, code} = props;
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Desactivar Capacitación</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>¿Está seguro que quieres desactivar la Capacitación?</h5>
                <p>Recuerda que una vez desactivada la capacitación quedara como cancelada</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="danger" onClick={handleClose}>Desactivar</Button>
            </Modal.Footer>
        </Modal>
    )
}
