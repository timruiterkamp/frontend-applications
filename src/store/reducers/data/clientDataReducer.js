import { STORE_CLIENT_DATA } from '../../actions/ClientActions'

const initialState = {
	clients: []
}

export const clientDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_CLIENT_DATA:
			return {
				...state,
				clients: action.value
			}
		default:
			return state
	}
}
