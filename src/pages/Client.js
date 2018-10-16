import React, { Component } from 'react'
import Input from '../components/form/Input'
import Questions from '../data/data'
export default class Client extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			client: {}
		}
	}

	async componentDidMount() {
		const response = await fetch(
			`http://localhost:1337/clients/${this.props.match.params.id}`
		)
		const data = await response.json()
		this.setState({
			loading: false,
			client: data
		})
	}

	render() {
		if (!this.state.loading) {
			return (
				<div className="client">
					<div className="client__information">
						<h2 className="client-title">
							{this.state.client.name}
						</h2>
					</div>
					<div className="client__description">
						{this.state.client.description}
					</div>
					<Questions />
					<Input />
				</div>
			)
		}

		return <h2>Loading...</h2>
	}
}
