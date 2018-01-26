import angular from 'angular';
import uiRouter     from '@uirouter/angularjs';
import ngRedux      from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';
import UserActions from './actions/user.actions';
import AppComponent from './components/app.component';
import HomeComponent from './components/home.component';
import LoginComponent from './components/login.component';
import configureRouter from './router/router.config';
import routerHook from './router/router.hook';
import configureStore from './store/store.config';
import NavBarComponent from './components/navbar.component';

// configure application module - declare module dependencies, register components
const app = angular.module('app', [ uiRouter, ngRedux, ngReduxUiRouter ])
	.config(configureStore)
	.config(configureRouter)
	.run(routerHook)
	.service('UserActions', UserActions)
	.component('app', AppComponent)
	.component('login', LoginComponent)
	.component('home', HomeComponent)
	.component('navbar', NavBarComponent);

export default app;

