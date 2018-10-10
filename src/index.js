import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';
import Layout from './components/page/Layout';

ReactDOM.render(
    <Layout>
        <AppRoutes />
    </Layout>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
