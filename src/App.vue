<template>
  <div>
    <router-link to="/">All Users</router-link>
    <!-- Page rendered by router -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
};
</script>

<style></style>
