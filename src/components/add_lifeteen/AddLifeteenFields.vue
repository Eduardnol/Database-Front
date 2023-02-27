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
        <!-- Button trigger modal -->
        <button class="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button"
                @click="openResponsable1()">
          Editar Responsable 1
        </button>
        <div class="col-auto">
          <input
              v-model="lifeteen.responsable1"
              class="form-control"
              placeholder="Nombre Apellido"
              type="text"
          />
        </div>
        <!-- Modal -->
        <div id="exampleModal" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" tabindex="-1">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 id="exampleModalLabel" class="modal-title">Seleccionar Responsable</h5>
                <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
              </div>
              <div class="modal-body">
                <ListPicker ref="ListPicker"/>
              </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
                <button class="btn btn-primary" type="button" @click="saveSelectedItemsIntoVueStore()">Save changes
                </button>
              </div>
            </div>
          </div>
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
      inputResponsable1Focused: true,
      inputResponsable2Focused: true,
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
    assignToResponsable1(person) {
      console.log("Assigning to responsable 1")
      this.inputResponsable1Focused = false;
      this.lifeteen.responsable1 = {
        id: person.id,
        nombre: person.nombre,
        apellido: person.apellido
      }

    },
    saveSelectedItemsIntoVueStore() {
      //Save the items selected into vue store
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
