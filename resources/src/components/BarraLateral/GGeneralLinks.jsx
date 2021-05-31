import React from "react";
import {faMoneyCheckAlt, faDollyFlatbed, faHandHoldingUsd, faChartPie, faFileAlt, faBell, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {checkbox} from '../../utils/funciones.js';

export default function GGeneralLinks() {
    return (
        <>
            <NavLink
                exact
                to={"/functions/gerentegeneral/pagos"}
                activeClassName="active"
                onClick={checkbox}
            >
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                Ver Pagos
            </NavLink>

            <NavLink
                exact
                to={"/functions/gerentegeneral/productos"}
                activeClassName="active"
                onClick={checkbox}
            >
                <FontAwesomeIcon icon={faDollyFlatbed} />
                Ver Productos
            </NavLink>

            <NavLink
                exact
                to={"/functions/gerentegeneral/ventas"}
                activeClassName="active"
                onClick={checkbox}
            >
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                Ver Ventas
            </NavLink>

            <NavLink
                exact
                to={"/functions/gerentegeneral/reportes"}
                activeClassName="active"
                onClick={checkbox}
            >
                <FontAwesomeIcon icon={faChartPie} />
                Ver Reportes
            </NavLink>

            <NavLink
                exact
                to={"/functions/notificaciones"}
                activeClassName="active"
                onClick={checkbox}
            >
                <FontAwesomeIcon icon={faBell} />
                Notificaciones
            </NavLink>
        </>
    );
}
