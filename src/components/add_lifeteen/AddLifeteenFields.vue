<template>
  <div class="allfilters">
    <div class="container-md">
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Titulo</p>
        </div>
        <div class="col-auto">
          <input
              v-model="lifeteen.title"
              class="form-control"
              placeholder="ej: Lifeteen 2022"
              type="text"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Responsable 1</p>
        </div>
        <div class="col-auto">
          <ais-instant-search :search-client="searchClient" index-name="users">
            <ais-configure :hits-per-page.camel="3"/>
            <ais-search-box class="searchbox">
              <template v-slot="{isSearchStalled, refine}">
                <input
                    class="form-control"
                    :placeholder="lifeteen.responsable1.nombre + lifeteen.responsable1.apellido" ,
                    type="search"
                    @input="refine($event.currentTarget.value)"
                    @focus="inputResponsable1Focused = true"
                />
                <span :hidden="!isSearchStalled">Loading...</span>
              </template>
            </ais-search-box>
            <ais-hits v-show="inputResponsable1Focused">
              <template v-slot="{ items }">
                <ul class="person_grid">
                  <li
                      v-for="person in items"
                      :key="person.id"
                      class="list_item"
                      @click="assignToResponsable1(person)"
                  >
                    <MiniPerson
                        :id="person.id"
                        :apellido="person.apellido"
                        :apellido2="person.apellido2"
                        :birthday="new Date(person.birthday)"
                        :email="person.email"
                        :nombre="person.nombre"
                    />
                  </li>
                </ul>
              </template>
            </ais-hits>
          </ais-instant-search>

        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Responsable 2</p>
        </div>
        <div class="col-auto">
          <input
              v-model="lifeteen.responsable2"
              class="form-control"
              placeholder="Nombre Apellido"
              type="text"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Fecha de Inicio</p>
        </div>
        <div class="col-auto">
          <input v-model="lifeteen.startDate" class="form-control" type="date"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";
import MiniPerson from "./MiniPerson.vue";

export default {
  name: "AddLifeteenFields",
  components: {
    MiniPerson,
  },
  data() {
    return {
      inputResponsable1Focused: false,
      inputResponsable2Focused: false,
      lifeteen: {
        id: null,
        title: "",
        responsable1: null,
        responsable2: null,
        startDate: "2001-01-20",
        numInscritos: 0,
        idMonitores: [],
        idInscritos: [],
        subgrupos: [],
      },
      searchClient: instantMeiliSearch(
          "http://localhost:7720",
      ),
    }
  },

  methods: {
    assignToResponsable1(person) {
      console.log("Assigning to responsable 1")
      this.inputResponsable1Focused = false;
      this.lifeteen.responsable1 = {
        id: person.id,
        nombre: person.nombre,
        apellido: person.apellido
      }

    },
    assignToResponsable2(person) {
      this.inputResponsable2Focused = false;
      this.lifeteen.responsable2 = {
        id: person.id,
        nombre: person.nombre,
        apellido: person.apellido
      }
    },
    getCustomFieldId(element) {
      //Returns id of the element of the internal extra array
      return this.person.extras.indexOf(element);
    }
    ,
    getDateAndFormat(date) {
      return moment(String(date)).format('DD/MM/YYYY');
    }
    ,
    addCustomFields() {
      this.$store.commit("addAnExtraField")

    }
    ,
    deleteIndividualField(id) {
      console.log("The id is: " + id)
      this.$store.commit("deleteFromExtraArray", id)
    }
    ,
    retrieveData() {
      return this.lifeteen;
    },
    saveObjectToStore() {
      let lifeteens = this.$store.getters.getLifeteens;
      if (lifeteens == null) {
        lifeteens = [];
      }
      if (this.lifeteen.id != null) {
        let elementToEdit = lifeteens.find(element => element.id === this.lifeteen.id);
        elementToEdit = this.lifeteen
        console.log(elementToEdit);
      } else {
        lifeteens.push(this.lifeteen);
      }
      this.$store.commit('updateLifeteen', lifeteens);
    }
  }
  ,
}
;
</script>
<style scoped>
.form {
  font-weight: bold;
}

.field {
  display: flex;
  flex-direction: row;
}
</style>
