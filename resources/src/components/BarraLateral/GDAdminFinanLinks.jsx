import React from 'react';
import { faMoneyCheckAlt, faDollyFlatbed, faHandHoldingUsd, faChartPie, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {checkbox} from '../../utils/funciones.js';

export default function GDAdminFinanLinks() {
    return (
        <>
            {/* <NavLink exact to={'/functions/pagos'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                Ver Pagos
            </NavLink> */}

            <NavLink exact to={'/functions/productos'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faDollyFlatbed} />
                Ver Productos
            </NavLink>

            <NavLink exact to={'/functions/ventas'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                Ver Ventas
            </NavLink>

            <NavLink exact to={'/functions/reportes'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faChartPie} />
                Ver Reportes
            </NavLink>
        </>
    )
}
