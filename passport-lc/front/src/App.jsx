import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Navbar from './Navbar';
import Home from './Home';
import SignIn from './SignIn';
import Visitor from './Visitor';
import Connected from './Connected';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/visitor" component={Visitor} />
        <PrivateRoute path="/connected" component={Connected} />
      </Switch>
    </div>
  );
}

export default App;
