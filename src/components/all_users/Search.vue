<template>
  <div id="keyword">
    <button id="searchButton" @click="getall">ALL</button>
    <button id="searchButton" @click="search">SEARCH</button>
    <input
      type="search"
      class="form-control"
      v-model="keyword"
      placeholder="Search..."
      @keypress.enter="search"
    />
  </div>
</template>
<script>
import MongoDBconn from "../../services/MongoDBconn";
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      searchButton: "",
    };
  },
  methods: {
    search() {
      let search = new MongoDBconn();
      search.searchValue(this.keyword).then((data) => {
        console.log(data), (this.$root.persons = data);
      });
    },
    getall() {
      let search = new MongoDBconn();
      search.getAllPeople().then((data) => {
        console.log(data), (this.$root.persons = data);
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

#searchButton {
  background-color: orange;
  height: 40px;
  width: 80px;
  border-radius: 5px;
  border: none;
  transition: all 0.3s;
  box-shadow: 3px 3px 5px gray;
}
#searchButton:active {
  color: white;
  background-color: darkorange;
  transform: translateY(4px);
  box-shadow: 0px 0px 0px gray;
}
</style>
