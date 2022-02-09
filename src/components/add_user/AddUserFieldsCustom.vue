<template>
  <input type="text" v-model="name" placeholder="Nombre" />
  <select
    class="form-select"
    aria-label="Default select example"
    v-model="selected"
  >
    <option disabled value="">Seleccionar Tipo</option>
    <option value="text">Texto</option>
    <option value="date">Fecha</option>
  </select>
  <input :type="selected" v-model="name" :placeholder="selected" />
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
