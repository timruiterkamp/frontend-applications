import React, { Component } from 'react'
import AddUser from '../components/client/Add'
import { Link } from 'react-router-dom'
import { Card } from '../components/card/Card'

class App extends Component {
	componentDidMount() {
		document.title = 'Kind veilig thuis'
	}

	render() {
		return (
			<section className={'introduction'}>
				<h2>Welkom bij Kind veilig thuis</h2>
				<section className={'introduction-menu'}>
					<AddUser />
					<Card type={'overview'}>
						<h2>Bekijk alle cases</h2>
						<Link to={'/clienten'}>Naar overzicht</Link>
					</Card>
				</section>

				<section className={'introduction-text'} />
			</section>
		)
	}
}

export default App
