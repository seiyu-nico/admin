import Router from './Router';

import store from '../../store';

export default {
  path: '/attendance',
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
      name: 'Attendance.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'attendance/index');
      },
      props: true
    },
    {
      path: ':id(\\d+)',
      name: 'Attendance.Update',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'attendance/index');
      },
      props: true
    },
    {
      path: 'list',
      name: 'Attendance.List',
      component: resolve => {
        require.ensure(['./List.vue'], () => {
        resolve(require('./List.vue'));
        }, 'attendance/list');
      },
    },
  ]
}