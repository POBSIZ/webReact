import React from 'react';
// import styles from  './App.css';
import './App.css';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Hello, Webpack!!! with React</h1>
            </div>             
        );
    }
}

export default hot(module)(App);