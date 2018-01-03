import appRoute from './app.route';
import homeRoute from './home.route';
import blogRoute from './blog.route';
import loginRoute from './login.route';

const configureRouter = ($stateProvider, $urlRouterProvider) => {
	$stateProvider
		.state(appRoute)
		.state(loginRoute)
		.state(homeRoute)
		.state(blogRoute);


	$urlRouterProvider.otherwise('/home');
};

configureRouter.$inject = [
	'$stateProvider',
	'$urlRouterProvider'
];

export default configureRouter;