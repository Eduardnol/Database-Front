<template>
  <div>
    <HeaderComponent/>
    <router-link to="/">All Users</router-link>
    <router-link to="/all-lifeteen">All Lifeteen</router-link>
    <!-- Page rendered by router -->
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from "/src/components/header/HeaderComponent.vue";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    HeaderComponent,
  },
};
</script>

<style>
:root {
  overflow: hidden;
}
</style>
