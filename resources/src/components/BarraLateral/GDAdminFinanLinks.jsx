import React from 'react'
import { faMoneyCheckAlt, faDollyFlatbed, faHandHoldingUsd, faChartPie, faFileAlt, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export default function GDAdminFinanLinks() {
    return (
        <>  
            <NavLink exact to={'/gerentedepartamento/pagos'} activeClassName='active'>
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                Ver Pagos
            </NavLink>
            
            <NavLink exact to={'/gerentedepartamento/productos'} activeClassName='active'>
                <FontAwesomeIcon icon={faDollyFlatbed} />
                Ver Productos
            </NavLink>
            
            <NavLink exact to={'/gerentedepartamento/ventas'} activeClassName='active'>
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                Ver Ventas
            </NavLink>
            
            <NavLink exact to={'/gerentedepartamento/informes'} activeClassName='active'>
                <FontAwesomeIcon icon={faFileAlt} />
                Ver Informes
            </NavLink>
            
            <NavLink exact to={'/notificaciones'} activeClassName='active'>
                <FontAwesomeIcon icon={faBell} />
                Notificaciones
            </NavLink>
        </>
    )
}
