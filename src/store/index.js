import { createStore } from 'vuex'
import Movies from '../module/Movies/store/index'
import Roles_ from '../module/Roles/store/index'
import Actors from '../module/Actor/store/index'
// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  modules :{
    Movies,
    Roles_,
    Actors
  }
})

export default store
