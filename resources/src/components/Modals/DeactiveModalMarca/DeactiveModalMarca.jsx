import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import mService from '../../../services/Marcas';

export default function DeactiveModalTProduct(props) {
    const {show, setShow, setState, code} = props;
    const handleClose = () => setShow(false);

    const handleDeactive = async (id) => {
        await mService.deactive(id).then((res) => {
            res.success ? toast.success(res.message) : toast.error(res.message);
        });
        setShow(false);
        setState(true);
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Desactivar Marca</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>¿Está seguro que quieres desactivar la Marca</h5>
                <p>Recuerda que una vez desactivada la dejará de estar visible y se desactivaran los productos de la misma.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="danger" onClick={() => handleDeactive(code)}>Desactivar</Button>
            </Modal.Footer>
        </Modal>
    )
}
