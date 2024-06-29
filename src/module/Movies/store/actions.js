import * as types from './mutations-types';

export default {
  addMovie({commit}, Movie) {
    commit(types.ADD, Movie);
  },
  removeMovie({commit}, MovieId) {
    commit(types.REMOVE, MovieId);
  }
}
