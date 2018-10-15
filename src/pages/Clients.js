import React, { Component } from 'react'
import ClientOverview from '../components/client/Overview'
// import { Link, Route } from 'react-router-dom'

export default class Clients extends Component {
	constructor(props) {
		super(props)
		this.id = { id: null }
	}

	render() {
		return (
			<main>
				<h2>Hey! gebruikers</h2>
				<ClientOverview />
			</main>
		)
	}
}
