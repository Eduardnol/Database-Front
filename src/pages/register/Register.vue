<template>
  <div class="container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" v-model="username" class="form-control" required type="text">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" v-model="password" class="form-control" required type="password">
      </div>
      <button class="btn btn-primary" type="submit">Register</button>
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
    async register() {
      await authentication.registerAdminUser(
          {email: this.username, password: this.password}).then((response) => {
        if (response === 200) {
          this.$router.push('/');
        } else {
          alert('Invalid credentials');
        }
      });
    },
  },
};
</script>
