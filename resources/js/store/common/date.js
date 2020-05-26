const state = {
  val: [],
  years: [],
  months: [],
}

const getters = {
}

const mutations = {
  setVal (state, val) {
    state.val = val;
  },
  setMonth (state, months) {
    state.months = months;
  },
  setYear (state, years) {
    state.years = years;
  },
}

const actions = {
  async createVal(context) {
    context.commit('setVal', [1, 2, 3]);
  },
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