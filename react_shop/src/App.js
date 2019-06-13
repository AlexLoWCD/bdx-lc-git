import React from 'react';
import './App.css';
import Items from './containers/Items';
import Cart from './containers/Cart';

function App() {
  return (
    <div className="App">
      <Items />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
