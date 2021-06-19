import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import mService from '../../../services/Marcas';

export default function ActiveModalMarcas(props) {
    const {show, setShow, setState, code} = props;
    const handleClose = () => setShow(false);

    const handleActive = async(id) => {
        await mService.active(id).then((resp) => {
            resp.success ? toast.success(resp.message) : toast.error(resp.message);
        });
        setShow(false);
        setState(true);
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Activar Marca</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>¿Está seguro que quieres activar el Tipo de Producto?</h5>
                <p>Recuerda que una vez activado la marca será visible para todos.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="success" onClick={() => handleActive(code)}>Activar</Button>
            </Modal.Footer>
        </Modal>
    )
}
