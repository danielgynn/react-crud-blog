import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import likes from './reducers/likes';
import './index.css';

const store = createStore(likes);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
registerServiceWorker();
