import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexRouter from './components/Index/router';
import LoginRouter from './components/Login/router';


// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
  { ...IndexRouter },
  { ...LoginRouter },
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history', 
  routes
})


// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router