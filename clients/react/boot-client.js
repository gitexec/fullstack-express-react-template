import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import 'antd/dist/antd.less';
import './assets/stylesheets/appStyles.less';
import 'bootstrap/dist/css/bootstrap.css';

//if the same or a lot of ant-design components are beeing imported in multiple location
//use import {LocaleProvider} from 'antd'; for every component and load the entire lib to client
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

import reducers from './reducers/reducers'
let Routes = require('./Routes').Routes;

const initialState =  window.STATE_FROM_SERVER;
let store = createStore(reducers, initialState, applyMiddleware(reduxThunk));

function renderApp(){
  ReactDOM.render(
    <Provider store={store}>
      <LocaleProvider locale={enUS}>
          <Routes />
      </LocaleProvider>
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
