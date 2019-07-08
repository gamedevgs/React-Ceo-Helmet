import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Layout from './../app/Layout';

ReactDOM.hydrate((
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
), document.getElementById('root'));
