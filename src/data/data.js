import React, { Component } from 'react'
import Input from '../components/form/Input'
export default class Data extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			data: []
		}
	}

	async componentDidMount() {
		const response = await fetch('http://localhost:1337/questions')
		if (!response.ok) {
			console.log('error not found / cant connect')
			return
		}
		const data = await response.json()

		const filteredItems = data.map(data => {
			const { AnswerValues, questions } = data
			let completeQuestion = [...AnswerValues, ...questions]
			const result = [
				// create new array with objects
				...completeQuestion
					.reduce((item, { categorie, ...content }) => {
						// if the item category doesn't exist, add it
						item.has(categorie) ||
							item.set(categorie, {
								categorie,
								items: []
							})

						// if the item category exists, add the item to the items array
						item.get(categorie).items.push({
							...content,
							categorie
						})

						return item
					}, new Map())
					.values()
			]
			return result
		})

		this.setState({ loading: false, data: filteredItems })
	}

	render() {
		return <Input data={this.state.data} />
	}
}
