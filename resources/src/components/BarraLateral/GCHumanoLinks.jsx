import React from 'react';
import { faMoneyCheckAlt, faSortAmountUp, faUserClock, faChalkboardTeacher, faBell, faUser, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {checkbox} from '../../utils/funciones.js';

export default function GCHumanoLinks() {
    return (
        <>
            <NavLink exact to={'/functions/users'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faUser} />
                Usuarios
            </NavLink>

            <NavLink exact to={'/functions/pagos'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                Ver Pagos
            </NavLink>

            <NavLink exact to={'/functions/aumentos'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faSortAmountUp} />
                Ver Aumentos
            </NavLink>

            <NavLink exact to={'/functions/horarios'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faUserClock} />
                Definir Horarios
            </NavLink>

            <NavLink exact to={'/functions/capacitaciones'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
                Capacitaciones
            </NavLink>

            <NavLink exact to={"/functions/reportes"} activeClassName="active" onClick={checkbox}>
                <FontAwesomeIcon icon={faChartPie} />
                Ver Reportes
            </NavLink>
        </>
    )
}
