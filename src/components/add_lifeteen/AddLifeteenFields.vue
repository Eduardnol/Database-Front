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
        <ul>
          <li
              v-for="responsable in lifeteen.responsables"
              :key="responsable.id">
            <div class="col-auto me-auto">
              <p class="form">Responsable</p>
            </div>
            <div class="col-auto">
              <p>
                  {{responsable.nombre}}
              </p>
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
        <input v-model="lifeteen.startDate" class="form-control" type="date"/>
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
      searchClient: instantMeiliSearch(
          "http://localhost:7720",
      ),
    }
  },
  computed: {
    lifeteen: {
      get() {
        return this.$store.state.lifeteen;
      },
      set(value) {
        this.$store.commit("insertDiscipulado", value);
      },
    },
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
      this.$store.commit("addAnExtraField")

    },
    fillThePersonFromParent() {

    },
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
