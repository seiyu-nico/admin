import { OK, CREATED, NO_CONTENT, UNPROCESSABLE_ENTITY } from '../../util';

const state = {
  attendances: [],
  select: {year: 0, month: 0,},
  apiStatus: null,
}

const getters = {
  selectAttendances: (state) => {
    return state.attendances.filter((attendance) => {
      let date = new Date(attendance.start_date);
      if (state.select.year == date.getFullYear() && state.select.month == ('0' + (date.getMonth() + 1)).slice(-2)) {
        return true;
      }
      return false;
    })
  }
}

const mutations = {
  setAttendances (state, attendances) {
    state.attendances = attendances;
  },
  setApiStatus (state, status) {
    state.apiStatus = status;
  },
  updateSelect(state, select) {
    state.select[select.key] = select.value;
  }
}

const actions = {
  async getAttendances (context) {
    // 勤怠データ取得
    context.commit('setApiStatus', null);
    const response = await axios.get('/api/attendances');

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