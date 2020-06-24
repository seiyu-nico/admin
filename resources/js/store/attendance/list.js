import { OK, CREATED, NO_CONTENT, UNPROCESSABLE_ENTITY } from '../../util';

const state = {
  attendances: [],
  apiStatus: null,
  spinner: true,
}

const getters = {
}

const mutations = {
  setAttendances (state, attendances) {
    state.attendances = attendances;
  },
  setSpinner (state, flag) {
    state.spinner = flag;
  },
  deleteAttendance (state, id) {
    // 削除したID以外のものを抽出
    state.attendances = state.attendances.filter((attendance) => attendance.id != id );
  },
}

const actions = {
  async getAttendances (context, data) {
    // 勤怠データ取得
    context.commit('setSpinner', true);
    const response = await axios.get('/api/attendances', {params: data});
    if (OK === response.status) {
      context.commit('setAttendances', response.data);
      context.commit('setSpinner', false);
      return false;
    }
  },
  async geleteAttendance (context, data) {
    context.commit('setSpinner', true);
    const response = await axios.delete('/api/attendance', {data: data});
    if (NO_CONTENT === response.status) {
      context.commit('deleteAttendance', data.id);
      context.commit('setSpinner', false);
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