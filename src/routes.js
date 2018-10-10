import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './pages/App';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
            </Switch>
        </BrowserRouter>
    )
}