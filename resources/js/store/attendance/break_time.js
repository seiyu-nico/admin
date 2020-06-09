import list from './list';
import { OK, CREATED, NO_CONTENT, UNPROCESSABLE_ENTITY } from '../../util';

const state = {
  break_times: [],
  apiStatus: null,
}

const getters = {
}

const mutations = {
  setBreakTime (state, data) {
    state.break_times = data;
  },
  setBreakTimeValue (state, data) {
    state.break_times.find((break_time) =>  break_time.id === data.id)[data.key] = data.value;
  },
  addBreakTime(state, data) {
    state.break_times.push(data);
  },
  setApiStatus (state, status) {
    state.apiStatus = status;
  },
}

const actions = {
  async updateBreakTimeValue(context, data) {
    const attendance_id = context.state.break_times.find((break_time) =>  break_time.id === data.id).attendance_id;
    const params = {
      'id': data.id,
      [data.key]: data.value,
      'attendance_id': attendance_id,
    }
    if ('' == data.id) {
      const response = await axios.post('/api/break-time', params);
      if (response.status === CREATED) {
        context.commit('setApiStatus', true);
        context.commit('setBreakTimeValue', data);
        return false;
      }
    } else {
      const response = await axios.put('/api/break-time', params);
      if (response.status === OK) {
        context.commit('setApiStatus', true);
        context.commit('setBreakTimeValue', data);
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
  async addBreakTime(context, data) {
    const response = await axios.post('/api/break-time', data);
    if (response.status === CREATED) {
      context.commit('setApiStatus', true);
      context.commit('addBreakTime', response.data);
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
  actions,
  modules: {
    list,
  }
}
