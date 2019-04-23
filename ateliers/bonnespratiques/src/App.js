import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

import Composant1 from './Composant1';
import Composant2 from './Composant2';
import Header from './Header';

class App extends Component {
  onClickButton = (evt, id) => {
    console.log("coucou", id, evt.target);
  }

  onClickButton2 = (evt) => {
    console.log(evt);
  }
  render() {
    return (
      <div className="App">
      <Header />
        <Composant1 />
        <Composant2 />

        <Button color="primary" onClick={(evt) => this.onClickButton(evt, 12)}>primary</Button>
        <Button color="primary" onClick={this.onClickButton2}>primary</Button>
      </div>
    );
  }
}

export default App;
