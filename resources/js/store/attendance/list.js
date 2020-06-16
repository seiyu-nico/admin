import { OK, CREATED, NO_CONTENT, UNPROCESSABLE_ENTITY } from '../../util';

const state = {
  attendances: [],
  apiStatus: null,
}

const getters = {
}

const mutations = {
  setAttendances (state, attendances) {
    state.attendances = attendances;
  },
}

const actions = {
  async getAttendances (context, data) {
    // 勤怠データ取得
    const response = await axios.get('/api/attendances', {params: data});
    if (OK === response.status) {
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