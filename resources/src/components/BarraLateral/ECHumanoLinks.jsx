import React from 'react'
import { faMoneyCheckAlt, faUserClock, faChalkboardTeacher, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export default function ECHumanoLinks() {
    return (
        <>
            <NavLink exact to={'/echuman/pagos'} activeClassName='active'>
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                Ver Pagos
            </NavLink>
            
            <NavLink exact to={'/echuman/productos'} activeClassName='active'>
                <FontAwesomeIcon icon={faUserClock} />
                Definir Horarios
            </NavLink>
            
            <NavLink exact to={'/echuman/ventas'} activeClassName='active'>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
                Capacitaciones
            </NavLink>
            
            <NavLink exact to={'/notificaciones'} activeClassName='active'>
                <FontAwesomeIcon icon={faBell} />
                Notificaciones
            </NavLink>
        </>
    )
}
