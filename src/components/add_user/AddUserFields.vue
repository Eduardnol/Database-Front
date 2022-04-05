<template>
  <div class="allfilters">
    <div class="container-md">
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Nombre</p>
        </div>
        <div class="col-auto">
          <input
              type="text"
              class="form-control"
              v-model="person.nombre"
              placeholder="Nombre"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Apellido1</p>
        </div>
        <div class="col-auto">
          <input
              type="text"
              class="form-control"
              v-model="person.apellido"
              placeholder="Apellido"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Apellido2</p>
        </div>
        <div class="col-auto">
          <input
              type="text"
              class="form-control"
              v-model="person.apellido2"
              placeholder="Apellido2"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Cumpleaños</p>
        </div>
        <div class="col-auto">
          <input v-model="person.birthday" class="form-control" type="date"/>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Fecha</p>
        </div>
        <div class="col-auto">
          <input v-model="person.saint" class="form-control" type="date"/>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Email</p>
        </div>
        <div class="col-auto">
          <input
              class="form-control"
              type="email"
              id="email"
              v-model="person.email"
              placeholder="ejemplo@email.com"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p class="form">Posición</p>
        </div>
        <div class="col-auto">
          <input
              type="text"
              class="form-control"
              v-model="person.tags"
              placeholder="tag1, tag2, tag3"
          />
        </div>
      </div>
      <div class="row mt-3">
        <AddUserFieldsSacraments/>
      </div>

      <div
          class="row mt-3"
          v-for="customField in person.extras"
          :key="customField.id"
      >
        <AddUserFieldsCustom :fieldId="getCustomFieldId(customField)"/>
      </div>
    </div>
  </div>
</template>
<script>
import AddUserFieldsCustom from "./AddUserFieldsCustom.vue";
import AddUserFieldsSacraments from "./AddUserFieldsSacraments.vue";
import moment from "moment";

export default {
  name: "AddUserFields",
  components: {
    AddUserFieldsCustom,
    AddUserFieldsSacraments,
  },
  computed: {
    person: {
      get() {
        return this.$store.state.person;
      },
      set(value) {
        this.$store.commit("insertUser", value);
      },
    },
  },
  methods: {
    getCustomFieldId(element) {
      //Returns id of the element of the internal extra array
      return this.person.extras.indexOf(element);
    },
    getDateAndFormat(date) {
      return moment(String(date)).format('DD/MM/YYYY');
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
