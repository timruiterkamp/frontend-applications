export const TOGGLE_STORE_VALUE = 'TOGGLE_STORE_VALUE'
export const STORE_CLIENT_DATA = 'STORE_CLIENT_DATA'

// Dispatch functions
function changeStoreValue(bool) {
	return {
		type: TOGGLE_STORE_VALUE,
		value: bool
	}
}

function storeClientData(data) {
	return {
		type: STORE_CLIENT_DATA,
		value: data
	}
}

// Actions
export function toggleStoreValue(bool) {
	return dispatch => {
		dispatch(changeStoreValue(bool))
	}
}

export function getClients() {
	return async dispatch => {
		const data = await fetch(`http://localhost:1337/clients/`)
		const result = await data.json()
		dispatch(storeClientData(result))
	}
}

export function getSingleClientByID(id) {
	return async () => {
		const data = await fetch(`http://localhost:1337/clients/${id}`)
		const result = await data.json()
		return result
	}
}
