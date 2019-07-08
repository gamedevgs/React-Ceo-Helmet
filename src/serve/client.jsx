import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Layout from './../main/Layout';
import { createStore, applyMiddleware, compose } from 'redux';
import initReducer from './../reducers/initReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    initReducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);

ReactDOM.hydrate((
    <Provider store={ store }>
    <BrowserRouter>
    <Layout/>
    </BrowserRouter>
    </Provider>
), document.getElementById('root'));
