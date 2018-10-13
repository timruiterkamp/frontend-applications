import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ClientOverview extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			clients: []
		}
	}

	async componentDidMount() {
		const response = await fetch('http://localhost:1337/clients')
		if (!response.ok) {
			console.log('error not found / cant connect')
			return
		}
		const clients = await response.json()
		this.setState({ loading: false, clients })
	}

	render() {
		if (!this.state.loading) {
			return (
				<>
					<h2>Aantal clienten: {this.state.clients.length}</h2>
					<section className={'clientOverview'}>
						{this.state.clients.map((client, index) => {
							return (
								<article
									className="clientOverview__client"
									key={index}
								>
									<div className="clientOverview__clientInfomation">
										<Link to={`/clienten/${client.id}`}>
											<h3>{client.name}</h3>
										</Link>
									</div>
								</article>

								// TODO:
								// add update button
								// add question support
							)
						})}
					</section>
				</>
			)
		}
		return <h2>Loading</h2>
	}
}
