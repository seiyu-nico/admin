const state = {
  years: [],
  months: [],
}

const getters = {
}

const mutations = {
  setMonth (state, months) {
    state.months = months;
  },
  setYear (state, years) {
    state.years = years;
  },
}

const actions = {
  async createMonth(context) {
    let months = [];
    // 月は1〜12固定なのでJS側で作成
    for (let month = 1, last_month = 12; month <= last_month; ++month ) {
      months.push(("0" + month).slice(-2));
    }
    context.commit('setMonth', months);
  },
  async createYear(context, data) {
    let years = [];
    for (let year = data.min_year; year <= data.max_year; ++year ) {
      years.push(year);
    }
    context.commit('setYear', years);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}