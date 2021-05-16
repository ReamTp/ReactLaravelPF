import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BarraLateral from '../../components/BarraLateral'
import MyFunctions from '../../pages/MyFunctions'
import NotificationsPage from '../../pages/NotificationsPage/NotificationsPage';
import PaymentsPage from '../../pages/PaymentsPage';
import ProductsPage from '../../pages/ProductsPage';
import ReportPage from '../../pages/ReportPage';
import SalesPage from '../../pages/SalesPage'
import LevelRoute from '../LevelRoute'

export default function FunctionsRouter(props) {
    const {nivel} = props;
    
    return (
        <>
            <BarraLateral nivel={nivel} />
            <Switch>
                <Route exact path='/functions' component={MyFunctions}/>
                <LevelRoute exact path='/functions/gerentegeneral/pagos' component ={PaymentsPage}/>
                <LevelRoute exact path='/functions/gerentegeneral/productos' component ={ProductsPage}/>
                <LevelRoute exact path='/functions/gerentegeneral/ventas' component ={SalesPage}/>
                <LevelRoute exact path='/functions/gerentegeneral/reportes' component ={ReportPage}/>
                
                <LevelRoute exact path='/functions/gdAdminFinan/pagos' component ={nivel}/>
                <LevelRoute exact path='/functions/gdAdminFinan/productos' component ={nivel}/>
                <LevelRoute exact path='/functions/gdAdminFinan/ventas' component ={SalesPage}/>
                <LevelRoute exact path='/functions/gdAdminFinan/informes' component ={nivel}/>

                <LevelRoute exact path='/functions/gdchumano/pagos' component ={nivel}/>
                <LevelRoute exact path='/functions/gdchumano/aumentos' component ={nivel}/>
                <LevelRoute exact path='/functions/gdchumano/productos' component ={nivel}/>
                <LevelRoute exact path='/functions/gdchumano/ventas' component ={SalesPage}/>
                
                <LevelRoute exact path='/functions/echuman/pagos' component ={nivel}/>
                <LevelRoute exact path='/functions/echuman/productos' component ={nivel}/>
                <LevelRoute exact path='/functions/echuman/ventas' component ={SalesPage}/>

                <LevelRoute exact path='/functions/eadfinanzas/productos' component ={nivel}/>
                <LevelRoute exact path='/functions/eadfinanzas/pagos' component ={nivel}/>
                <LevelRoute exact path='/functions/eadfinanzas/ventas' component ={SalesPage}/>

                <LevelRoute exact path='/functions/notificaciones' component ={NotificationsPage}/>
                
                <Route path='*'>
                    <Redirect to='/page404'/>
                </Route>
            </Switch>
        </>
    )
}
