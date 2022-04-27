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
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "AddLifeteenFields",
  data() {
    return {
      lifeteen: {
        title: "",
        responsable1: "",
        responsable2: "",
        startDate: Date,
        idMonitores: Array,
        idInscritos: Array,
      }
    }
  },
  components: {},
  computed: {},
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
