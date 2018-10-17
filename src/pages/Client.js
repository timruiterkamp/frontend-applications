import React from 'react'
import { getSingleClientByID } from '../store/actions/FormActions'
import { connect } from 'react-redux'
import Input from '../components/form/Input'
import Questions from '../data/data'

const Client = props => {
	const { id } = props.match.params
	const client = props.getSingleClientByID(id)
	console.log(client)
	return <div>{client.name}</div>
}

// Actions to connect to app component
const actions = {
	getSingleClientByID
}

export default connect(
	null,
	actions
)(Client)
