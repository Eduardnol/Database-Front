<template>
  <div class="col-auto me-auto">
    <input
        v-model="extras[this.fieldId].tagname"
        class="form-control"
        placeholder="Etiqueta"
        type="text"
    />
  </div>

  <div class="col-auto me-auto">
    <select
        v-model="extras[this.fieldId].selected"
        aria-label="Default select example"
        class="form-select"
    >
      <option disabled value="">Seleccionar Tipo</option>
      <option value="text">Texto</option>
      <option value="date">Fecha</option>
      <option value="tel">Teléfono</option>
    </select>
  </div>

  <div class="col-auto">
    <input
        v-model="extras[this.fieldId].name"
        :placeholder="extras[this.fieldId].selected"
        :type="extras[this.fieldId].selected"
        class="form-control"
    />
  </div>
  <div class="col-auto" @click="$emit('deleteindiv', this.fieldId)">
    <i class="deletebutton bi bi-x-circle"></i>
  </div>
</template>
<script>
import {usePersonStore} from "../../stores/usePersonStore";

export default {
  setup() {
    let personStore = usePersonStore();
    return {
      personStore,
    };
  },
  name: "AddUserFieldsCustom",
  emits: ['deleteindiv'],
  computed: {
    extras: {
      get() {
        //Returns the extra field of a person
        return this.personStore.extras;
      },
      set() {
        this.personStore.addAnExtraField();
      },
    }
  },
  props: {
    fieldId: Number,
  },
};
</script>
<style scoped>
.deletebutton {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
