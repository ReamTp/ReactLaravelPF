import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBirthdayCake, faEnvelope, faKey, faMobile, faMoneyCheckAlt, faPhone, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { isEmailValid } from '../../../utils/validations';
import userServices from '../../../services/User';

export default function CreateModalUser(props) {
    const {show, setShow, setReload} = props;
    const [formData, setFormData] = useState(inicialesValores());
    const [tUsers, setTUsers] = useState([])
    const [departamentos, setDepartamentos] = useState([])

    const handleClose = () => setShow(false);

    useEffect(() => {
        getTUsersData();
        getDepartaments();
    }, [])

    const getTUsersData = async () => {
        const res = await userServices.getTipoUsers();
        setTUsers(res);
    }

    const getDepartaments = async () => {
        const res = await userServices.getDepartaments();
        setDepartamentos(res);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (isEmailValid(formData.correo)){
            if (formData.password === formData.password_repeat){
                if (formData.tipo_usuario != '0'){
                    if (formData.departamento != '0'){
                        const resp = await userServices.register(formData);

                        if (resp && resp.success) {
                            toast.success(resp.message);
                            setReload(true);
                            handleClose();
                            setFormData(inicialesValores())
                        } else {
                            toast.success(resp.message);
                        }
                    } else {
                        toast.warning('Ingrese el Departamento!')
                    }
                } else {
                    toast.warning('Ingrese el tipo de usuario!')
                }
            } else {
                toast.error('Las contraseñas deben ser iguales!');
            }
        } else {
            toast.warning('Ingrese un correo valido!');
        }
    }

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log(formData);
    }

    return (
        <Modal show={show} onHide={handleClose} centered size='lg'>
            <Modal.Header>
                <Modal.Title>Crear Usuario</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <h2>Datos del Usuario</h2>

                    <Form onSubmit={onSubmit} onChange={onChange} id='crearUser'>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nombres: </Form.Label>
                                    <Form.Control type="text" name="nombre" placeholder="Nombres del Usuario" defaultValue={formData.nombre} required/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Apellidos: </Form.Label>
                                    <Form.Control type="text" name="apellido" placeholder="Apellidos del Usuario" defaultValue={formData.apellido} required/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Correo: </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="email" name="correo" placeholder="Correo Electronico" defaultValue={formData.correo} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>DNI:</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faAddressCard}/>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="number" name="dni" placeholder="Numero de DNI" defaultValue={formData.dni} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Contraseña: </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faKey}/>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="password" name="password" placeholder="Contraseña" defaultValue={formData.password} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Repita la Contraseña: </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faKey}/>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="password" name="password_repeat" placeholder="Repita la Contraseña" defaultValue={formData.password_repeat} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Tipo de Usuario</Form.Label>
                                    <Form.Control as='select' name='tipo_usuario' defaultValue={formData.tipo_usuario}>
                                        <option value='0'>Elegir Tipo de Usuario...</option>
                                        {
                                            tUsers.map(tu => (
                                                <option value={tu.id} key={tu.id}>{tu.titulo}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Departamento: </Form.Label>
                                    <Form.Control as='select' name='departamento' defaultValue={formData.departamento}>
                                        <option value='0'>Elegir Departamento...</option>
                                        {
                                            departamentos.map(d => (
                                                <option value={d.id} key={d.id}>{d.nombre}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Sueldo Bruto: </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faMoneyCheckAlt}/>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="number" name="sueldo_bruto" defaultValue={formData.sueldo_bruto} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Fecha de Nacimiento: </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faBirthdayCake}/>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="date" name="fecha" defaultValue={formData.fecha} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Telefono: </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faPhone}/>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="number" name="telefono" placeholder="Numero Telefonico" defaultValue={formData.telefono} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Celular: </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faMobile}/>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="number" name="celular" placeholder="Numero de Celular" defaultValue={formData.celular} required/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Estado: </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                {
                                                    formData.estado == 'true' ? (
                                                        <FontAwesomeIcon icon={faToggleOn} />
                                                    ) : formData.estado == 'false' ?
                                                        <FontAwesomeIcon icon={faToggleOff}/>
                                                    : ''
                                                }
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as='select' name='estado' defaultValue={formData.estado}>
                                            <option value='true'>Activo</option>
                                            <option value='false'>Desactivado</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="success" type="submit" form="crearUser">Crear</Button>
            </Modal.Footer>
        </Modal>
    )
}

const inicialesValores = () => {
    return {
        encargado: JSON.parse(localStorage.getItem('token')).id,
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        password_repeat: '',
        dni: '',
        celular: '',
        telefono: '',
        tipo_usuario: '0',
        departamento: '0',
        sueldo_bruto: '',
        fecha: '',
        estado: 'true',
    }
}