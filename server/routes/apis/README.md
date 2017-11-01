# API service for the app

This the data point entry for the APP APIs and serve externally

This the Main API service. We might
have some similarity with services


Amount Service:

* Request More React components once:

For example:
//request-react-componentX.js

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MyComponent from './MyComponent';
const app = express();

function home(req, res){
  res.send(ReactDOMServer.renderToString(<MyComponent />));
}
app.get('/', home);

app.listen(3000);
