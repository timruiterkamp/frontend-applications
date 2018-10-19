import React, { Fragment } from 'react'
import { storePercentageData } from '../../store/actions/FormActions'
import { connect } from 'react-redux'

const Select = props => {
	const saveChoices = e => {
		const gewicht = e.target.value
		// rebuild this to good react functions
		const answer = e.target
			.querySelector(':checked')
			.getAttribute('data-answer')
		const category = e.target
			.querySelector(':checked')
			.getAttribute('data-cat')
		const selectedChoices = {
			answer: answer,
			category: category,
			gewicht: gewicht
		}

		// Has to be changed to a store
		// set the items by category in localstorage
		const gewichtValue = Number(selectedChoices.gewicht.replace(/,/g, '.'))
		props.storePercentageData({
			gewicht: gewichtValue,
			category: selectedChoices.category
		})
		localStorage.setItem(category, JSON.stringify(selectedChoices))
	}

	return (
		<fieldset
			className={props.options.globalCategorie.replace(/[^A-Z0-9]/gi, '')}
		>
			{props.options ? (
				<Fragment key={props.options.Name}>
					<label>{props.options.categorie}</label>
					<select
						onChange={saveChoices}
						defaultValue={'-- select an option --'}
					>
						{localStorage.getItem(props.options.categorie) ? (
							<option>
								{
									JSON.parse(
										localStorage.getItem(
											props.options.categorie
										)
									).answer
								}
							</option>
						) : (
							<option disabled> -- select an option -- </option>
						)}

						{props.options.items.map((item, index) => (
							<Fragment key={index}>
								<option
									key={index}
									value={item.gewicht || item.Gewicht}
									data-answer={item.Name || item.name}
									data-cat={item.categorie}
								>
									{item.Name || item.name}
								</option>
							</Fragment>
						))}
						<option
							value={0}
							data-answer="onbekend"
							data-cat={props.options.categorie}
						>
							Niet bekend
						</option>
					</select>
				</Fragment>
			) : (
				<h2>Loading</h2>
			)}
		</fieldset>
	)
}

// Actions to connect to app component
const actions = {
	storePercentageData
}

export default connect(
	null,
	actions
)(Select)
