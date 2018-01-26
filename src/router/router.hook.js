import angular from 'angular';
import { LOGIN_ROUTE } from '../router/routes';

const routerHook = ($transitions, $ngRedux) => {
	$transitions.onStart({ to: 'app.**' }, (transition) => {
		const { user } = $ngRedux.getState();
		if(!angular.isObject(user) || !user.authenticated){
			return transition.router.stateService.target(LOGIN_ROUTE);
		}
	});
};

routerHook.$inject = ['$transitions', '$ngRedux'];

export default routerHook;
