import React, { Component } from 'react';
import Game from './Game';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    fetch('http://www.campus-bordeaux.ovh:3002/joysticks/api/games')
    .then(res => res.json())
    .then(games => {
      this.setState({ games });
    })
  }

  onDeleteGame = (idGame) => {
    const games = this.state.games.filter(game => game.id !== idGame);
    this.setState({ games });
  }

  render() { 
    console.log(this.props);
    return ( 
      <div className="GameList">
        {
          this.state.games.map(game => 
            <Game key={game.id} game={game} onDeleteGame={this.onDeleteGame} />
          )
        }
      </div>
     );
  }
}
 
export default GameList;