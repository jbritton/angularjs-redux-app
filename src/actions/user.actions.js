import { USER } from '../constants/user';
import { ROUTES } from '../constants/routes';
import { stateGo, stateReload, stateTransitionTo } from 'redux-ui-router';

function UserActions($http){

	function loginSuccess(user){
		return {
			type: USER.LOGIN,
			payload: user
		};
	}

	function loginError(error){
		return {
			type: USER.LOGIN_ERROR,
			payload: error
		};
	}

	function login(username, password){
		console.log('login: ', username, password);

		const url = 'http://jsonplaceholder.typicode.com/users/1';

		return dispatch => {
			$http.get(url)
				.then(({ data }) => {
					// update user model
					dispatch(loginSuccess(data));
					// route to home page
					dispatch(stateGo(ROUTES.HOME));
				})
				.catch(error => dispatch(loginError(error)));
		};
	}

	function logout(username){
		return {
			type: USER.LOGOUT,
			payload: { username }
		};
	}

	function register(username, password){
		return {
			type: USER.REGISTER,
			payload: { username, password }
		};
	}

	return {
		login,
		logout,
		register
	};
}

UserActions.$inject = ['$http'];

export default UserActions;

