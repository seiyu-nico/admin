import list from './list';
import { OK, CREATED, NO_CONTENT, UNPROCESSABLE_ENTITY } from '../../util';

const state = {
  apiStatus: null,
  select: '',
  date: {
    id: '',
    start_date: '', 
    start_time: '', 
    end_date: '', 
    end_time: ''
  },
}

const getters = {
}

const mutations = {
  setSelect (state, select) {
    state.select = select;
  },
  setDate (state, data) {
    state.date = data;
  },
  setApiStatus (state, status) {
    state.apiStatus = status;
  },
}

const actions = {
  async getAttendance(context, data) {
    let params = {
      'date': data,
    }

    console.log(params);
    const response = await axios.get('/api/attendance', {params: params});
    if (OK === response.status) {
      context.commit('setApiStatus', true);
      context.commit('setDate', response.data);
      return false;
    }
  },
  async store(context, data) {
    // メモ登録
    console.log(context.state.select);
    console.log(context.state.date);
    let id = context.state.date.id;
    let select = context.state.select;
    let params = {
      id: id,
      [select]: data,
    }
    console.log(params);
    if ('' == id) {
      const response = await axios.post('/api/attendance', params);
      if (response.status === CREATED) {
        context.commit('setApiStatus', true);
        context.commit('setDate', response.data);
        return false;
      }
    } else {
      const response = await axios.put('/api/attendance', params);
      if (response.status === OK) {
        context.commit('setApiStatus', true);
        context.commit('setDate', response.data);
        return false;
      }
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
  actions,
  modules: {
    list,
  }
}
