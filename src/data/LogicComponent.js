import React, { Component } from 'react'

export default class LogicComponent extends Component {
	constructor(props) {
		super(props)

		console.log(props)
	}

	render() {
		return (
			<h2>
				{console.log(this.props)} {this.props.category}
			</h2>
		)
	}
}
