import React, { Component } from 'react'
import AddUser from '../components/client/Add'
import { Link } from 'react-router-dom'

class App extends Component {
	componentDidMount() {
		document.title = 'Kind veilig thuis'
		console.log(this.props)
	}

	render() {
		return (
			<main>
				<h2>Hey!</h2>
				<section className={'introduction-menu'}>
					<AddUser />
					<div>
						<h2>Bekijk alle kinderen</h2>
						<Link to={'/clienten'}>Naar overzicht</Link>
					</div>
				</section>

				<section className={'introduction-text'} />
			</main>
		)
	}
}

export default App
