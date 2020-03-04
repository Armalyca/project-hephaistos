<template>
  <div id="login">
    <h1>Sign in</h1>
    <label>Username</label>
    <input required v-model="input.username" type="text" name="username" placeholder="Username ..."/>
    <label>Password</label>
    <input required v-model="input.password" type="password" name="password" placeholder="Password"/>
    <v-btn large color="primary"  v-on:click="login_fct()">Login</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    async login_fct (next) {
      const { username, password } = this
      try {
        const result = await this.axios.post('http://localhost:3000/api/v1/login', {
          username,
          password
        })
        this.$root.user = result.data
        next('/exercise')
      } catch (err) {
        this.errorLogin = err
      }
    }
  }

}
</script>

<style scoped>
  #login {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
  }
</style>
