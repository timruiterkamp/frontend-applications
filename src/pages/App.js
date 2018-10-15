import React, { Component } from 'react'
import AddUser from '../components/client/Add'
import { Link } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<main>
				<h2>Hey!</h2>
				<section className={'introduction-menu'}>
					<AddUser />
					<div>
						<h2>Bekijk alle clienten</h2>
						<Link to={'/clienten'}>Naar overzicht</Link>
					</div>
				</section>

				<section className={'introduction-text'} />
			</main>
		)
	}
}

export default App
