<template>
  <div id="keyword">
    <button id="searchButton" @click="search">
      <i class="bi bi-search"> SEARCH</i>
    </button>
    <ais-search-box>
      <template v-slot="{isSearchStalled, refine}">
        <input
            class="form-control"
            placeholder="Search... "
            type="search"
            @input="refine($event.currentTarget.value)"
        />
        <span :hidden="!isSearchStalled">Loading...</span>
      </template>
    </ais-search-box>
  </div>
</template>
<script>
import MongoDBconn from "../../services/MongoDBconn";

export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      searchButton: ""
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
