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
import {usePersonStore} from "../../stores/usePersonStore";
import "instantsearch.css/themes/algolia-min.css";
import peopleService from "../../services/people-service";

export default {
  setup() {
    let personStore = usePersonStore();
    return {
      personStore,
    };
  },
  name: "Search",
  data() {
    return {
      keyword: "",
      searchButton: ""
    };
  },
  methods: {
    search() {
      peopleService.searchValue(this.keyword).then((data) => {
        this.personStore = data;
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
