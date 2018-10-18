import { combineReducers } from 'redux'
import { formDataReducer } from './data/formDataReducer'
import { clientDataReducer } from './data/clientDataReducer'
// import { UIReducer } from './UI/UIReducer'

// Combine all reducers
export default combineReducers({
	formData: formDataReducer,
	clientData: clientDataReducer
})
