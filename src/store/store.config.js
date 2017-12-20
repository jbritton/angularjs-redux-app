import { RootReducer } from './reducers';

const configureStore = ($ngReduxProvider) => {
	$ngReduxProvider.createStoreWith(RootReducer);
};

configureStore.$inject = ['$ngReduxProvider'];

export default configureStore;
