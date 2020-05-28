import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      secondimg: false,
    };
  }

  //access the path of img and imgClicked (instantiated in the ClickablePicture object in App.jsx because they're properties of that object and that's how you can get their location)
  changePhoto = () => {
    this.setState({
      secondimg: !this.state.secondimg,
    });
  };

  render() {
    return (
      <button onClick={this.changePhoto}>
        <img
          src={
            (this.state.secondimg && this.props.imgClicked) || this.props.img
          }
          alt=""
        />
      </button>
    );
  }
}

export default ClickablePicture;
