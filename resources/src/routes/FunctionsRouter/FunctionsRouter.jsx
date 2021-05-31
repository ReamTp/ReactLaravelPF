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
                <LevelRoute exact path='/functions/gerentegeneral/pagos' component ={PaymentsPage}/>
                <LevelRoute exact path='/functions/gerentegeneral/productos' component ={ProductsPage}/>
                <LevelRoute exact path='/functions/gerentegeneral/ventas' component ={SalesPage}/>
                <LevelRoute exact path='/functions/gerentegeneral/reportes' component ={ReportPage}/>

                <LevelRoute exact path='/functions/gdAdminFinan/pagos' component ={PaymentsPage}/>
                <LevelRoute exact path='/functions/gdAdminFinan/productos' component ={ProductsPage}/>
                <LevelRoute exact path='/functions/gdAdminFinan/ventas' component ={SalesPage}/>
                <LevelRoute exact path='/functions/gdAdminFinan/reportes' component ={ReportPage}/>

                <LevelRoute exact path='/functions/gdchumano/users' component ={UserPage}/>
                <LevelRoute exact path='/functions/gdchumano/pagos' component ={PaymentsPage}/>
                <LevelRoute exact path='/functions/gdchumano/aumentos' component ={IncreasesPage}/>
                <LevelRoute exact path='/functions/gdchumano/horarios' component ={SalesPage}/>
                <LevelRoute exact path='/functions/gdchumano/capacitaciones' component ={TrainingsPage}/>

                <LevelRoute exact path='/functions/echuman/users' component ={UserPage}/>
                <LevelRoute exact path='/functions/echuman/pagos' component ={PaymentsPage}/>
                <LevelRoute exact path='/functions/echuman/horarios' component ={SchedulesPage}/>
                <LevelRoute exact path='/functions/echuman/capacitaciones' component ={TrainingsPage}/>

                <LevelRoute exact path='/functions/eadfinanzas/productos' component ={ProductsPage}/>
                <LevelRoute exact path='/functions/eadfinanzas/tproductos' component ={TypeProductsPage}/>
                <LevelRoute exact path='/functions/eadfinanzas/marcas' component ={BrandsPage}/>

                <LevelRoute exact path='/functions/notificaciones' component ={NotificationsPage}/>

                <Route path='*'>
                    <Redirect to='/page404'/>
                </Route>
            </Switch>
        </>
    )
}