import React from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import './App.css';
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Webpack with React</h1>
            </div>             
        );
    }
}

export default hot(module)(App);