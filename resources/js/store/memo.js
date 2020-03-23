import { OK, CREATED, UNPROCESSABLE_ENTITY } from '../util';

const state = {
  memos: {},
  apiStatus: null,
  error_messages: null,
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
  addMemo (state, memo) {
    state.memos.push(memo);
  },
  setErrorMessages(state, message) {
    state.error_messages = message;
  }
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
  async store(context, data) {
    context.commit('setApiStatus', null);
    const response = await axios.post('/api/memo', data);
    if (response.status === CREATED) {
      context.commit('setApiStatus', true);
      context.commit('addMemo', response.data);
      return false;
    }

    context.commit('setApiStatus', false);
    if (response.status === UNPROCESSABLE_ENTITY) {
      context.commit('setErrorMessages', response.data.errors);
    } else {
      context.commit('error/setCode', response.status, { root: true });
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}