<template>
  <div>
    <Header/>
    <router-link to="/">All Users</router-link>
    <router-link to="/all-lifeteen">All Lifeteen</router-link>
    <!-- Page rendered by router -->
    <router-view/>
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

<style>
:root {
  overflow: hidden;
}
</style>
