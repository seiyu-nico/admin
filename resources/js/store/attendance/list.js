import { OK, CREATED, NO_CONTENT, UNPROCESSABLE_ENTITY } from '../../util';

const state = {
  attendances: [],
  apiStatus: null,
  spinner: false,
}

const getters = {
}

const mutations = {
  setAttendances (state, attendances) {
    state.attendances = attendances;
  },
  setSpinner (state, flag) {
    state.spinner = flag;
  }
}

const actions = {
  async getAttendances (context, data) {
    // 勤怠データ取得
    context.commit('setSpinner', false);
    const response = await axios.get('/api/attendances', {params: data});
    if (OK === response.status) {
      context.commit('setAttendances', response.data);
      context.commit('setSpinner', true);
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