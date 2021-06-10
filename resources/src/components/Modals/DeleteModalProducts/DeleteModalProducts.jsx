import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import pService from '../../../services/Products';

export default function DeleteModalProducts(props) {
    const {show, setShow, setState, code} = props;
    const handleClose = () => setShow(false);

    const handleDeactive = async (id) => {
        await pService.deactive(id).then((res) => {
            res.success ? toast.success(res.message) : toast.error(res.message);
        });
        setShow(false);
        setState(true);
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Desactivar Producto</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>¿Está seguro que quieres desactivar el Producto?</h5>
                <p>Recuerda que una vez desactivado el producto dejará de estar visible.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="danger" onClick={() => handleDeactive(code)}>Desactivar</Button>
            </Modal.Footer>
        </Modal>
    )
}
