export const startFetchMovies = () => ({
  type: 'START_FETCH_MOVIES',
});
export const fetchSuccessMovies = movies => ({
  type: 'FETCH_SUCCESS_MOVIES',
  movies,
});
export const fetchErrorMovies = err => ({
  type: 'FETCH_ERROR_MOVIES',
  err,
});

export const asyncFetchMovies = () => {
  return (dispatch) => {
    dispatch(startFetchMovies());
    fetch('http://campus-bordeaux.ovh:3001/api/quests/movies/')
      .then(res => res.json())
      .then((movies) => {
        dispatch(fetchSuccessMovies(movies));
      })
      .catch(() => {
        dispatch(fetchErrorMovies('Erreur lors du chargement des films'));
      });
  }
}
