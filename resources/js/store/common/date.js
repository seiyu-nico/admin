const state = {
  val: [],
}

const getters = {
}

const mutations = {
  setVal (state, val) {
    state.val = val;
  },
}

const actions = {
  async createVal(context) {
    context.commit('setVal', [1, 2, 3]);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}