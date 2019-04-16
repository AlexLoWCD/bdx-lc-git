import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <Input text={this.props.text} change={this.props.change} />
      </div>
    );
  }
}

export default Form;