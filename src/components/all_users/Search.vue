<template>
  <div id="keyword">
    <button id="searchButton" @click="search">
      <i class="bi bi-search"> SEARCH</i>
    </button>
    <ais-instant-search :search-client="searchClient" index-name="users">
      <ais-search-box class="form-control"/>
    </ais-instant-search>
    <!--    <input-->
    <!--        type="search"-->
    <!--        class="form-control"-->
    <!--        v-model="keyword"-->
    <!--        placeholder="Search... "-->
    <!--        @keypress.enter="search"-->
    <!--    />-->
  </div>
</template>
<script>
import MongoDBconn from "../../services/MongoDBconn";
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";

export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      searchButton: "",
      searchClient: instantMeiliSearch(
          "http://localhost:7720",
      ),
    };
  },
  methods: {
    search() {
      let search = new MongoDBconn();
      search.searchValue(this.keyword).then((data) => {
        console.log(data), (this.$store.state.persons = data);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#keyword {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

#keyword input {
  height: 40px;
  width: 50%;
  border: none;
  margin-left: 10px;
  border-radius: 5px;
}

#searchButton:active {
  color: white;
  background-color: darkorange;
  transform: translateY(4px);
  box-shadow: 0px 0px 0px gray;
}
</style>
