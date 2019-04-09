import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage';
import ListGames from './ListGames';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/games" component={ListGames} />
        </Switch>
      </div>
    );
  }
}

export default App;
