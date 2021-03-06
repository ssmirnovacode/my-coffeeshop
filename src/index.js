import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/app';
import {Provider} from 'react-redux';
import store from './redux/store';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
