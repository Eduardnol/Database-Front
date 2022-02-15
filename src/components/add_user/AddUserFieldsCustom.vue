<template>
  <div class="col-auto me-auto">
    <input
      type="text"
      class="form-control"
      v-model="extras[this.fieldId].tagname"
      placeholder="Etiqueta"
    />
  </div>

  <div class="col-auto me-auto">
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="extras[this.fieldId].selected"
    >
      <option disabled value="">Seleccionar Tipo</option>
      <option value="text">Texto</option>
      <option value="date">Fecha</option>
      <option value="tel">Teléfono</option>
    </select>
  </div>

  <div class="col-auto">
    <input
      :type="extras[this.fieldId].selected"
      class="form-control"
      v-model="extras[this.fieldId].name"
      :placeholder="extras[this.fieldId].selected"
    />
  </div>
</template>
<script>
export default {
  name: "AddUserFieldsCustom",
  computed: {
    extras: {
      get() {
        //Returns the extra field of a person
        return this.$store.state.person.extras;
      },
      set(value) {
        this.$store.commit("addAnExtraField", value);
      },
    },
  },
  props: {
    fieldId: Number,
  },
};
</script>
<style scoped></style>
