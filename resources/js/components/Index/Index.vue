<template>
<div>
  <h2>TOPページ</h2>
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