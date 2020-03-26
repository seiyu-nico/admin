<template>
  <div>
    <h1>Index</h1>
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
}
</script>