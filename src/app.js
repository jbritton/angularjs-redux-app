import angular from 'angular';
import uiRouter     from 'angular-ui-router';
import ngRedux      from 'ng-redux';
import AppComponent from './components/app.component';
import HomeComponent from './components/home.component';
import configureRouter from './routes/router.config';
import configureStore from './store/store.config';

const app = angular.module('app', [ uiRouter, ngRedux ])
	.config(configureRouter)
	.config(configureStore)
	.component('app', AppComponent)
	.component('home', HomeComponent);


export default app;

