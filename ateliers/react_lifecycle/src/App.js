import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchMovies } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.asyncFetchMovies();
  }

  render() {
    const { movies, loading, error } = this.props;
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        {
          (loading)
            ? <div>Chargement en cours...</div>
            : ''
        }
        {
          (error !== '')
            ? <div>{error}</div>
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

const mstp = state => ({
  loading: state.movies.loading,
  movies: state.movies.list,
  error: state.movies.error,
});

const mdtp = dispatch => bindActionCreators({ asyncFetchMovies }, dispatch);

export default connect(mstp, mdtp)(App);
