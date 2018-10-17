import {
	TOGGLE_STORE_VALUE,
	STORE_CLIENT_DATA
} from '../../actions/ClientActions'

const initialState = {
	storeValue: false,
	clients: []
}

export const formDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_STORE_VALUE:
			return {
				...state,
				storeValue: action.value
			}
		case STORE_CLIENT_DATA:
			return {
				...state,
				clients: action.value
			}
		default:
			return state
	}
}
