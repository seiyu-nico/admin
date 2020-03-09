<template>
  <div class="container">
    <header>
    </header>
    <main>
        <RouterView />
    </main>
  </div>
</template>
<script>
import { INTERNAL_SERVER_ERROR } from './util';

export default {
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