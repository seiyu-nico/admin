import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import error from './error';
import memo from './memo';
import attendance from './attendance';
import common from './common';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    error,
    memo,
    attendance,
    common,
  }
})

export default store