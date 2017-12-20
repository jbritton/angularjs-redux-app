
const configureRouter = ($locationProvider, $stateProvider, $urlRouterProvider) => {

	$stateProvider
		.state('app', {
			url: '',
			abstract: true,
			template: '<app></app>'
		})

		// Dashboard page to contain our goats list page
		.state('app.home', {
			url: '/home',
			template: '<home></home>'
		});

	$urlRouterProvider.otherwise('/home');

};

configureRouter.$inject = [
	'$locationProvider',
	'$stateProvider',
	'$urlRouterProvider'
];

export default configureRouter;