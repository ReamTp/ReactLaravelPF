import React from 'react'
import { faDolly, faDollyFlatbed, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import {checkbox} from '../../utils/funciones.js';

export default function EAdminFinanLinks() {
    return (
        <>
            <NavLink exact to={'/functions/productos'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faDollyFlatbed} />
                Productos
            </NavLink>

            <NavLink exact to={'/functions/tproductos'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faDolly} />
                Sobre Productos
            </NavLink>

            <NavLink exact to={'/functions/ventas'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                Ver Ventas
            </NavLink>
        </>
    )
}
