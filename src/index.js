import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from "./store/store";
import {Provider} from 'react-redux'

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));