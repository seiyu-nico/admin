<template>
  <div>
    <h1>Memo</h1>
    <div class="row">
      <div class="col-lg-3 my-2" v-for="memo in memos" :key="memo.id">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{memo.title}}</h4>
            <p class="card-text">{{memo.body}}</p>
          </div>
        </div>
      </div>
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
    },
  },
  computed: {
    ...mapState({
      memos: state => state.memo.memos,
      apiStatus: state => state.memo.apiStatus
    })
  },
}
</script>