import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import Clients from './pages/Clients';
import {Client} from './pages/Client';


export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/clienten/:id' component={Client}/>
                <Route path='/clienten' component={Clients}/>
            </Switch>
        </BrowserRouter>
    )
}