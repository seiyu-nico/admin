import { OK, CREATED, NO_CONTENT, UNPROCESSABLE_ENTITY } from '../util';

const state = {
  attendances: [],
  select_year: 0,
  select_month: 0,
  apiStatus: null,
}

const getters = {
  attendances: (state) => {
    return state.attendances.filter(attendance => {
      if ('2020-03-12' == attendance.start_date) {
        return true;
      }
      return false;
    });
  }
}

const mutations = {
  setAttendances (state, attendances) {
    state.attendances = attendances;
  },
  setApiStatus (state, status) {
    state.apiStatus = status;
  },
  setYear (state, year) {
    state.select_year = year;
  },
  setMonth (state, month) {
    state.select_month = month;
  },
}

const actions = {
  async getAttendances (context) {
    // 勤怠データ取得
    context.commit('setApiStatus', null);
    const response = await axios.get('/api/attendance');

    if (OK === response.status) {
      context.commit('setApiStatus', true);
      context.commit('setAttendances', response.data);
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