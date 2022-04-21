<template>
  <div class="component">
    <h2>Lista Lifeteen</h2>
    <div class="search">
      <Search/>
    </div>
    <div class="adduser">
      <AddLifeteen/>
    </div>

    <button id="searchButton" class="all" @click="getall">
      <i class="bi bi-people-fill"></i> Ver todos
    </button>
    <ul class="lifeteen_grid scrollable">
      <li
          v-for="lifeteen in alLifeteen"
          :key="lifeteen.id"
          class="list_item"
          @click="getToPage(lifeteen.id)">
        <Lifeteen/><!-- Cambiar entre date y string -->
      </li>
    </ul>
  </div>
</template>

<script>

import MongoDBconn from "../../services/MongoDBconn";
import Lifeteen from "../../components/all_lifeteen/Lifeteen";

export default {
  name: "Lifeteen",
  computed: {},
  components: {
    Lifeteen,
  },
  methods: {},
  beforeMount() {
    let search = new MongoDBconn();
    search.getAllLifeteen().then((data) => {
      console.log(data), (this.$store.state.persons = data);
    });
  },
};
</script>

<style>
@import "../../css/normalize.css";
@import "../../css/index.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

</style>
