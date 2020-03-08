<template>
  <div>
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">サインイン</h1>
      <label for="inputEmail" class="sr-only">Emailアドレス</label>
      <input type="email" id="inputEmail" class="form-control"
         placeholder="Emailアドレス" required autofocus v-model="loginForm.email">
      <label for="inputPassword" class="sr-only">パスワード</label>
      <input type="password" id="inputPassword" class="form-control" 
          placeholder="パスワード" v-model="loginForm.password">
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
export default {
data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    async login () {
      // authストアのloginアクションを呼び出す
      await this.$store.dispatch('auth/login', this.loginForm);
      // トップページに移動する
      this.$router.push('/');
    },
  }
}
</script>
<style scoped>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>