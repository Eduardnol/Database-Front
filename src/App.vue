<template>
  <div class="component">
    <Search />
    <ul>
      <li v-for="person in persons" :key="person.id">
        <Person
          :id="person.id"
          :nombre="person.nombre"
          :apellido="person.apellido"
          :birthday="person.birthday"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Person from "./components/all_users/Person.vue";
import Search from "./components/all_users/Search.vue";

export default {
  name: "App",
  data() {
    return {
      persons: [],
    };
  },
  components: {
    Person,
    Search,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
