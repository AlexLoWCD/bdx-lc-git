import React, { Component } from 'react';
import './Game.css'

const game = {
  name: 'One Finger Death Punch 2',
  image: 'https://steamcdn-a.akamaihd.net/steam/apps/980300/capsule_184x69.jpg?t=1555325479',
  tags: ['Action', 'Indépendant', 'Casual'],
  price: '4,94€',
};

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <div><img src={game.image} alt="game" /></div>
        <div>
          <div>{game.name}</div>
          <div>{game.tags.join(', ')}</div>
        </div>
        <div>{game.price}</div>
      </div>
    );
  }
}

export default Game;