<template>
  <div class="allfilters">
    <div class="container-md">
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p>Nombre</p>
        </div>
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            v-model="name"
            placeholder="Nombre"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p>Apellido1</p>
        </div>
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            v-model="surname"
            placeholder="Apellido"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p>Apellido2</p>
        </div>
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            v-model="surname2"
            placeholder="Apellido2"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p>Cumpleaños</p>
        </div>
        <div class="col-auto">
          <input v-model="birthday" class="form-control" type="date" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p>Fecha</p>
        </div>
        <div class="col-auto">
          <input v-model="saint" class="form-control" type="date" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p>Email</p>
        </div>
        <div class="col-auto">
          <input class="form-control" type="email" id="email" v-model="email" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-auto me-auto">
          <p>Posicion</p>
        </div>
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            v-model="tags"
            placeholder="tag1, tag2, tag3"
          />
        </div>
      </div>
      <div class="row mt-3">
        <AddUserFieldsCustom />
      </div>
    </div>
  </div>
</template>
<script>
import AddUserFieldsCustom from "./AddUserFieldsCustom.vue";
export default {
  name: "AddUserFields",
  data() {
    return {
      name: "",
      surname: "",
      surname2: "",
      birthday: "",
      email: "",
      saint: "",
      tags: "",
    };
  },
  components: {
    AddUserFieldsCustom,
  },
};
</script>
<style scoped>
.field {
  display: flex;
  flex-direction: row;
}
</style>
