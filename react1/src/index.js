import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LikeButton from './LikeButton'
import LikeButton1 from "./LikeButton1";

// import App from './App';
import * as serviceWorker from './serviceWorker';

class Title extends Component {
    handleClickOnTitle (e, s, c) {
        // console.log(e.target.innerHTML);
        console.log(e);
        console.log(s);
        console.log(c);
    }

    render () {
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this, "Hello", "this is")}>React 小书</h1>
        )
    }
}

class Index extends Component {
    constructor() {
        super();
        this.state = {
            likedText: "1111",
            unLikedText: "2222"
        };
    }

    clickOnChange() {
        this.setState({
            likedText: "333",
            unLikedText: "4444"
        })
    }

    render() {
        return (
            <div>
                <LikeButton1 likedText={this.state.likedText} unLikedText={this.state.unLikedText}/>
                <div>
                    <button onClick={this.clickOnChange.bind(this)}>
                        修改按钮
                    </button>
                </div>
            </div>
        )
    }
}

class Header extends Component {
    render () {
        return (
            <div>
                <Title />
                <LikeButton />
                <LikeButton1 wording={{likedText:"已赞", unLikedText:"赞" }}
                onClick={() => console.log("click LikeButton1")}/>
                <Index/>
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
