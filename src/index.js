import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rwReducer from './reducers';

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rwReducer);

let rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
registerServiceWorker();