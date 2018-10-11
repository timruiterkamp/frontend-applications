import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import Clients from './pages/Clients';
import {Client} from './pages/Client';
import {NotFound} from './pages/404';


export default () => {  
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/clienten/:id' component={Client}/>
                <Route path='/clienten' component={Clients}/>
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}