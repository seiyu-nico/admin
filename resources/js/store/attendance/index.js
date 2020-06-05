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
  break_times: [
    {
      id: '1',
      attendance_id: '17',
      start_date: '2020-06-05', 
      start_time: '10:00:00', 
      end_date: '2020-06-05', 
      end_time: '11:00:00'
    },
    {
      id: '2',
      attendance_id: '17',
      start_date: '2020-06-05', 
      start_time: '12:00:00', 
      end_date: '2020-06-05', 
      end_time: '13:00:00'
    },
    {
      id: '3',
      attendance_id: '17',
      start_date: '2020-06-05', 
      start_time: '14:00:00', 
      end_date: '2020-06-05', 
      end_time: '15:00:00'
    },
    {
      id: '4',
      attendance_id: '17',
      start_date: '2020-06-05', 
      start_time: '16:00:00', 
      end_date: '2020-06-05', 
      end_time: '17:00:00'
    },
  ]
}

const getters = {
}

const mutations = {
  setSelect (state, data) {
    state.select = data;
  },
  setDate (state, data) {
    state.date = data;
  },
  setBreakTimeValue (state, data) {
    state.break_times[data.index][data.key] = data.value;
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
        context.commit('setDate', response.data);
      }
      return false;
    }
  },
  async store(context, data) {
    // メモ登録
    let id = context.state.date.id;
    let select = context.state.select;
    let params = {
      id: id,
      [select]: data,
    }
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
  updateBreakTimeValue(context, data) {
    context.commit('setBreakTimeValue', data);
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
