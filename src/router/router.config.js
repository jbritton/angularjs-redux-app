import routes, { DEFAULT_URL } from './routes';

/**
 * Configures the application router
 * @param $stateProvider
 * @param $urlRouterProvider
 */
const configureRouter = ($stateProvider, $urlRouterProvider) => {
	// register application routes
	routes.forEach((route) => {
		console.log(`register route: ${route.name} => ${route.url}`);
		$stateProvider.state(route);
	});

	// register a default url
	$urlRouterProvider.otherwise(DEFAULT_URL);
};

configureRouter.$inject = [
	'$stateProvider',
	'$urlRouterProvider'
];

export default configureRouter;