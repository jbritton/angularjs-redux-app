import angular from 'angular';

const routerHook = ($transitions, $ngRedux) => {
	$transitions.onStart({ to: 'app.**' }, (transition) => {
		let state = $ngRedux.getState();
		if(!angular.isObject(state.user) || !state.user.authenticated){
			return transition.router.stateService.target('login');
		}
	});
};

routerHook.$inject = ['$transitions', '$ngRedux'];

export default routerHook;
