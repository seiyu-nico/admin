import Router from './Router';

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
    }
  ]
}