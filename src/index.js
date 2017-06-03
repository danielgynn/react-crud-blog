import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import likes from './reducers/likes';

const store = createStore(likes);

const render = () => ReactDOM.render(
  <App
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
document.getElementById('root'));

registerServiceWorker();
render();
store.subscribe(render);
