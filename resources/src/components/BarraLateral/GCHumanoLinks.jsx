import React from 'react'
import { faMoneyCheckAlt, faSortAmountUp, faUserClock, faChalkboardTeacher, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export default function GCHumanoLinks() {
    return (
        <>
            <NavLink exact to={'/echuman/users'} activeClassName='active'>
                <FontAwesomeIcon icon={faUser} />
                Usuarios
            </NavLink>
            
            <NavLink exact to={'/gdchumano/pagos'} activeClassName='active'>
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                Ver Pagos
            </NavLink>

            <NavLink exact to={'/gdchumano/aumentos'} activeClassName='active'>
                <FontAwesomeIcon icon={faSortAmountUp} />
                Ver Aumentos
            </NavLink>
            
            <NavLink exact to={'/gdchumano/productos'} activeClassName='active'>
                <FontAwesomeIcon icon={faUserClock} />
                Definir Horarios
            </NavLink>
            
            <NavLink exact to={'/gdchumano/capacitaciones'} activeClassName='active'>
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
