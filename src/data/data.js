import React, { Component } from 'react'

export default class Data extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			questions: [],
			answers: []
		}
	}

	async componentDidMount() {
		const response = await fetch('http://localhost:1337/questions')
		if (!response.ok) {
			console.log('error not found / cant connect')
			return
		}
		const data = await response.json()

		data.map(data => {
			const { AnswerValues, questions } = data
			let completeQuestion = [...AnswerValues, ...questions]
			const result = [
				...completeQuestion
					.reduce((item, { categorie, ...content }) => {
						item.has(categorie) ||
							item.set(categorie, {
								categorie,
								items: []
							})

						item.get(categorie).items.push({
							...content,
							categorie
						})

						return item
					}, new Map())
					.values()
			]

			console.log(result)
			return result
		})

		this.setState({ loading: false, data })
	}

	render() {
		return <div />
	}
}
