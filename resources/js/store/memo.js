import { OK, CREATED, UNPROCESSABLE_ENTITY } from '../util';

const state = {
  memos: {},
  apiStatus: null,
}

const getters = {
}

const mutations = {
  setMemos (state, memos) {
    state.memos = memos;
  },
  setApiStatus (state, status) {
    state.apiStatus = status;
  },
}

const actions = {
  async getMemo (context) {
    context.commit('setApiStatus', null);
    const response = await axios.get('/api/memo');

    if (OK === response.status) {
      context.commit('setApiStatus', true);
      context.commit('setMemos', response.data);
      return false;
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}