<template>
  <div>
    <h1>Index</h1>
    <div v-if="isLogin">
      <div>
        <button type="button" class="btn btn-outline-info" @click="logout">ログアウト</button>
      </div>
      {{ nickname }}
    </div>
      <router-link :to="{name: 'Index.Index'}">TOP</router-link>
      <router-link :to="{name: 'Memo.Index'}">メモ</router-link>
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