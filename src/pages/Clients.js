import React, { Component } from 'react'
import ClientOverview from '../components/client/Overview'
import { getClients } from '../store/actions/ClientActions'
import { connect } from 'react-redux'

class Clients extends Component {
	componentWillMount() {
		this.props.getClients()
	}

	render() {
		return (
			<main>
				<h2>Hey! gebruikers</h2>
				<ClientOverview clients={this.props.clientData} />
			</main>
		)
	}
}

// Set app store as prop of app component
const mapStateToProps = state => ({
	clientData: state.formData.clients
})

// Actions to connect to app component
const actions = {
	getClients
}

export default connect(
	mapStateToProps,
	actions
)(Clients)
