<template>
  <div class="col-auto me-auto">
    <input type="text" class="form-control" v-model="name" placeholder="Etiqueta" />
  </div>

  <div class="col-auto me-auto">
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="selected"
    >
      <option disabled value="">Seleccionar Tipo</option>
      <option value="text">Texto</option>
      <option value="date">Fecha</option>
      <option value="tel">Teléfono</option>
    </select>
  </div>

  <div class="col-auto">
    <input :type="selected" class="form-control" v-model="name" :placeholder="selected" />
  </div>
</template>
<script>
export default {
  name: "AddUserFieldsCustom",

  data() {
    return {
      selected: "",
    };
  },
};
</script>
<style scoped></style>
