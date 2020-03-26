<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
    <div class="collapse navbar-collapse justify-content-start">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link :to="{name: 'Index.Index'}" class="navbar-brand">ダッシュボード</router-link>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link">{{ nickname }}</a>
        </li>
        <li v-if="isLogin" class="nav-item active">
          <a class="nav-link" @click="logout">ログアウト</a>
        </li>
      </ul>
    </div>
  </nav>
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
    },
  }
}
</script>