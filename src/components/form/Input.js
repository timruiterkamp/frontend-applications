// import React, { Component, Fragment } from 'react'

// class Input extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = { answerValues: {} }
// 		this.selectRef = React.createRef()
// 	}

// 	render() {
// 		// save choices that are being made in the form
// 		const saveChoices = e => {
// 			const gewicht = e.target.value
// 			const answer = e.target
// 				.querySelector(':checked')
// 				.getAttribute('data-answer-one')
// 			const category = e.target
// 				.querySelector(':checked')
// 				.getAttribute('data-cat')
// 			const selectedChoices = {
// 				answer: answer,
// 				category: category,
// 				gewicht: gewicht
// 			}

// 			// Has to be changed to a store
// 			// set the items by category in localstorage
// 			localStorage.setItem(category, JSON.stringify(selectedChoices))
// 		}
// 		return (
// 			<>
// 				{this.props.data ? (
// 					<>
// 						{Object.values(this.props.data).map(object =>
// 							object.map((category, index) => {
// 								return (
// 									<fieldset key={index}>
// 										<label>{category.categorie}</label>
// 										<select
// 											ref={this.selectRef}
// 											onChange={saveChoices}
// 										>
// 											<option disabled selected>
// 												{' '}
// 												-- select an option --{' '}
// 											</option>
// 											{category.items.map(
// 												(item, index) => (
// 													<Fragment key={index}>
// 														{localStorage.getItem(
// 															item.categorie
// 														) && (
// 															<option
// 																key={
// 																	item + index
// 																}
// 															>
// 																{
// 																	JSON.parse(
// 																		localStorage.getItem(
// 																			item.categorie
// 																		)
// 																	).answer
// 																}
// 															</option>
// 														)}
// 														<option
// 															key={index}
// 															value={
// 																item.gewicht ||
// 																item.Gewicht
// 															}
// 															data-answer={
// 																item.Name
// 															}
// 															data-cat={
// 																item.categorie
// 															}
// 														>
// 															{item.Name ||
// 																item.name}
// 														</option>
// 													</Fragment>
// 												)
// 											)}
// 											<option
// 												value={0}
// 												data-answer="onbekend"
// 											>
// 												Niet bekend
// 											</option>
// 										</select>
// 									</fieldset>
// 								)
// 							})
// 						)}
// 					</>
// 				) : (
// 					<h2>Loading</h2>
// 				)}
// 			</>
// 		)
// 	}
// }

// export default Input
