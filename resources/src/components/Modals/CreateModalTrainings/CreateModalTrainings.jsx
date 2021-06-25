import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Modal, Row, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import cServices from '../../../services/Capacitaciones';

export default function CreateModalTrainings(props) {
    const {show, setShow, setReload} = props;
    const [formData, setFormData] = useState(iniciarDatos());
    const [users, setUsers] = useState([]);
    const [us, setUs] = useState([]);

    useEffect(() => {
        getUsersData();
    }, []);

    const handleClose = () => setShow(false);

    const getUsersData = async () => {
        const users = await cServices.getUsers();
        setUs(users);
    }

    const onSubmit = async (e) =>  {
        e.preventDefault();

        setFormData({...formData, participantes: users});

        if(users.length > 0) {
            const res = await cServices.create(formData);

            if(res && res.success){
                toast.success(res.message);
                setReload(true);
                handleClose();
                setFormData(iniciarDatos());
                setUsers([]);
            } else {
                toast.error(res.message);
            }
        } else {
            toast.warning("Agregue un Participante como minimo!");
        }
    }

    const onChange = (e) =>  {
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log(formData);
    }

    const addUsers = () => {
        const user = document.getElementById('participante').value;
        let coincidencia = false;

        if (user != 0){
            users.forEach(u => {
                if (u.id == user) {
                    coincidencia = true;
                }
            });

            if (coincidencia) {
                toast.warning('Participante ya agregado!');
            } else {
                setUsers([...users, {id: user}]);
                document.getElementById('participante').value = 0;
            }
        } else {
            toast.error("Seleccione un Participante!");
        }
    }

    const borrarUser = (id) => {
        const newUsers = users.filter( user => user.id !== id);
        setUsers(newUsers);
    }

    return (
        <Modal show={show} onHide={handleClose} centered size='lg'>
            <Modal.Header>
                <Modal.Title>Crear Capacitacion</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div>
                    <h2>Datos de la Capacitacion</h2>

                    <Form onSubmit={onSubmit} onChange={onChange} id='crearCapacitacion'>
                        <Form.Group>
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" name="titulo" placeholder="Titulo de la Capacitacion" defaultValue={formData.titulo} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Descripción de la Capacitacion</Form.Label>
                            <Form.Control as="textarea" name="descripcion" placeholder="Descripcion de la Capacitacion" defaultValue={formData.descripcion}/>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control type='date' name='fecha' defaultValue={formData.fecha} required/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Hora Inicio</Form.Label>
                                    <Form.Control type='time' name='hora_inicio' defaultValue={formData.hora_inicio} required/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Hora Fin</Form.Label>
                                    <Form.Control type='time' name='hora_fin' defaultValue={formData.hora_fin} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Participantes</Form.Label>
                                    <Form.Control as='select' id='participante' defaultValue="0">
                                        <option value='0'>Elegir Participante...</option>
                                        {
                                            us.map(user => (
                                                <option value={user.id} key={user.id}>{user.nombre} {user.apellido}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Button variant='info' onClick={addUsers}>Agregar Participante</Button>
                            </Col>
                        </Row>
                    </Form>

                    <Table id="tablaMSales" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre y Apellidos</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length !== 0 ?
                                    users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            {us.map(u => {
                                                if (u.id == user.id) {
                                                    return <td key={user.id}>{u.nombre} {u.apellido}</td>
                                                }
                                            })}
                                            <td>
                                                <Button onClick={() => {
                                                    borrarUser(user.id)
                                                }} variant="danger">Quitar</Button>
                                            </td>
                                        </tr>
                                    ))
                                :
                                <tr>
                                    <td colSpan="3">Sin Asistentes</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="success" type="submit" form="crearCapacitacion">Crear</Button>
            </Modal.Footer>
        </Modal>
    )
}

const iniciarDatos = () => {
    return {
        titulo: '',
        descripcion: '',
        fecha: '',
        hora_inicio: '',
        hora_fin: '',
        organizador: JSON.parse(localStorage.getItem('token')).id,
        participantes: []
    }
}