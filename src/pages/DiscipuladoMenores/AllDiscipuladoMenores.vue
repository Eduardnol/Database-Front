<template>
  <div class="component">
    <h2>Lista arer</h2>
    <div class="search">
      <!--      <Search/>-->
    </div>
    <div class="adduser">
      <AddDiscipuladoMenores/>
    </div>

    <button id="searchButton" class="all" @click="getAll">
      <i class="bi bi-people-fill"></i> Ver todos
    </button>
    <ul class="discipulado_menores_grid scrollable">
      <li
          v-for="discipuladoMenores in allDiscipuladoMenores"
          :key="discipuladoMenores.id"
          class="list_item"
          @click="getToPage(discipuladoMenores.id)">
        <DiscipuladoMenores :id="discipuladoMenores.id"
                            :inscritos="discipuladoMenores.numInscritos"
                            :responsable1="discipuladoMenores.responsable1.nombre + ' ' + discipuladoMenores.responsable1.apellido"
                            :responsable2="discipuladoMenores.responsable2.nombre + ' ' + discipuladoMenores.responsable2.apellido"
                            :start-date="new Date(discipuladoMenores.startDate)"
                            :title="discipuladoMenores.title"
        />
        <!-- Cambiar entre date y string -->
      </li>
    </ul>
  </div>
</template>

<script>

import MongoDBconn from "../../services/MongoDBconn";
import DiscipuladoMenores from "../../components/AllDiscipuladoMenores/DiscipuladoMenores";
import AddDiscipuladoMenores from "../../components/AddDiscipuladoMenores/AddDiscipuladoMenores";

export default {
  name: "AllDiscipuladoMenores",
  computed: {
    allDiscipuladoMenores() {
      return this.$store.state.discipuladoMenores;
    },
  },
  components: {
    AddDiscipuladoMenores,
    DiscipuladoMenores,
  },
  methods: {
    getToPage(id) {
      this.$router.push({
        name: "DiscipuladoMenoresSpecific",
        params: {
          id: id
        }
      });
    },
    getAll() {
      let search = new MongoDBconn();
      search.getAllDiscipuladoMenores().then((data) => {
        console.log(data);
        this.$store.state.discipuladoMenores = data;
      });
    },
  },
  beforeMount() {
    let search = new MongoDBconn();
    search.getAllDiscipuladoMenores().then((data) => {
      console.log(data);
      this.$store.state.discipuladoMenores = data;
    });
  },
};
</script>

<style>
@import "../../css/normalize.css";
@import "../../css/index.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.discipulado_menores_grid {
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
