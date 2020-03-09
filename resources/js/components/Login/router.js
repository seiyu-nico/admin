import Router from './Router';

import store from '../../store';

export default {
  path: '/login',
  component: Router,
  children: [
    {
      path: '',
      name: 'Login.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'login/index');
      },
      beforeEnter (to, from, next) {
        if (store.getters['auth/check']) {
          next('/');
        } else {
          next();
        }
      }
    }
  ]
}