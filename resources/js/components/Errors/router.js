import Router from './Router';

export default {
  path: '/error',
  component: Router,
  children: [
    {
      path: '',
      name: 'Errors.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'errors/index');
      },
    }
  ]
}