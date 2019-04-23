import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch('http://campus-bordeaux.ovh:3001/api/quests/movies/')
    .then(res => res.json())
    .then((movies) => {
      this.setState({ 
        movies,
        loading: false,
      });
    });
  }

  render() {
    const movies = this.state.movies;
    const loading = this.state.loading;
    return ( 
      <div className="App" style={{textAlign: 'center'}}>
        {
          (loading)
          ? <div>Chargement en cours...</div>
          : ''
        }
        {
          movies.map(movie => (
            <div key={movie.id}>
              <div>{movie.name}</div>
              <div><img src={movie.poster} width="200" alt="temp" /></div>
              <div>{movie.comment}</div>
            </div>
          ))
        }
      </div>
     );
  }
}
 
export default App;
