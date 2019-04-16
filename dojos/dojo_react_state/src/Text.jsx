import React, { Component } from "react";

class Text extends Component {
  render() {
    return (
      <div className="Text">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Text;