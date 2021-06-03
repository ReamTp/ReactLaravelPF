import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { size } from 'lodash';
import { isEmailValid } from '../../utils/validations';
import userServices from '../../services/User';
import './MySettings.scss';

export default function MySettings(props) {
    if (props.datos){
        const { datos } = props;
        const [formData, setFormData] = useState(inicialesValores(datos));

        const update = async (datos) => {
            const resp = await userServices.actualizar(datos);

            if(resp){
                toast.success('Usuario actualizado Correctamente!');
                toast.info('Los datos pueden tardar en actualizare');
            } else {
                toast.error('Error al actualizar usuario');
            }
        }

        const onSubmit = e => {
            e.preventDefault();
            const invalidCount = 0;
            setFormData({...formData, correo: formData.correo.toLowerCase()});

            if(invalidCount === size(formData)){
                toast.error('Todos los campos tienen que estar llenos');
            } else if (invalidCount === size(formData.nombre) || invalidCount === size(formData.apellido) || invalidCount === size(formData.correo) || invalidCount === size(formData.password) || invalidCount === size(formData.celular) || invalidCount === size(formData.telefono)){
                toast.error('Todos los campos tienen que estar llenos');
            }else{
                if(isEmailValid(formData.correo)){
                    update(formData);
                } else {
                    toast.error('El correo debe ser valido!');
                }
            }
        }

        const onChange = e => {
            setFormData({...formData, [e.target.name]: e.target.value});
        }

        return (
            <div id='mysettings'>
                <Container>
                    <div id='titulo'>
                        <h2>Mis Ajustes</h2>
                    </div>

                    <Form onSubmit={onSubmit} onChange={onChange}>
                        <div id='form-data'>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nombres</Form.Label>
                                        <Form.Control type="text" placeholder='Nombres' defaultValue={formData.nombre} name="nombre"/>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label>Apellidos</Form.Label>
                                        <Form.Control type="text" placeholder='Apellidos' defaultValue={formData.apellido} name='apellido'/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control type="email" placeholder='Correo' defaultValue={formData.correo} name='correo'/>
                                        <Form.Text>El email ingresado será usado para poder contactarte</Form.Text>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type='password' placeholder='Contraseña' defaultValue={formData.password} name='password'/>
                                        <Form.Text>Recuerda no compartir tu contraseña con nadie</Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Celular</Form.Label>
                                        <Form.Control type="number" placeholder='Numero' defaultValue={formData.celular} name='celular'/>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control type='number' placeholder='Telefono' defaultValue={formData.telefono} name='telefono'/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>

                        <div className='f-button'>
                            <Button variant="success" type="submit">Guardar Cambios</Button>
                        </div>
                    </Form>
                </Container>
            </div>
        )
    } else {
        return('');
    }
}

function inicialesValores(datos){
    return {
        nombre: datos ? datos.nombre : '',
        apellido: datos ? datos.apellido : '',
        correo: datos ? datos.correo : '',
        password: datos ? datos.password : '',
        celular: datos ? ''+ datos.celular : '',
        telefono: datos ? ''+ datos.telefono : '',
    }
}
