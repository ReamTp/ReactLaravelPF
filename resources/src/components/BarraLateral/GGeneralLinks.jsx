import React from "react";
import {faMoneyCheckAlt, faDollyFlatbed, faHandHoldingUsd, faChartPie, faFileAlt, faBell, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {controles} from '../../utils/funciones.js';

export default function GGeneralLinks() {
    return (
        <>
            <NavLink
                exact
                to={"/functions/gerentegeneral/pagos"}
                activeClassName="active"
                onClick={controles}
            >
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                Ver Pagos
            </NavLink>

            <NavLink
                exact
                to={"/functions/gerentegeneral/productos"}
                activeClassName="active"
                onClick={controles}
            >
                <FontAwesomeIcon icon={faDollyFlatbed} />
                Ver Productos
            </NavLink>

            <NavLink
                exact
                to={"/functions/gerentegeneral/ventas"}
                activeClassName="active"
                onClick={controles}
            >
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                Ver Ventas
            </NavLink>

            <NavLink
                exact
                to={"/functions/gerentegeneral/reportes"}
                activeClassName="active"
                onClick={controles}
            >
                <FontAwesomeIcon icon={faChartPie} />
                Ver Reportes
            </NavLink>

            <NavLink
                exact
                to={"/functions/notificaciones"}
                activeClassName="active"
                onClick={controles}
            >
                <FontAwesomeIcon icon={faBell} />
                Notificaciones
            </NavLink>
        </>
    );
}
