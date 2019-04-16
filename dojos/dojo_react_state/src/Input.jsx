import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input
          name="test"
          type="text"
          value={this.props.text}
          onChange={this.props.change}
        />
      </div>
    );
  }
}

export default Input;