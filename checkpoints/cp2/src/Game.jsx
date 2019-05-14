import React from 'react';
import { Link } from 'react-router-dom';

function Game({ game, onDeleteGame }) {
  return (
    <div className="Game">
      <div>{game.name}</div>
      <img src={game.pochette} width="200" alt="img game" />
      <button onClick={() => { onDeleteGame(game.id); }}>Supprimer</button>
      <Link to={`/jeu/promo/${game.id}`}><button>Voir la promo</button></Link>
    </div>
  )
}

export default Game;

// onDeleteGame(ID)