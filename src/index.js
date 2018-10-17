import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import * as serviceWorker from './serviceWorker'
import Layout from './components/page/Layout'

import { Provider } from 'react-redux'
import AppStore from './store/AppStore'

ReactDOM.render(
	<Provider store={AppStore}>
		<Layout />
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
