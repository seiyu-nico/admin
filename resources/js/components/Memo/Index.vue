<template>
  <div>
    <h1>Memo</h1>
    <div v-for="memo in memos" :key="memo.id">
      <p>{{memo.title}}</p>
      <p>{{memo.body}}</p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  created () {
    this.getMemo();
  },
  methods: {
    async getMemo() {
      // メモ取得
      await this.$store.dispatch('memo/getMemo');
    }
  },
  computed: {
    ...mapState({
      memos: state => state.memo.memos,
      apiStatus: state => state.memo.apiStatus
    })
  },
}
</script>