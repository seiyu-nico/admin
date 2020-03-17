import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import error from './error';
import memo from './memo';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    error,
    memo,
  }
})

export default store