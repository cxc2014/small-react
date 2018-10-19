import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Title extends Component {
    handleClickOnTitle (e) {
        console.log(e.target.innerHTML);
        console.log(this);
    }

    render () {
        return (
            <h1 onClick={this.handleClickOnTitle}>React 小书</h1>
        )
    }
}

class Header extends Component {
    render () {
        return (
            <div>
                <Title />
                <Title />
                <Title />
            </div>
        )
    }
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
