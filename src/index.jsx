import React from 'react';
import ReactDOM from 'react-dom';

import { Link, Route, BrowserRouter } from "react-router-dom";

// Components
import App from './components/App/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App/>,
    rootElement
);