import React, { Component } from 'react'
import AddUser from '../components/client/Add'
import { Link } from 'react-router-dom'
import { toggleStoreValue } from '../store/actions/FormActions'
import { connect } from 'react-redux'
// import { PrivateRoute } from '../components/PrivateRoute'

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
						<h2>Bekijk alle clienten</h2>
						<Link to={'/clienten'}>Naar overzicht</Link>
					</div>
				</section>

				<section className={'introduction-text'} />
			</main>
		)
	}
}

// Set app store as prop of app component
const mapStateToProps = state => ({
	storeData: state
})

// Actions to connect to app component
const actions = {
	toggleStoreValue
}

export default connect(
	mapStateToProps,
	actions
)(App)
