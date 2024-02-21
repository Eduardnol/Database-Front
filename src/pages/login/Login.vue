<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" v-model="username" class="form-control" required type="text">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" v-model="password" class="form-control" required type="password">
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </div>
</template>

<script>

import authentication from "../../services/Authentication";

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
 methods: {
  async login() {
    await authentication.loginUser({email: this.username, password: this.password}).then((response) => {
      if (response === 200) {
        this.$router.push('/');
      } else {
        console.error('Invalid credentials')
        alert('Invalid credentials');
      }
    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        // The server responded with a status of 401, which means the login credentials were incorrect
        alert('Wrong email or password');
      } else {
        // Some other error occurred
        console.error(error);
        alert('An error occurred while trying to log in');
      }
    });
  },
},
};
</script>
