import * as types from './mutations-types';

export default {
  [types.ADD](state, Movie) {

    Movie.id =state.Movies.length;
    console.log('Movie',state)

    state.Movies.push(Movie);
  },

  [types.REMOVE](state, id) {
    state.Movies = state.Movies.filter(Movie => Movie.id !== id);
  }
};
