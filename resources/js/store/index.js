import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import error from './error';
import memo from './memo';
import attendance from './attendance/';
import common from './common';

Vue.use(Vuex);

const state = {
  locale: 'jp',
}

const getters = {
}

const mutations = {
}

const actions = {
}



const store = new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    auth,
    error,
    memo,
    attendance,
    common,
  }
})

export default store