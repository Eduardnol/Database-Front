<template>
  <div class="component">
    <h2>Lista arer</h2>
    <div class="search">
      <!--      <Search/>-->
    </div>
    <div class="adduser">
      <AddLifeteen/>
    </div>

    <button id="searchButton" class="all" @click="getAll">
      <i class="bi bi-people-fill"></i> Ver todos
    </button>
    <ul class="lifeteen_grid scrollable">
      <li
          v-for="lifeteen in allLifeteen"
          :key="lifeteen.id"
          class="list_item"
          @click="getToPage(lifeteen.id)">
        <Lifeteen :id="lifeteen.id"
                  :inscritos="lifeteen.numInscritos"
                  :responsable1="lifeteen.responsable1"
                  :responsable2="lifeteen.responsable2"
                  :start-date="new Date(lifeteen.startDate)"
                  :title="lifeteen.title"
        />
        <!-- Cambiar entre date y string -->
      </li>
    </ul>
  </div>
</template>

<script>

import MongoDBconn from "../../services/MongoDBconn";
import Lifeteen from "../../components/all_lifeteen/Lifeteen";
import AddLifeteen from "../../components/add_lifeteen/AddLifeteen";

export default {
  name: "AllLifeteen",
  computed: {
    allLifeteen() {
      return this.$store.state.lifeteens;
    },
  },
  components: {
    Lifeteen,
    AddLifeteen,
  },
  methods: {
    getToPage(id) {
      this.$router.push({
        name: "Lifeteen",
        params: {
          id: id
        }
      });
    },
    getAll() {
      let search = new MongoDBconn();
      search.getAllLifeteen().then((data) => {
        console.log(data);
        this.$store.state.lifeteens = data;
      });
    },
  },
  beforeMount() {
    let search = new MongoDBconn();
    search.getAllLifeteen().then((data) => {
      console.log(data);
      this.$store.state.lifeteens = data;
    });
  },
};
</script>

<style>
@import "../../css/normalize.css";
@import "../../css/index.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.lifeteen_grid {
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
</style>
