import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BarraLateral from '../../components/BarraLateral'
import MyFunctionsPage from '../../pages/MyFunctionsPage';
import NotificationsPage from '../../pages/NotificationsPage/NotificationsPage';
import PaymentsPage from '../../pages/PaymentsPage';
import ProductsPage from '../../pages/ProductsPage';
import ReportPage from '../../pages/ReportPage';
import SalesPage from '../../pages/SalesPage'
import UserPage from '../../pages/UserPage/UserPage';
import LevelRoute from '../LevelRoute'

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
                
                <LevelRoute exact path='/functions/gdAdminFinan/pagos' component ={nivel}/>
                <LevelRoute exact path='/functions/gdAdminFinan/productos' component ={nivel}/>
                <LevelRoute exact path='/functions/gdAdminFinan/ventas' component ={SalesPage}/>
                <LevelRoute exact path='/functions/gdAdminFinan/reportes' component ={nivel}/>

                <LevelRoute exact path='/functions/gdchumano/users' component ={UserPage}/>
                <LevelRoute exact path='/functions/gdchumano/pagos' component ={nivel}/>
                <LevelRoute exact path='/functions/gdchumano/aumentos' component ={nivel}/>
                <LevelRoute exact path='/functions/gdchumano/horarios' component ={SalesPage}/>
                <LevelRoute exact path='/functions/gdchumano/capacitaciones' component ={nivel}/>
                
                <LevelRoute exact path='/functions/echuman/users' component ={UserPage}/>
                <LevelRoute exact path='/functions/echuman/pagos' component ={nivel}/>
                <LevelRoute exact path='/functions/echuman/horarios' component ={nivel}/>
                <LevelRoute exact path='/functions/echuman/capacitaciones' component ={nivel}/>

                <LevelRoute exact path='/functions/eadfinanzas/productos' component ={nivel}/>
                <LevelRoute exact path='/functions/eadfinanzas/tproductos' component ={nivel}/>
                <LevelRoute exact path='/functions/eadfinanzas/marcas' component ={nivel}/>

                <LevelRoute exact path='/functions/notificaciones' component ={NotificationsPage}/>
                
                <Route path='*'>
                    <Redirect to='/page404'/>
                </Route>
            </Switch>
        </>
    )
}
