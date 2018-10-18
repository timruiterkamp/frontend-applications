import React, { Component } from 'react'
import { getFormData } from '../../store/actions/FormActions'
import { connect } from 'react-redux'
import Input from './Input'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			formData: null
		}
	}
	componentWillMount() {
		this.props
			.getFormData()
			.then(result =>
				this.setState({
					formData: result
				})
			)
			.then(log => console.log(this.state.formData))
	}

	render() {
		return <Input data={this.state.formData} />
	}
}

// Set app store as prop of app component
const mapStateToProps = state => ({
	formData: state.formData.formData
})

// Actions to connect to app component
const actions = {
	getFormData
}

export default connect(
	mapStateToProps,
	actions
)(Form)
