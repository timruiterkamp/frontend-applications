import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './pages/App'
import Clients from './pages/Clients'
import Client from './pages/Client'
import { NotFound } from './pages/404'
import Header from './components/page/Header'

export default class RouterNav extends Component {
	data = [
		{
			id: 1,
			name: 'Home',
			path: '/',
			file: App,
			show: true
		},
		{
			id: 2,
			name: 'Clienten',
			path: '/clienten',
			file: Clients,
			show: true
		},
		{
			id: 3,
			name: 'Client',
			path: '/clienten/:id',
			file: Client,
			show: false
		},
		{
			id: 4,
			name: 'NotFound',
			path: '*',
			file: NotFound,
			show: false
		}
	]

	render() {
		return (
			<BrowserRouter>
				<>
					<Header
						link={this.data.filter(page => {
							return page.show === true
						})}
					/>
					<Switch>
						{this.data.map(page => (
							<Route
								key={page.id}
								exact
								path={page.path}
								component={page.file}
							/>
						))}
					</Switch>
				</>
			</BrowserRouter>
		)
	}
}
