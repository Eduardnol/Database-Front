<template>
  <div class="allfilters">
    <div class="container-md">
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Titulo</p>
        </div>
        <div class="col-auto">
          <input
              v-model="lifeteen.nombre"
              class="form-control"
              placeholder="Nombre"
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
              placeholder="Apellido"
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
              placeholder="Apellido2"
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
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Número Inscritos</p>
        </div>
        <div class="col-auto">
          <input v-model="lifeteen.numInscritos" class="form-control" type="date"/>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Monitores</p>
        </div>
        <div class="col-auto">

        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Niños</p>
        </div>
        <div class="col-auto">

        </div>
      </div>
      <div class="row mt-3">
        <button class="btn btn-primary" @click="addCustomFields">Add</button>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "AddLifeteenFields",
  components: {},
  computed: {
    person: {},
  },
  props: {
    lifeteen: {
      id: String,
      title: String,
      responsable1: String,
      responsable2: String,
      startDate: Date,
      numINscritos: Number,
      idMonitores: Array,
      idInscritos: Array,

    }
  },
  methods: {
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
    deleteIndividualField(id) {
      console.log("The id is: " + id)
      this.$store.commit("deleteFromExtraArray", id)
    }
  },
};
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
