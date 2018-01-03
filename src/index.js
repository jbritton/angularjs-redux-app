import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import angular from 'angular';
import app from './app.js';

// bootstrap the application
const rootElement = document.getElementById('root');
angular.bootstrap(rootElement, [ app.name ]);

