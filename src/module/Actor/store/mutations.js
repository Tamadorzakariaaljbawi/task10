import * as types from './mutations-types';

export default {
  [types.ADD_Actor](state, Actor) {


    if (typeof Actor === 'object') {
      Actor.id = state.Actors.length;
      state.Actors.push(Actor);
    } else {
      console.error('Invalid Actor object:', Actor);
      // 可以根据需要添加其他错误处理逻辑
    }

  },

  [types.REMOVE_Actor](state, id) {
    state.Actors = state.Actors.filter(Actor => Actor.id !== id);
  },

  [types.GET_Actor](state, id) {
    state.Actors = state.Actors.filter(Actor => Actor.id == id);



  },

  [types.Edit_Actor](state, Actor) {
    state.Actors = state.Actors.map((obj) => {
      if (obj.id === Actor.id) {
        return Actor;
      }
      return obj;
    });

    console.log('state.Actors', state.Actors);
  }
};
