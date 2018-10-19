import React, { Component } from 'react'
import { getFormData } from '../../store/actions/FormActions'
import { connect } from 'react-redux'
// import Input from './Input'
import Select from './Select'

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formData: null
		}
	}

	componentDidMount() {
		this.props.getFormData().then(result =>
			this.setState({
				formData: result
			})
		)
	}

	render() {
		const { formData } = this.state
		// function powered by @wooorm and @denniswegereef
		// const uniqueCategories = [
		// 	formData &&
		// 		formData.map(category =>
		// 			category
		// 				.map(item => item.globalCategorie)
		// 				.filter(
		// 					(globalCategorie, index, all) =>
		// 						all.indexOf(globalCategorie) == index
		// 				)
		// 		)
		// ]
		// console.log(uniqueCategories)

		const selectInputs =
			formData &&
			formData.map(item =>
				item.map(item => <Select key={item.categorie} options={item} />)
			)

		return <form>{selectInputs}</form>
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
