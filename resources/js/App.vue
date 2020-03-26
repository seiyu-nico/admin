<template>
  <div class="">
    <Header></Header>
    <main>
        <RouterView />
    </main>
  </div>
</template>
<script>
import Header from './components/Header';
import { INTERNAL_SERVER_ERROR } from './util';

export default {
  components : {
    Header,
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