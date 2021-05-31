import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import Page404 from '../../pages/Page404';
import FunctionsRouter from '../FunctionsRouter';
import LevelRoute from '../LevelRoute';
import PagesRouter from '../PagesRouter';
import PublicRoute from '../PublicRoute';
/*
    AppRouter: Componente que define las rutas principales de la aplicacion
*/

export default function AppRouter() {
    return (
        <Router>
            {/* Switch: Busca la ruta es la solicitada por el usuario y la primera que coincida se elije */}
            {/* Nota: El Switch no es necesario poner pero si no se coloca se van a mostrar todas las rutas que coincidan */}
            <Switch>
                {/* Route y PrivateRoute: Componentes que definen a que ruta se va a redirir la pagina */}
                <PublicRoute exact path='/login' component={LoginPage} />
                <LevelRoute path='/functions' component={FunctionsRouter} />
                <Route exact path='/page404' component={Page404} />
                <Route path='/' component={PagesRouter} />
                {/* Redirect: Componente que redirige la ruta indicada, en este caso *, a una ruta indicada como '/page404' */}
                <Redirect from='*' to='/page404' />
            </Switch>
        </Router>
    )
}
