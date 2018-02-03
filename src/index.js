import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import {createStore} from 'redux';
import AllReducers from './reducers/index';

const store =createStore(AllReducers);
store.subscribe(()=>{console.log("Store updated",store.getState())})

ReactDOM.render(
  <Provider store={store}>
        <App/>
  </Provider>, document.getElementById('root'));
        registerServiceWorker();
