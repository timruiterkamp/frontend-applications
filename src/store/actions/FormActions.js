export const STORE_FORM_DATA = 'STORE_FORM_DATA'
export const STORE_PERCENTAGE_DATA = 'STORE_PERCENTAGE_DATA'

// Dispatch functions
function storeFormData(data) {
	return {
		type: STORE_FORM_DATA,
		value: data
	}
}
function storePercentage(data) {
	return {
		type: STORE_PERCENTAGE_DATA,
		value: data
	}
}

// Actions

export function storePercentageData(data) {
	return dispatch => {
		dispatch(storePercentage(data))
	}
}

export function getFormData() {
	return async dispatch => {
		const data = await fetch('http://localhost:1337/questions')
		const result = await data.json()
		const filteredResult = await filterData(result)
		dispatch(storeFormData(Object.values(filteredResult)))
		return Object.values(filteredResult)
	}
}

function filterData(data) {
	const filteredData = data.map(data => {
		const { AnswerValues, questions } = data
		let completeQuestion = [...AnswerValues, ...questions]
		const result = [
			// create new array with objects existing of category with items with same category
			...completeQuestion
				.reduce((item, { globalCategorie, categorie, ...content }) => {
					// if the item category doesn't exist, add it
					item.has(categorie.toLowerCase()) ||
						item.set(categorie.toLowerCase(), {
							categorie,
							globalCategorie,
							items: []
						})

					// if the item category exists, add the item to the items array
					item.get(categorie.toLowerCase()).items.push({
						...content,
						globalCategorie,
						categorie
					})

					return item
				}, new Map())
				.values()
		]
		return result
	})
	return filteredData
}
