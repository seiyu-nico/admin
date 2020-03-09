import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexRouter from './components/Index/router';
import LoginRouter from './components/Login/router';
import ErrorsRouter from './components/Errors/router';

import store from './store';


// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
  { ...IndexRouter,
    beforeEnter (to, from, next) {
      if (store.getters['auth/check']) {
        next();
      } else {
        next('/login');
      }
    }
  },
  { ...LoginRouter },
  { ...ErrorsRouter },
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history', 
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router