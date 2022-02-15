<template>
  <div class="col-auto me-auto">
    <input
      type="text"
      class="form-control"
      v-model="person.extras.tagname"
      placeholder="Etiqueta"
    />
  </div>

  <div class="col-auto me-auto">
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="person.extras.selected"
    >
      <option disabled value="">Seleccionar Tipo</option>
      <option value="text">Texto</option>
      <option value="date">Fecha</option>
      <option value="tel">Teléfono</option>
    </select>
  </div>

  <div class="col-auto">
    <input
      :type="person.extras.selected"
      class="form-control"
      v-model="person.extras.name"
      :placeholder="person.extras.selected"
    />
  </div>
</template>
<script>
export default {
  name: "AddUserFieldsCustom",
  props: {
    id: Number,
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
};
</script>
<style scoped></style>
