import React from 'react'
import { faDolly, faDollyFlatbed, faSortAlphaDown, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export default function EAdminFinanLinks() {
    return (
        <>  
            <NavLink exact to={'/eadfinanzas/productos'} activeClassName='active'>
                <FontAwesomeIcon icon={faDollyFlatbed} />
                Productos
            </NavLink>
            
            <NavLink exact to={'/eadfinanzas/pagos'} activeClassName='active'>
                <FontAwesomeIcon icon={faDolly} />
                Tipos de Productos
            </NavLink>
            
            <NavLink exact to={'/eadfinanzas/ventas'} activeClassName='active'>
                <FontAwesomeIcon icon={faSortAlphaDown} />
                Marcas
            </NavLink>
            
            <NavLink exact to={'/notificaciones'} activeClassName='active'>
                <FontAwesomeIcon icon={faBell} />
                Notificaciones
            </NavLink>
        </>
    )
}
