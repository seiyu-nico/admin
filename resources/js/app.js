import './bootstrap';
import Vue from 'vue';
// ルーティングの定義をインポートする
import router from './router.js';
// ストアインポート
import store from './store';
// ルートコンポーネントをインポートする
import App from './App.vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// moment
import moment from 'vue-moment';

const createApp = async () => {
  await store.dispatch('auth/currentUser');

  new Vue({
    el: '#app',
    router, // ルーティングの定義を読み込む
    store, // ストア
    components: { App }, // ルートコンポーネントの使用を宣言する
    template: '<App />', // ルートコンポーネントを描画する
  });
  Vue.use(moment, {});
  // Install BootstrapVue
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)

}


createApp();