import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import BarraMenu from '../../components/BarraMenu';
import HomePage from '../../pages/HomePage';
import MyFunctions from '../../pages/MyFunctions';
import PrivateRoute from '../PrivateRoute';
import UserRoute from '../UserRoute/UserRoute';
import './PagesRouter.scss';

export default function PagesRouter() {
    return (
        <>
            <BarraMenu />
            <Switch>
                <PrivateRoute exact path='/' component={HomePage} />
                <UserRoute exact path='/myprofile' component={MyFunctions} />
                <UserRoute exact path='/settings' component={MyFunctions} />
                <Route exact path='*'>
                    <Redirect to='/page404'/>
                </Route>
            </Switch>
        </>
    )
}
