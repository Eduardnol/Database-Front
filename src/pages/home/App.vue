<template>
  <div class="component">
    <div class="search">
      <Search />
    </div>
    <div class="filters">
      <Filters />
    </div>
    <ul class="person_grid scrollable">
      <li class="list_item" v-for="person in persons" :key="person.id">
        <Person
          :id="person.id"
          :nombre="person.nombre"
          :email="person.email"
          :apellido="person.apellido"
          :apellido2="HELLO"
          :birthday="person.birthday"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Person from "../../components/all_users/Person.vue";
import Search from "../../components/all_users/Search.vue";
import Filters from "../../components/all_users/Filters.vue";

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
    Filters,
  },
};
</script>

<style>
@import "../../css/normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.component {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.logo {
  grid-area: 1 / 1 / 2 / 2;
}
.filters {
  grid-area: 2 / 5 / 6 / 6;
}
.list_item {
  list-style-type: none;
}
.search {
  grid-area: 1 / 5 / 2 / 6;
}
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.person_grid {
  display: grid;
  grid-template-columns: repeat(2, 450px);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
}
.scrollable {
  grid-area: 2 / 1 / 6 / 3;
  height: 700px; /* or any value */
  overflow-y: auto;
}
</style>
