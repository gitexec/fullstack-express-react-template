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

import reducers from './reducers/reducers'
let Routes = require('./Routes').Routes;

const initialState =  window.STATE_FROM_SERVER;
let store = createStore(reducers, {}, applyMiddleware(reduxThunk));

function renderApp(){
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>
    ,document.querySelector("#react-app")
  );
}

renderApp();

// if(module.hot){
//   module.hot.accept('./Routes', () => {
//     Routes = require('./Routes').Routes;
//     renderApp();
//   })
// }
