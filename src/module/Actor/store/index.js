import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "@/module/Actor/store/getters";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
