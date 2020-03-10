<template>
  <div>
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">サインイン</h1>
      <div v-if="loginErrors" class="errors">
        <ul v-if="loginErrors.email">
          <li v-for="msg in loginErrors.email" :key="msg">{{ msg }}</li>
        </ul>
        <ul v-if="loginErrors.password">
          <li v-for="msg in loginErrors.password" :key="msg">{{ msg }}</li>
        </ul>
      </div>
      <div class="my-1">
        <label for="inputEmail" class="sr-only">Emailアドレス</label>
        <input type="text" id="inputEmail" class="form-control"
          placeholder="Emailアドレス" autofocus v-model="loginForm.email">
      </div>
      <div class="my-1">
        <label for="inputPassword" class="sr-only">パスワード</label>
        <input type="password" id="inputPassword" class="form-control" 
            placeholder="パスワード" v-model="loginForm.password">
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="rememberCheck">
        <label class="form-check-label" for="rememberCheck">
          状態を記憶する
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">サインイン</button>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
    }
  },
  created () {
    this.clearError();
  },
  methods: {
    async login () {
      // authストアのloginアクションを呼び出す
      await this.$store.dispatch('auth/login', this.loginForm);
      if (this.apiStatus) {
      // トップページに移動する
        this.$router.push('/');
      }
    },
    clearError () {
      this.$store.commit('auth/setLoginErrorMessages', null);
    },
  },
  computed: {
    ...mapState({
      apiStatus: state => state.auth.apiStatus,
      loginErrors: state => state.auth.loginErrorMessages
    })
  },
}
</script>
