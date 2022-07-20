<template>
  <div class="selector">
    <div>
      <p>All Users</p>
      <div class="userfields searchInput">
        <ais-instant-search :search-client="searchClient" index-name="users">
          <ais-configure :hits-per-page.camel="6"/>
          <ais-search-box class="searchbox">
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
          <ais-hits>
            <template v-slot="{ items }">
              <ul class="person_grid">
                <li
                    v-for="person in items"
                    :key="person.id"
                    class="list_item"
                    @click="addToSelected(person)"
                >
                  <MiniPerson
                      :id="person.id"
                      :apellido="person.apellido"
                      :apellido2="person.apellido2"
                      :nombre="person.nombre"
                  />

                </li>
              </ul>
            </template>
          </ais-hits>
        </ais-instant-search>
      </div>
    </div>
    <div>
      <p>Selected Users</p>
      <ul class="person_grid">
        <li
            v-for="person in selected"
            :key="person.id"
            class="list_item"
            @click="removeFromSelected(person)"
        >
          <MiniPerson
              :id="person.id"
              :apellido="person.apellido"
              :apellido2="person.apellido2"
              :nombre="person.nombre"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";
import MiniPerson from "../add_lifeteen/MiniPerson";


export default {
  name: "ListPicker",
  components: {
    MiniPerson
  },
  props: {
    isInscrito: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      searchClient: instantMeiliSearch(
          "http://localhost:7720",
      ),
      selected: [],
    }
  },
  methods: {
    //Adds the clicked item into the selected list
    addToSelected(person) {
      if (this.selected.find(p => p.id === person.id)) {
        this.selected = this.selected.filter(p => p.id !== person.id);
      } else {
        this.selected.push({
          id: person.id,
          nombre: person.nombre,
          apellido: person.apellido,
        });
      }
    },
    //Removes the clicked item from the selected list
    removeFromSelected(person) {
      this.selected = this.selected.filter(p => p.id !== person.id);
    },
    //Saves the selected list into the database, if its the monitor list or the inscritos list
    saveSelected(lifeteenId, isInscritos) {
      let list = this.selected;
      if (isInscritos) {
        this.$store.commit("updateInscritosList", {lifeteenId, list,});
      } else {
        this.$store.commit("updateMonitorList", {lifeteenId, list,});
      }

    },
  },
  beforeMount() {
    if (this.$props.isInscrito) {
      this.selected = this.$store.getters.getArrItemLifeTeen(this.$route.params.id).idInscritos;
    } else {
      this.selected = this.$store.getters.getArrItemLifeTeen(this.$route.params.id).idMonitores;
    }
  }
}
</script>

<style scoped>
body {
  background-image: url("../../assets/bg-footer-transparent.png");
  background-color: var(--light_blue);
  background-size: 20%;
}

.userinfo {
  display: grid;
  grid-template-columns: repeat(4, 445px);
  grid-column-gap: 35px;
  grid-row-gap: 35px;
}

.button-group {
  margin: 60px;
}

.stats {
  grid-area: 1 / 1 / 2 / 2;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info {
  grid-area: 1 / 2 / 2 / 4;
}

.searchbox {
  width: 350px;
  height: 35px;
  margin-bottom: 20px;
}

.searchInput {
  grid-area: 1 / 4 / 2 / 5;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.inscritos {
  grid-area: 2 / 1 / 2 / 2;
  margin-left: 35px;
}

.monitores {
  grid-area: 2 / 2 / 2 / 3;
}

.inscritos, .monitores {

  display: flex;
  align-items: center;
  flex-direction: column;

}

.userfields {
  background: var(--card-white);
  /*box-shadow: 0 8px 7px 0 var(--white);*/
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  -moz-backdrop-filter: blur(20px);
  -o-backdrop-filter: blur(20px);
  -ms-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-bottom: 14px;
}

.person_grid {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 350px);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  overflow: scroll;
  height: 300px;
}

.selector {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>