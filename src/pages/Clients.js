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
			<section>
				<h2>Overzicht van alle cases</h2>
				<ClientOverview clients={this.props.clientData} />
			</section>
		)
	}
}

// Set app store as prop of app component
const mapStateToProps = state => ({
	clientData: state.clientData.clients
})

// Actions to connect to app component
const actions = {
	getClients
}

export default connect(
	mapStateToProps,
	actions
)(Clients)
