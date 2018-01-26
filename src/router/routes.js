
//-------------------------------------------------------------------------------------------------
//  Routes Ids
//-------------------------------------------------------------------------------------------------

// public routes
export const PUBLIC_ROUTE = 'public';
export const LOGIN_ROUTE = 'public.login';

// application routes - require authentication
export const APP_ROUTE = 'app';
export const BLOG_ROUTE = 'app.blog';
export const HOME_ROUTE = 'app.home';



//-------------------------------------------------------------------------------------------------
//  Url Paths
//-------------------------------------------------------------------------------------------------

// public routes
export const PUBLIC_URL = '/public';
export const LOGIN_URL = '/login';

// application routes - require authentication
export const APP_URL = '/app';
export const BLOG_URL = '/blog';
export const HOME_URL = '/home';

export const DEFAULT_URL = APP_URL + HOME_URL;

//-------------------------------------------------------------------------------------------------
//  Application Routes
//-------------------------------------------------------------------------------------------------

export const appRoute = {
	abstract: true,
	name: APP_ROUTE,
	url: APP_URL,
	template: '<app></app>'
};

export const blogRoute = {
	name: BLOG_ROUTE,
	url: BLOG_URL,
	template: '<div>blog</div>',
	data: {
		roles: [ 'blog-author', 'blog-admin' ]
	}
};

export const homeRoute = {
	name: HOME_ROUTE,
	url: HOME_URL,
	template: '<home></home>'
};


export const publicRoute = {
	abstract: true,
	name: PUBLIC_ROUTE,
	url: PUBLIC_URL
};

export const loginRoute = {
	name: LOGIN_ROUTE,
	url: LOGIN_URL,
	template: '<login></login>'
};

export default [
	appRoute,
	blogRoute,
	homeRoute,
	publicRoute,
	loginRoute
];

