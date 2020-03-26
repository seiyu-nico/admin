<template>
  <div class="container-fluid" style="padding-right: 0px; padding-left: 0px;">
    <Header></Header>
    <main>
      <div class="container-fluid" style="padding-right: 0px; padding-left: 0px;">
        <div class="row">
          <div class=" d-none d-sm-block col-md-2">
            <Sidebar></Sidebar>
          </div>
          <div class="col-12 col-sm-10">  
            <RouterView />
          </div>
        </div>
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
    }
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