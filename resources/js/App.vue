<template>
  <div class="">
    <Header></Header>
    <template v-if="isLogin">
      <div class="page-wrapper chiller-theme toggled overflow-auto">
        <Sidebar></Sidebar>
        <main class="page-content main">
          <div class="container-fluid">
            <RouterView />
          </div>
        </main>
      </div>
    </template>
    <template v-else>
      <div class="col-12">  
        <RouterView />
      </div>
    </template>
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
<style>
.main {
  height: calc(100vh - 70px);
}
</style>