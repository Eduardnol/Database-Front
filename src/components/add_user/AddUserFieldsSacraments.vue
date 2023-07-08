<template>
  <div class="col-auto me-auto">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        v-model="person.sacraments.bautismo"
        id="flexCheckDefault"
        checked
      />
      <label class="form-check-label" for="flexCheckDefault"> Bautismo </label>
    </div>
  </div>
  <div class="col-auto me-auto">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        v-model="person.sacraments.comunion"
        id="flexCheckDefault"
        checked
      />
      <label class="form-check-label" for="flexCheckDefault"> Comunión </label>
    </div>
  </div>
  <div class="col-auto me-auto">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        v-model="person.sacraments.confirmacion"
        id="flexCheckDefault"
        checked
      />
      <label class="form-check-label" for="flexCheckDefault">
        Confirmación
      </label>
    </div>
  </div>
  <div class="col-auto me-auto">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        v-model="person.sacraments.matrimonio"
        id="flexCheckDefault"
        checked
      />
      <label class="form-check-label" for="flexCheckDefault">
        Matrimonio
      </label>
    </div>
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
  name: "AddUserFieldsSacraments",
  computed: {
    person: {
      get() {
        return this.personStore;
      },
      set(value) {
        this.personStore = value;
      },
    },
  },
};
</script>
<style scoped></style>
