import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import toastr from 'toastr';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App.js';
import './assets/stylesheets/appStyles.scss';
import './assets/stylesheets/app.css';

ReactDOM.render(<App />, document.getElementById('root'));
