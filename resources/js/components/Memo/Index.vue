<template>
  <div>
    <!-- 一覧表示 -->
    <div class="row">
      <div class="col-10">
        <h1>Memo</h1>
      </div>
      <div class="col-2">
         <button type="button" class="btn btn-primary rounded-pill" data-toggle="modal" data-target="#memo_store">追加</button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 my-2" v-for="(memo, index) in memos" :key="memo.id">
        <div class="card shadow" @click="detail(index)" data-toggle="modal" data-target="#memo_update">
          <div class="card-body">
            <h4 class="card-title">{{memo.title}}</h4>
            <p class="card-text overflow-auto" style="height:150px;">{{memo.body}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- /一覧表示 -->
    <!-- メモ追加部分 -->
    <div class="modal fade" id="memo_store" tabindex="-1" role="dialog" aria-labelledby="memo_store_label">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="memo_store_label">メモ追加</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる" @click="clearMemo()">
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
              <input type="text" class="form-control" id="memo_title" v-model="memo.title">
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
            <button type="button" class="btn btn-secondary" id="modal_hidden" data-dismiss="modal" @click="clearMemo()">閉じる</button>
            <button type="button" class="btn btn-primary" @click="store">保存</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /メモ追加部分 -->
    <!-- メモ修正部分 -->
    <div class="modal fade" id="memo_update" tabindex="-1" role="dialog" aria-labelledby="memo_update_label">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="memo_update_label">メモ修正</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる" @click="clearMemo()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <form @submit.prevent="update">
            <div class="form-group">
              <label for="memo_title">メモタイトル</label>
              <div v-if="errors" class="errors">
                <template v-if="errors.title">
                  <div class="alert alert-danger" role="alert" v-for="msg in errors.title" :key="msg">{{ msg }}</div>
                </template>
              </div>
              <input type="text" class="form-control" id="memo_title" v-model="memo.title">
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
            <button type="button" class="btn btn-danger" id="delete_modal_hidden" data-dismiss="modal" @click="deleteMemo()">削除</button>
            <button type="button" class="btn btn-secondary" id="update_modal_hidden" data-dismiss="modal" @click="clearMemo()">閉じる</button>
            <button type="button" class="btn btn-primary" @click="update">更新</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /メモ修正部分 -->
  </div>
</template>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      memo: {
        title: '',
        body: '',
      },
      idnex: '',
    }
  },
  created () {
    this.getMemo();
    this.clearError();
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
        this.modalHidden('#modal_hidden');
        this.clearMemo();
      }
    },
    async update() {
      await this.$store.dispatch('memo/update', { 'memo': this.memo, 'index': this.index});
      if (this.apiStatus) {
        this.clearIndex();
        // 追加が正常に完了したのでモーダルを閉じる
        this.modalHidden('#update_modal_hidden');
        this.clearMemo();
      }
    },
    async deleteMemo() {
      if (null != this.index) { 
        await this.$store.dispatch('memo/delete', this.memos[this.index]);
      }
      if (this.apiStatus) {
        this.clearIndex();
        // 追加が正常に完了したのでモーダルを閉じる
        this.modalHidden('#update_modal_hidden');
        this.clearMemo();
      }
    },
    detail (index) {
      this.index = index;
      this.clearError();
      this.memo = Vue.util.extend({}, this.memos[this.index]);
    },
    clearMemo() {
      // メモ初期化
      this.memo.title = '';
      this.memo.body = '';
    },
    clearError () {
      this.$store.commit('memo/setErrorMessages', null);
    },
    clearIndex() {
      this.index = null;
    },
    modalHidden(id) {
      $(id).click();
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