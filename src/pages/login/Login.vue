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

import MongoDBconn from "../../services/MongoDBconn";

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const db = new MongoDBconn();
      await db.loginUser({email: this.username, password: this.password});
      // handle the response
    },
  },
};
</script>
