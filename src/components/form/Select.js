import React, { Fragment } from 'react'

const saveChoices = e => {
	const gewicht = e.target.value
	const answer = e.target
		.querySelector(':checked')
		.getAttribute('data-answer-one')
	const category = e.target.querySelector(':checked').getAttribute('data-cat')
	const selectedChoices = {
		answer: answer,
		category: category,
		gewicht: gewicht
	}

	// Has to be changed to a store
	// set the items by category in localstorage
	localStorage.setItem(category, JSON.stringify(selectedChoices))
}

const Select = props => {
	return (
		<fieldset>
			{props.options ? (
				<Fragment key={props.options.Name}>
					<label>{props.options.categorie}</label>
					<select onChange={saveChoices}>
						<option disabled selected>
							{' '}
							-- select an option --{' '}
						</option>
						{props.options.items.map((item, index) => (
							<Fragment key={index}>
								{localStorage.getItem(item.categorie) && (
									<option key={item + index}>
										{
											JSON.parse(
												localStorage.getItem(
													item.categorie
												)
											).answer
										}
									</option>
								)}
								<option
									key={index}
									value={item.gewicht || item.Gewicht}
									data-answer={item.Name}
									data-cat={item.categorie}
								>
									{item.Name || item.name}
								</option>
							</Fragment>
						))}
						<option value={0} data-answer="onbekend">
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

export default Select
