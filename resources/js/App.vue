<template>
  <div class="container-fluid">
    <Header></Header>
    <main>
      <div class="row">
        <template v-if="isLogin">
          <div class="d-none d-sm-block col-md-2 bg-primary seiyu-sidebar" style="background-clip: padding-box;">
            <Sidebar></Sidebar>
          </div>
          <div class="col-12 col-sm-10">  
            <RouterView />
          </div>
        </template>
        <template v-else>
          <div class="col-12">  
            <RouterView />
          </div>
        </template>
      </div>
    </main>
  </div>
</template>
<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { INTERNAL_SERVER_ERROR } from './util';

export default {
  components : {
    Header,
    Sidebar,
  },
  computed: {
    errorCode () {
      return this.$store.state.error.code;
    },
    isLogin () {
      return this.$store.getters['auth/check'];
    },
  },
  watch: {
    errorCode: {
      handler (val) {
        if (val === INTERNAL_SERVER_ERROR) {
          this.$router.push('/error');
        }
      },
      immediate: true
    },
    $route () {
      this.$store.commit('error/setCode', null);
    }
  }
}
</script>