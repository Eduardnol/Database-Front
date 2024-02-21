<template>
  <div>
    <HeaderComponent/>
    <button id="searchButton" class="btn btn-primary" @click="gotoAllUsers">
      All Users
    </button>
    <button id="searchButton" class="btn btn-primary" @click="gotoAllDiscipulado">
      All Discipulado
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
  methods: {
    gotoAllUsers() {
      this.$router.push("/");
    },
    gotoAllDiscipulado() {
      this.$router.push("/all-discipulado");
    },
  },
};
</script>

<style>
:root {
  overflow: hidden;
}
</style>
