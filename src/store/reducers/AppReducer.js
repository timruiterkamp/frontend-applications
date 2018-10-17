import { combineReducers } from 'redux'
import { formDataReducer } from './data/clientDataReducer'
import { UIReducer } from './UI/UIReducer'

// Combine all reducers
export default combineReducers({
	formData: formDataReducer
})
