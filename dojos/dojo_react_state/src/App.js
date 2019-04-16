import React, { Component } from 'react';
import Text from "./Text";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <Text text={this.state.text} />
        <Form text={this.state.text} change={this.onChange} />
      </div>
    );
  }
}

export default App;
