import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Promo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const url = `http://www.campus-bordeaux.ovh:3002/joysticks/api/games/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(game => {
        this.setState({ game })
      })
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        controls: 0
      }
    };
    const videoId = (this.state.game.trailer) ? this.state.game.trailer.replace('https://www.youtube.com/watch?v=', '') : '2g811Eo7K8U';
    
    return (
      <div className="Promo">
        <div>{this.state.game.name}</div>
        <img src={this.state.game.pochette} width="200" alt="img game" />
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
}

export default Promo;