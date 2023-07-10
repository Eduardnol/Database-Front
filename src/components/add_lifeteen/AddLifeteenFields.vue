<template>
  <div class="allfilters">
    <div class="container-md">
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Titulo</p>
        </div>
        <div class="col-auto">
          <input
              v-model="discipuladoStore.title"
              class="form-control"
              placeholder="ej: Lifeteen 2022"
              type="text"
          />
        </div>
      </div>
      <div class="row mt-3">
        <ul v-if="discipuladoStore.responsables">
          <li v-for="responsable in discipuladoStore.responsables"
              :key="responsable.id">

            <div class="col-auto me-auto">
              <p class="form">Responsable</p>
            </div>
            <div class="col-auto">
              <p> {{ responsable.nombre }}</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-auto me-auto">
        <p class="form">Fecha de Inicio</p>
      </div>
      <div class="col-auto">
        <input v-model="discipuladoStore.startDate" class="form-control" type="date"/>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";
// import MiniPerson from "./MiniPerson.vue";
import {usePersonStore} from "../../stores/usePersonStore";
import {useDiscipuladoStore} from "../../stores/useDiscipuladoStore";

export default {
  setup() {
    let personStore = usePersonStore();
    let discipuladoStore = useDiscipuladoStore();
    personStore.$reset();
    return {personStore, discipuladoStore};
  },
  name: "AddLifeteenFields",
  components: {
    // MiniPerson,
  },
  data() {
    return {
      searchClient: instantMeiliSearch(
          "http://localhost:7720",
      ),
    }
  },
  methods: {
    saveSelectedItemsIntoVueStore() {
      //Save the items selected into vue store
    },
    getCustomFieldId(element) {
      //Returns id of the element of the internal extra array
      return this.person.extras.indexOf(element);
    },
    getDateAndFormat(date) {
      return moment(String(date)).format('DD/MM/YYYY');
    },
    addCustomFields() {
      this.discipulado.addAnExtraField();

    },
    fillThePersonFromParent() {

    },
    deleteIndividualField(id) {
      console.log("The id is: " + id)
      this.discipulado.deleteFromExtraArray(id);
    }
    ,
    retrieveData() {
      return this.discipulado;
    },
    saveObjectToStore() {
      let discipuladoList = this.discipuladoStore;
      if (discipuladoList == null) {
        discipuladoList = [];
      }
      if (this.discipulado.id != null) {
        let elementToEdit = discipuladoList.find(element => element.id === this.discipulado.id);
        elementToEdit = this.discipulado
        console.log(elementToEdit);
      } else {
        discipuladoList.push(this.discipulado);
      }
      this.discipuladoStore = discipuladoList;
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
