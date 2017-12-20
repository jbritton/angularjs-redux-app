import angular from 'angular';
import './index.scss';
import app from './app.js';

// bootstrap the application
const rootElement = document.getElementById('root');
angular.bootstrap(rootElement, [ app.name ]);