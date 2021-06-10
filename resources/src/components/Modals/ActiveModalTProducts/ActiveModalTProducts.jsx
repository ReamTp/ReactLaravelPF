import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import tPService from '../../../services/TipoProducto';

export default function ActiveModalTProducts(props) {
    const {show, setShow, setState, code} = props;
    const handleClose = () => setShow(false);

    const handleActive = async(id) => {
        await tPService.active(id).then((resp) => {
            resp.success ? toast.success(resp.message) : toast.error(resp.message);
        });
        setShow(false);
        setState(true);
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Activar Tipo de Producto</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>¿Está seguro que quieres activar el Tipo de Producto?</h5>
                <p>Recuerda que una vez activado el tipo de producto será visible para todos.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="success" onClick={() => handleActive(code)}>Activar</Button>
            </Modal.Footer>
        </Modal>
    )
}
