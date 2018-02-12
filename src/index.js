import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import AllReducers from './reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(AllReducers, composeEnhancers(
  applyMiddleware(thunk)
));
store.subscribe(()=>{console.log("Store updated",store.getState())})

ReactDOM.render(
  <Provider store={store}>
        <App/>
  </Provider>, document.getElementById('root'));
        registerServiceWorker();
