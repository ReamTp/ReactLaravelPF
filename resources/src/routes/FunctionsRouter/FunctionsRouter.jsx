import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BarraLateral from '../../components/BarraLateral'
import MyFunctionsPage from '../../pages/MyFunctionsPage';
import NotificationsPage from '../../pages/NotificationsPage/NotificationsPage';
import PaymentsPage from '../../pages/PaymentsPage';
import ProductsPage from '../../pages/ProductsPage';
import IncreasesPage from '../../pages/IncreasesPage';
import ReportPage from '../../pages/ReportPage';
import SalesPage from '../../pages/SalesPage'
import UserPage from '../../pages/UserPage/UserPage';
import LevelRoute from '../LevelRoute'
import TrainingsPage from '../../pages/TrainingsPage';
import SchedulesPage from '../../pages/SchedulesPage';
import TypeProductsPage from '../../pages/TypeProductsPage';
import BrandsPage from '../../pages/BrandsPage';

export default function FunctionsRouter(props) {
    const {nivel} = props;

    return (
        <>
            <BarraLateral nivel={nivel} />

            <Switch>
                <Route exact path='/functions' component={MyFunctionsPage}/>
                <LevelRoute exact path='/functions/pagos' component ={PaymentsPage}/>
                <LevelRoute exact path='/functions/productos' component ={ProductsPage}/>
                <LevelRoute exact path='/functions/ventas' component ={SalesPage}/>
                <LevelRoute exact path='/functions/users' component ={UserPage}/>
                <LevelRoute exact path='/functions/aumentos' component ={IncreasesPage}/>
                <LevelRoute exact path='/functions/horarios' component ={SalesPage}/>
                <LevelRoute exact path='/functions/capacitaciones' component ={TrainingsPage}/>
                <LevelRoute exact path='/functions/tproductos' component ={TypeProductsPage}/>
                <LevelRoute exact path='/functions/marcas' component ={BrandsPage}/>
                <LevelRoute exact path='/functions/reportes' component ={ReportPage}/>
                <LevelRoute exact path='/functions/notificaciones' component ={NotificationsPage}/>

                <Route path='*'>
                    <Redirect to='/page404'/>
                </Route>
            </Switch>
        </>
    )
}