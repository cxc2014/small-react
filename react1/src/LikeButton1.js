import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class LikeButton1 extends Component {

    static defaultProps = {
        likedText: "取消",
        unLikedText: "点赞"
    };

    constructor() {
        super();
        this.state = {isLiked: false};
    }

    clickLikeButton() {
        console.log(this.state.isLiked);
        this.setState({isLiked: !this.state.isLiked});

        console.log(this.state.isLiked);
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        return (
            <button onClick={this.clickLikeButton.bind(this)}>
                {this.state.isLiked ? this.props.likedText : this.props.unLikedText} 👍
            </button>
        )
    }
}
