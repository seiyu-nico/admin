<template>
  <div>
    <div class="row">
      <div class="col-10">
        <h1>Memo</h1>
      </div>
      <div class="col-2">
         <button type="button" class="btn btn-primary rounded-pill" data-toggle="modal" data-target="#memo_store">追加</button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 my-2" v-for="memo in memos" :key="memo.id">
        <div class="card shadow">
          <div class="card-body">
            <h4 class="card-title">{{memo.title}}</h4>
            <p class="card-text overflow-auto" style="height:150px;">{{memo.body}}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- メモ追加部分 -->
    <div class="modal fade" id="memo_store" tabindex="-1" role="dialog" aria-labelledby="memo_store_label">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="memo_store_label">メモ追加</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <form @submit.prevent="store">
            <div class="form-group">
              <label for="memo_title">メモタイトル</label>
              <div v-if="errors" class="errors">
                <template v-if="errors.title">
                  <div class="alert alert-danger" role="alert" v-for="msg in errors.title" :key="msg">{{ msg }}</div>
                </template>
              </div>
              <input type="email" class="form-control" id="memo_title" v-model="memo.title">
            </div>
            <div class="form-group">
              <label for="memo_body">内容</label>
              <div v-if="errors" class="errors">
                <template v-if="errors.body">
                  <div class="alert alert-danger" role="alert" v-for="msg in errors.body" :key="msg">{{ msg }}</div>
                </template>
              </div>
              <textarea class="form-control" id="memo_body" rows="9" v-model="memo.body"></textarea>
            </div>
          </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="modal_hidden" data-dismiss="modal">閉じる</button>
            <button type="button" class="btn btn-primary" @click="store">保存</button>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      memo: {
        title: '',
        body: '',
      },
    }
  },
  created () {
    this.getMemo();
  },
  methods: {
    async getMemo() {
      // メモ取得
      await this.$store.dispatch('memo/getMemo');
    },
    async store() {
      // 登録処理
      await this.$store.dispatch('memo/store', this.memo);
      if (this.apiStatus) {
        // 追加が正常に完了したのでモーダルを閉じる
        this.modalHidden();
        this.initMemo();
      }
    },
    initMemo() {
      // メモ初期化
      this.memo.title = '';
      this.memo.body = '';
    },
    modalHidden() {
      // モーダルを非表示にする
      $('#modal_hidden').click();
    }
  },
  computed: {
    ...mapState({
      memos: state => state.memo.memos,
      apiStatus: state => state.memo.apiStatus,
      errors: state => state.memo.error_messages
    })
  },
}
</script>