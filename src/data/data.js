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
			let answerCategories = AnswerValues.map(cat => {
				return cat.categorie !== undefined ? cat : null
			})
			let questionCategories = questions.map(question => {
				return question.categorie !== undefined ? question : null
			})
			let completeQuestion = [...answerCategories, ...questionCategories]
			// todo connect cats
			return completeQuestion
		})

		// .filter(data => {
		// 	data.map(items => {
		// 		const newData = []
		// 		items.categorie == items.category
		// 			? newData.push(items)
		// 			: console.log('helaas', items)

		// 		console.log(newData)
		// 	})
		// })

		this.setState({ loading: false, data })
	}

	render() {
		return <div />
	}
}
