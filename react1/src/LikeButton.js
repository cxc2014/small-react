import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class LikeButton extends Component {

    constructor() {
        super();
        this.state = {isLiked: false};
    }

    clickLikeButton() {
        console.log(this.state.isLiked);
        this.setState({isLiked: !this.state.isLiked});
        console.log(this.state.isLiked);
    }

    render() {
        return(
            <button onClick={this.clickLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'}  👍
            </button>
        )
    }
}
