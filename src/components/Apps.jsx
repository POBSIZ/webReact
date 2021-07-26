import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import './App.scss';

class Apps extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Webpack with React</h1>
            </div>             
        );
    }
}

export default hot(module)(Apps);