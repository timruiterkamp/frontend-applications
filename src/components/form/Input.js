import React, { Component } from 'react'

class Input extends Component {
	constructor(props) {
		super(props)
		this.state = { data: null, loading: true }
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		// check if data isn't the same as previous
		if (nextProps.data !== prevState.data) {
			return {
				data: nextProps.data,
				loading: false
			}
		}
		// No state update necessary
		return null
	}

	render() {
		return <h2>{console.log(this.state.data)}</h2>
	}
}

export default Input
