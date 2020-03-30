import { OK, CREATED, NO_CONTENT, UNPROCESSABLE_ENTITY } from '../util';

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
  updateMemo (state, data) {
    state.memos.splice(data.index, 1, data.memo);
  },
  deleteMemo (state, data) {
    // 削除したID以外のものを抽出
    state.memos = state.memos.filter((memo) => {
      return memo.id != data.id;
    });
  },
  setApiStatus (state, status) {
    state.apiStatus = status;
  },
  addMemo (state, memo) {
    state.memos.push(memo);
  },
  setErrorMessages(state, message) {
    state.error_messages = message;
  },
}

const actions = {
  async getMemo (context) {
    // メモ取得
    context.commit('setApiStatus', null);
    const response = await axios.get('/api/memo');

    if (OK === response.status) {
      context.commit('setApiStatus', true);
      context.commit('setMemos', response.data);
      return false;
    }
  },
  async store(context, data) {
    // メモ登録
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
  },
  async update(context, data) {
    // メモ更新
    context.commit('setApiStatus', null);
    const response = await axios.put('/api/memo', data.memo);
    if (response.status === OK) {
      context.commit('setApiStatus', true);
      context.commit('updateMemo', {'memo': response.data, 'index': data.index});
      return false;
    }

    context.commit('setApiStatus', false);
    if (response.status === UNPROCESSABLE_ENTITY) {
      context.commit('setErrorMessages', response.data.errors);
    } else {
      context.commit('error/setCode', response.status, { root: true });
    }
  },
  async delete(context, data) {
    // メモ更新
    context.commit('setApiStatus', null);
    const response = await axios.delete('/api/memo', {data: data});
    if (response.status === NO_CONTENT) {
      context.commit('setApiStatus', true);
      context.commit('deleteMemo', {'id': data.id});
      return false;
    }

    context.commit('setApiStatus', false);
    if (response.status === UNPROCESSABLE_ENTITY) {
      context.commit('setErrorMessages', response.data.errors);
    } else {
      context.commit('error/setCode', response.status, { root: true });
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