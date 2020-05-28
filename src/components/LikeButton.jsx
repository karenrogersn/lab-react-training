import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
    };
  }

  incrementLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <div className="like-button">
        <button onClick={this.incrementLikes}>{this.state.likes}Likes</button>
      </div>
    );
  }
} //end of class component

export default LikeButton;
