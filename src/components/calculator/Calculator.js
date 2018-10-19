import React, { Component } from 'react'
import { storePercentageData } from '../../store/actions/FormActions'
import { connect } from 'react-redux'
class Calculator extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		// let getValuesOutOfLocalStorage = localStorage.getItem(props.options)
		console.log(this.props)
		let calculateValues = this.props.formData
			.map(item => item.gewicht)
			.reduce((a, b) => a + b, 0)

		const formulate = Number(
			(1 / (1 + Math.exp(-1 * (-8.57219 + calculateValues)))) * 100 * 10
		)
		console.log(formulate)

		return <div>{`${formulate.toFixed(2)}%`}</div>
	}
}

// Set app store as prop of app component
const mapStateToProps = state => ({
	formData: state.formData.percentage
})

// Actions to connect to app component
const actions = {
	storePercentageData
}

export default connect(
	mapStateToProps,
	actions
)(Calculator)
