import React, { Component } from 'react'
import { getSingleClientByID } from '../store/actions/ClientActions'
import { connect } from 'react-redux'
import { Profile } from '../components/client/profile'
import Form from '../components/form/Form'
import Calculation from '../components/calculator/Calculator'

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
					<>
						<Profile
							name={this.state.client.name}
							age={this.state.client.age}
						/>
						<Calculation />
						<Form />
					</>
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
