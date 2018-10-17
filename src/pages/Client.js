import React, { Component } from 'react'
import { getSingleClientByID } from '../store/actions/FormActions'
import { connect } from 'react-redux'

class Client extends Component {
	constructor(props) {
		super(props)
		this.state = { client: {} }
	}

	componentDidMount() {
		const { id } = this.props.match.params
		const client = this.props.getSingleClientByID(id)
		client.then(result =>
			this.setState(state => {
				return { client: result }
			})
		)
	}

	render() {
		return (
			<>
				{this.state.client ? (
					<h2>Client: {this.state.client.name}</h2>
				) : (
					<h2>Loading</h2>
				)}
			</>
		)
	}
}

// Actions to connect to app component
const actions = {
	getSingleClientByID
}

export default connect(
	null,
	actions
)(Client)
