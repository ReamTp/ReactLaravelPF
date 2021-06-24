import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SpinnerDotted } from "spinners-react";
import { Redirect } from "react-router-dom";
import { size } from "lodash";
import { toast } from "react-toastify";
import usuario from "../../../services/User";

import logo2 from "../../../assets/img/favicon.png";
import "./ComponenteDer.scss";

export default function ComponenteDer() {
    // Establecer UseStates
    const [formData, setFormData] = useState(valoresInciales());
    const [cargando, setCargando] = useState(false);
    const [redireccionar, setRedireccionar] = useState(false);

    // Iniciar variable dataToken
    let dataToken = null;

    // Funcion para cuando se envie el formulario
    const onSubmit = async (e) => {
        // Evitar que el formulario recargue la pagina
        e.preventDefault();

        // Verificar tamaño del email y password
        if (size(formData.email) === 0 || size(formData.password) === 0) {
            toast.info("Completa todo los campos del formulario");
        } else {
            // Activar Spinner
            setCargando(true);

            // Realizar consulta asyncrona
            const res = await usuario.login(formData);

            // Verificar si hay informacion (Login correcto)
            if (res && res.success) {
                console.log(res);
                toast.success("Inicio de Sesión Correcto");
                dataToken = JSON.stringify(res.data);

                if (dataToken !== null) {
                    if (typeof Storage !== "undefined") {
                        localStorage.setItem("token", dataToken);
                    }
                } else {
                    toast.warning("No se pudo guardar la sesión");
                }
                setFormData(valoresInciales())
                setRedireccionar(true);
            } else {
                toast.error(res.message);
            }
        }
        setCargando(false);
    };

    // Funcion para cuando se realice un cambio en el formulario
    const onChange = (e) => {
        // Actualizar valores del formData
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div id="loginCDer">
                <div>
                    <img src={logo2} alt="Logo Camposol" />
                    <h2>Camposol cuidando de la granja a la familia</h2>

                    {/* Formulario de inicio de Session con sus funciones para cuando envie datos y para cuando tengamos cambios */}
                    <Form onSubmit={onSubmit} onChange={onChange}>
                        <Form.Group>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Correo Electronico"
                                defaultValue={formData.email}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                defaultValue={formData.password}
                            />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            {/* Comprobar si se actualiza el estado de cargando entre true o false */}
                            {!cargando ? (
                                "Iniciar Sesión"
                            ) : (
                                <SpinnerDotted size="30" color="#FFFFFF" />
                            )}
                        </Button>
                    </Form>
                </div>
            </div>
            {redireccionar ? <Redirect to='/' /> : ''}
        </>
    );
}

// Establecer valores iniciales de los campos del formulario para el UseState
function valoresInciales() {
    return {
        email: '',
        password: ''
    }
}
