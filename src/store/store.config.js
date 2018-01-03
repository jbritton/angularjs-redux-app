import { RootReducer } from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { ngUiRouterMiddleware } from 'redux-ui-router';

// configure middleware for redux store
const logger = createLogger();
const middleware = [
	thunk, // async support
	logger, // logging support
	'ngUiRouterMiddleware' // injected - ui router support
];

// configure redux store for application
const configureStore = ($ngReduxProvider) => {
	// create redux store with reducers and middleware
	$ngReduxProvider.createStoreWith(RootReducer, middleware);
};

// inject dependencies
configureStore.$inject = ['$ngReduxProvider'];

export default configureStore;
