import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GameList from './GameList';
import Promo from './Promo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <GameList promo={5} />} />
        <Route path="/jeu/promo/:id" component={Promo} />
      </Switch>
    </div>
  );
}

export default App;
