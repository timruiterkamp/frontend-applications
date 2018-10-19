import React, { Component } from 'react'
import { getSingleClientByID } from '../store/actions/ClientActions'
import { connect } from 'react-redux'
import { Profile } from '../components/client/profile'
import Form from '../components/form/Form'
import Calculation from '../components/calculator/Calculator'

let lastScrollY = 0
class Client extends Component {
	constructor(props) {
		super(props)
		this.state = { client: {}, scrolling: false }
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
		const { id } = this.props.match.params
		const client = this.props.getSingleClientByID(id)
		client.then(result =>
			this.setState(state => {
				return { client: result }
			})
		)
	}

	handleScroll(event) {
		// console.log(event.body.srcElement.scrollTop)
		// const calc = document.querySelector('.profile-calc')
		// console.log(event.srcElement.body.calc.scrollTop)
	}

	render() {
		return (
			<>
				{this.state.client ? (
					<>
						<Profile
							onScroll={this.handleScroll}
							name={this.state.client.name}
							age={this.state.client.age}
							description={this.state.client.notes}
							calc={
								<Calculation className={'calculation-prof'} />
							}
						/>

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
