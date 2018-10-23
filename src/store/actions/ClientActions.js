export const STORE_CLIENT_DATA = 'STORE_CLIENT_DATA'

// Dispatch functions
function storeClientData(data) {
	return {
		type: STORE_CLIENT_DATA,
		value: data
	}
}

// Actions
export function getClients() {
	return async dispatch => {
		const data = await fetch(`http://localhost:1337/cases/`)
		const result = await data.json()
		dispatch(storeClientData(result))
	}
}

export function getSingleClientByID(id) {
	return async () => {
		const data = await fetch(`http://localhost:1337/cases/${id}`)
		const result = await data.json()
		return result
	}
}
