import {
	STORE_FORM_DATA,
	STORE_PERCENTAGE_DATA
} from '../../actions/FormActions'

const initialState = {
	formData: [],
	percentage: []
}

export const formDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_FORM_DATA:
			return {
				...state,
				formData: action.value
			}
		case STORE_PERCENTAGE_DATA:
			let index = state.percentage.findIndex(
				item => item.category === action.value.category
			)

			if (index !== -1) {
				console.log('state.percentage', state.percentage[index])
				state.percentage[index] = action.value
			}

			return {
				...state,
				percentage: state.percentage.concat(action.value)
			}

		default:
			return state
	}
}
