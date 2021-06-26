import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import userServices from '../../../services/User';

export default function DeleteModalUser(props) {
    const {show, setShow, code, setReload} = props;
    const handleClose = () => setShow(false);

    const handleDeactive = async () => {
        await userServices.deactive(code).then((res) => {
            res.success ? toast.success(res.message) : toast.error(res.message);
        });
        setShow(false);
        setReload(true);
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Desactivar Usuario</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>¿Está seguro que quieres desactivar el usuario?</h5>
                <p>Recuerde que una vez desactivado el usuario no podra acceder al sistema</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="danger" onClick={handleDeactive}>Desactivar</Button>
            </Modal.Footer>
        </Modal>
    )
}
