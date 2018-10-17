import { createStore, applyMiddleware, compose } from 'redux'
import AppReducer from './reducers/AppReducer'
import thunk from 'redux-thunk'

// Set Thunk as middleware
// Thunk allows for async action dispatches
const middleware = [thunk]

// Create main app store
const appStore = createStore(
	AppReducer,
	compose(
		applyMiddleware(...middleware),
		// Apply Redux Devtools
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default appStore
