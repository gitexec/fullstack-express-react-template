import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import toastr from 'toastr';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import './assets/stylesheets/appStyles.scss';
import './assets/stylesheets/app.css';

import { Routes }  from './Routes';
import reducers from './reducers/reducers'

const initialState =  window.STATE_FROM_SERVER;
let store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  ,document.querySelector("#react-app")
);
