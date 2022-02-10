<template>
  <div>
    <Header />
    <!-- <router-link to="/">All Users</router-link>-->
    <!-- Page rendered by router -->
    <router-view />
  </div>
</template>

<script>
import Header from "/src/components/header/Header.vue";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style></style>
