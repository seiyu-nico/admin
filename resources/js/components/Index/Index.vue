<template>
  <div>
    <h1>Index</h1>
    <div  v-if="isLogin">
      <div>
        <button type="button" class="btn btn-outline-info" @click="logout">ログアウト</button>
      </div>
      {{ nickname }}
    </div>
    <div v-else>
    　<router-link to="/login">ログイン</router-link>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout');

      this.$router.push('/login');
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters['auth/check'];
    },
    nickname () {
      return this.$store.getters['auth/nickname'];
    }
  }
}
</script>