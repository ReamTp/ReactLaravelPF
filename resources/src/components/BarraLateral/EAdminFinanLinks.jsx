import React from 'react'
import { faDolly, faDollyFlatbed, faSortAlphaDown, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import {controles} from '../../utils/funciones.js';

export default function EAdminFinanLinks() {
    return (
        <>
            <NavLink exact to={'/functions/eadfinanzas/productos'} activeClassName='active' onClick={controles}>
                <FontAwesomeIcon icon={faDollyFlatbed} />
                Productos
            </NavLink>

            <NavLink exact to={'/functions/eadfinanzas/tproductos'} activeClassName='active' onClick={controles}>
                <FontAwesomeIcon icon={faDolly} />
                Tipos de Productos
            </NavLink>

            <NavLink exact to={'/functions/eadfinanzas/marcas'} activeClassName='active' onClick={controles}>
                <FontAwesomeIcon icon={faSortAlphaDown} />
                Marcas
            </NavLink>

            <NavLink exact to={'/functions/notificaciones'} activeClassName='active' onClick={controles}>
                <FontAwesomeIcon icon={faBell} />
                Notificaciones
            </NavLink>
        </>
    )
}
