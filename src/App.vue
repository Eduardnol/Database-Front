<template>
  <div>
    <HeaderComponent/>
    <button id="searchButton" class="all">
      <router-link to="/">All Users</router-link>
    </button>
    <button id="searchButton" class="all">
      <router-link to="/all-discipulado">All Lifeteen</router-link>
    </button>
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
