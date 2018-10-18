import React from 'react'

const Input = props => {
	const { data } = props

	const saveChoices = e => {
		const gewicht = e.target.value
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

		// bouw dit om naar een store
		localStorage.setItem(category, JSON.stringify(selectedChoices))
	}

	return (
		<>
			{data ? (
				<>
					{Object.values(data).map(object =>
						object.map((category, index) => (
							<>
								<h2>{category.categorie}</h2>
								<select key={index} onChange={saveChoices}>
									{category.items.map((item, index) => (
										<>
											{localStorage.getItem(
												item.categorie
											) && (
												<option>
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
												value={
													item.gewicht || item.Gewicht
												}
												data-answer={item.Name}
												data-cat={item.categorie}
											>
												{item.Name || item.name}
											</option>
										</>
									))}
									<option value={0} data-answer="onbekend">
										Niet bekend
									</option>
								</select>
							</>
						))
					)}
				</>
			) : (
				<h2>Loading</h2>
			)}
		</>
	)
}

export default Input
