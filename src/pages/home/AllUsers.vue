<template>
  <div class="component">
    <h2>Usuarios Registrados</h2>
    <div class="search">
      <Search/>
    </div>
    <div class="adduser">
      <AddUser/>
    </div>
    <div class="filters">
      <Filters/>
    </div>

    <div class="dropdown order">
      <button
          class="btn btn-secondary dropdown-toggle dropButton"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
      >
        <i class="bi bi-sort-alpha-down"></i> Ordenar
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" @click="orderByName">Nombre</a></li>
        <li><a class="dropdown-item" @click="orderBySurname">Apellido</a></li>
        <li>
          <a class="dropdown-item" @click="orderByBirth">Fecha de Nacimiento</a>
        </li>
      </ul>
    </div>
    <button id="searchButton" class="all" @click="getall">
      <i class="bi bi-people-fill"></i> Ver todos
    </button>
    <ul class="person_grid scrollable">
      <li
          class="list_item"
          v-for="person in allPerson"
          :key="person.id"
          @click="getToPage(person.id)"
      >
        <Person
            :id="person.id"
            :nombre="person.nombre"
            :email="person.email"
            :apellido="person.apellido"
            :apellido2="person.apellido2"
            :birthday="new Date(person.birthday)"
        /><!-- Cambiar entre date y string -->
      </li>
    </ul>
  </div>
</template>

<script>
import Person from "../../components/all_users/Person.vue";
import Search from "../../components/all_users/Search.vue";
import Filters from "../../components/all_users/Filters.vue";
import AddUser from "../../components/add_user/AddUser.vue";
import MongoDBconn from "../../services/MongoDBconn";

export default {
  name: "AllUsers",
  computed: {
    allPerson() {
      return this.$store.state.persons;
    },
  },
  components: {
    Person,
    Search,
    Filters,
    AddUser,
  },
  methods: {
    getToPage(identificator) {
      this.$router.push({
        name: "UserSpecific",
        params: {id: identificator},
      });
    },
    getall() {
      let search = new MongoDBconn();
      search.getAllPeople().then((data) => {
        console.log(data), (this.$store.state.persons = data);
      });
    },
    orderByName() {
      console.log("Order By Name");
      let search = new MongoDBconn();
      search.getAllPeopleOrder("name", "asc").then((data) => {
        console.log(data);
        this.$store.state.persons = data;
      });
    },
    orderBySurname() {
      console.log("Order By Surname");
      let search = new MongoDBconn();
      search.getAllPeopleOrder("surname", "asc").then((data) => {
        console.log(data);
        this.$store.state.persons = data;
      });
    },
    orderByBirthday() {
      console.log("Order by birth");
    },
  },
  beforeMount() {
    let search = new MongoDBconn();
    search.getAllPeople().then((data) => {
      console.log(data), (this.$store.state.persons = data);
    });
  },
};
</script>

<style scoped>
@import "../../css/normalize.css";
@import "../../css/index.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#searchButton:active {
  color: white;
  background-color: darkorange;
  transform: translateY(4px);
  box-shadow: 0px 0px 0px gray;
}

body {
  background-image: url("../../assets/bg-footer-transparent.png");
  background-color: var(--light_blue);
  background-size: 20%;
  color: var(--text-black);
}

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

.all {
  grid-area: 1 / 2 / 2 / 3;
  justify-self: end;
}

.order {
  grid-area: 1 / 2 / 2 / 3;
  justify-self: start;
}

.list_item {
  list-style-type: none;
}

.search {
  grid-area: 1 / 5 / 2 / 6;
}

.adduser {
  grid-area: 1 / 3 / 2 / 4;
}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.person_grid {
  display: grid;
  grid-template-columns: repeat(2, 450px);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
}

.scrollable {
  grid-area: 2 / 1 / 6 / 3;
  height: 800px; /* or any value */
  overflow-y: auto;
  margin: 0px;
}

h2 {
  font-weight: bold;
  max-width: 600px;
  margin: 0px;
  align-self: center;
}
</style>
