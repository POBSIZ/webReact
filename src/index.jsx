import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, HashRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';
import { createHashHistory, createHistory } from 'history';

const history = createHistory();

// Components
import App from './components/App/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App></App>
    ,rootElement
);