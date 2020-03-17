import Router from './Router';

import store from '../../store';

export default {
  path: '/memo',
  component: Router,
  beforeEnter (to, from, next) {
    if (store.getters['auth/check']) {
      next();
    } else {
      next('/login');
    }
  },
  children: [
    {
      path: '',
      name: 'Memo.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'memo/index');
      },
    }
  ]
}