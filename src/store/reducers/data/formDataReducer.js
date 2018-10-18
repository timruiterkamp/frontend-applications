import { STORE_FORM_DATA } from '../../actions/FormActions'

const initialState = {
	storeValue: false,
	formData: []
}

export const formDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_FORM_DATA:
			return {
				...state,
				formData: action.value
			}
		default:
			return state
	}
}
