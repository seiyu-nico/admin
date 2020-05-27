import list from './list';

const state = {
  select: '',
  date: {
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
  setDate (state, date) {
    state.date[state.select] = date;
  },
}

const actions = {
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
