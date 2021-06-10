import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import pService from '../../../services/Products';

export default function ActiveModalProducts(props) {
    const {show, setShow, setState, code} = props;
    const handleClose = () => setShow(false);

    const handleActive = async(id) => {
        await pService.active(id).then((resp) => {
            resp.success ? toast.success(resp.message) : toast.error(resp.message);
        });
        setShow(false);
        setState(true);
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Activar Producto</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>¿Está seguro que quieres activar el Producto?</h5>
                <p>Recuerda que una vez activado el producto será visible para todos.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="success" onClick={() => handleActive(code)}>Activar</Button>
            </Modal.Footer>
        </Modal>
    )
}
