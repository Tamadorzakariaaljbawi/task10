import * as types from './mutations-types';

export default {
  addActor({commit}, Actor) {
    commit(types.ADD_Actor, Actor);
  },
  getActor({commit}, ActorId) {
    commit(types.GET_Actor, ActorId);
  },
  removeActor({commit}, ActorId) {
    commit(types.REMOVE_Actor, ActorId);
  },

  editActor({commit}, Actor) {
    commit(types.Edit_Actor, Actor);
  }
}
