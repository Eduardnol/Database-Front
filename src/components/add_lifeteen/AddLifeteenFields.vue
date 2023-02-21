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
          <input
              v-model="lifeteen.responsable1"
              class="form-control"
              placeholder="Nombre Apellido"
              type="text"
          />

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

export default {
  name: "AddLifeteenFields",
  data() {
    return {
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
