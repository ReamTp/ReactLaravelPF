import React from 'react'
import { faUser, faMoneyCheckAlt, faUserClock, faChalkboardTeacher, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export default function ECHumanoLinks() {
    return (
        <>
            <NavLink exact to={'/functions/echuman/users'} activeClassName='active'>
                <FontAwesomeIcon icon={faUser} />
                Usuarios
            </NavLink>

            <NavLink exact to={'/functions/echuman/pagos'} activeClassName='active'>
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                Ver Pagos
            </NavLink>
            
            <NavLink exact to={'/functions/echuman/horarios'} activeClassName='active'>
                <FontAwesomeIcon icon={faUserClock} />
                Definir Horarios
            </NavLink>
            
            <NavLink exact to={'/functions/echuman/capacitaciones'} activeClassName='active'>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
                Capacitaciones
            </NavLink>
            
            <NavLink exact to={'/functions/notificaciones'} activeClassName='active'>
                <FontAwesomeIcon icon={faBell} />
                Notificaciones
            </NavLink>
        </>
    )
}
