import list from './list';
import break_time from './break_time';
import { OK, CREATED, NO_CONTENT, UNPROCESSABLE_ENTITY } from '../../util';

const state = {
  apiStatus: null,
  select: '',
  attendance: {
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
  setSelect (state, data) {
    state.select = data;
  },
  setAttendance (state, data) {
    state.attendance = data;
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

    const response = await axios.get('/api/attendance', {params: params});
    if (OK === response.status) {
      context.commit('setApiStatus', true);
      if (response.data) {
        context.commit('setAttendance', response.data.attendance);
        context.commit('attendance/break_time/setBreakTime', response.data.break_times, {root: true});
      }
      return false;
    }
  },
  async store(context, data) {
    let id = context.state.attendance.id;
    let select = context.state.select;
    let params = {
      id: id,
      [select]: data,
    }
    if ('' == id) {
      const response = await axios.post('/api/attendance', params);
      if (response.status === CREATED) {
        context.commit('setApiStatus', true);
        context.commit('setAttendance', response.data);
        return false;
      }
    } else {
      const response = await axios.put('/api/attendance', params);
      if (response.status === OK) {
        context.commit('setApiStatus', true);
        context.commit('setAttendance', response.data);
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
    break_time,
    list,
  }
}
