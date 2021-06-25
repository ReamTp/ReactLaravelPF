import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import cServices from '../../../services/Capacitaciones';

export default function DeleteModalTrainings(props) {
    const {show, setShow, code, setReload} = props;
    const handleClose = () => setShow(false);

    const handleDeactive = async () => {
        await cServices.deactive(code).then((res) => {
            res.success ? toast.success(res.message) : toast.error(res.message);
        });
        setShow(false);
        setReload(true);
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Desactivar Capacitación</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>¿Está seguro que quieres desactivar la Capacitación?</h5>
                <p>Recuerda que una vez desactivada la capacitación quedara como terminada y no se podra reactivar</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="danger" onClick={() => {
                    handleDeactive()
                }}>Desactivar</Button>
            </Modal.Footer>
        </Modal>
    )
}
