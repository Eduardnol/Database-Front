<template>

  <ais-instant-search :search-client="searchClient" index-name="users">
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
            id="dropdownMenuButton1"
            aria-expanded="false"
            class="btn btn-secondary dropdown-toggle dropButton"
            data-bs-toggle="dropdown"
            type="button"
        >
          <i class="bi bi-sort-alpha-down"></i> Ordenar
        </button>
        <ul aria-labelledby="dropdownMenuButton1" class="dropdown-menu">
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
      <div class="scrollable">
        <ais-hits>
          <template v-slot="{ items }">
            <ul class="person_grid">
              <li
                  v-for="person in items"
                  :key="person.id"
                  class="list_item"
                  @click="getToPage(person.id)"
              >
                <Person
                    :id="person.id"
                    :apellido="person.apellido"
                    :apellido2="person.apellido2"
                    :birthday="new Date(person.birthday)"
                    :email="person.email"
                    :nombre="person.nombre"
                /><!-- Cambiar entre date y string -->
              </li>
            </ul>
          </template>
        </ais-hits>
      </div>
    </div>
  </ais-instant-search>

</template>

<script>
import Person from "../../components/all_users/Person.vue";
import Search from "../../components/all_users/Search.vue";
import Filters from "../../components/all_users/FiltersComponent.vue";
import AddUser from "../../components/add_user/AddUser.vue";
import MongoDBconn from "../../services/MongoDBconn";
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";

export default {
  name: "AllUsers",
  data() {
    return {
      searchClient: instantMeiliSearch(
          "http://localhost:7720",
      ),
    }
  },
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
        //params: {id: identificator},
        query: {id: identificator},
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

@media (max-width: 1200px) {
  .component {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .logo {
    grid-area: 1 / 1 / 1 / 2;
  }

  .filters {
    grid-area: 2 / 5 / 2 / 5;

  }

  .all {
    grid-area: 1 / 2 / 1 / 2;
    justify-self: end;
  }

  .order {
    grid-area: 1 / 3 / 1 / 3;
    justify-self: start;
  }

  .search {
    grid-area: 1 / 5 / 1 / 5;
  }

  .adduser {
    grid-area: 1 / 4 / 1 / 4;
  }

  .person_grid {
    display: grid;
    grid-template-columns: repeat(1, 450px);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
  }

  .scrollable {
    grid-area: 2 / 1 / 5 / 5;
    height: 800px; /* or any value */
    overflow-y: auto;
    margin: 0px;
  }
}


@media (min-width: 1200px) {
  .component {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .logo {
    grid-area: 1 / 1 / 1 / 2;
  }

  .filters {
    grid-area: 2 / 5 / 2 / 5;

  }

  .all {
    grid-area: 1 / 2 / 1 / 2;
    justify-self: end;
  }

  .order {
    grid-area: 1 / 3 / 1 / 3;
    justify-self: start;
  }

  .search {
    grid-area: 1 / 5 / 1 / 5;
  }

  .adduser {
    grid-area: 1 / 4 / 1 / 4;
  }

  .person_grid {
    display: grid;
    grid-template-columns: repeat(1, 450px);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
  }

  .scrollable {
    grid-area: 2 / 1 / 5 / 5;
    height: 800px; /* or any value */
    overflow-y: auto;
    margin: 0px;
  }
}


@media (min-width: 1505px) {
  .component {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .logo {
    grid-area: 1 / 1 / 1 / 2;
  }

  .filters {
    grid-area: 2 / 5 / 2 / 5;

  }

  .all {
    grid-area: 1 / 2 / 1 / 2;
    justify-self: end;
  }

  .order {
    grid-area: 1 / 3 / 1 / 3;
    justify-self: start;
  }

  .search {
    grid-area: 1 / 5 / 1 / 5;
  }

  .adduser {
    grid-area: 1 / 4 / 1 / 4;
  }

  .person_grid {
    display: grid;
    grid-template-columns: repeat(2, 450px);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
  }

  .scrollable {
    grid-area: 2 / 1 / 6 / 5;
    height: 800px; /* or any value */
    overflow-y: auto;
    margin: 0px;
  }
}


@media (min-width: 1900px) {
  .component {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .logo {
    grid-area: 1 / 1 / 1 / 2;
  }


  .all {
    grid-area: 1 / 2 / 1 / 2;
    justify-self: end;
  }

  .order {
    grid-area: 1 / 3 / 1 / 3;
    justify-self: start;
  }

  .search {
    grid-area: 1 / 5 / 1 / 5;
  }

  .adduser {
    grid-area: 1 / 4 / 1 / 4;
  }

  .person_grid {
    display: grid;
    grid-template-columns: repeat(3, 450px);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
  }

  .scrollable {
    grid-area: 2 / 1 / 6 / 5;
    height: 800px; /* or any value */
    overflow-y: auto;
    margin: 0px;
  }

  .filters {
    grid-area: 2 / 5 / 6 / 5;
  }
}


.list_item {
  list-style-type: none;
}


#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


h2 {
  font-weight: bold;
  max-width: 600px;
  margin: 0px;
  align-self: center;
}
</style>
