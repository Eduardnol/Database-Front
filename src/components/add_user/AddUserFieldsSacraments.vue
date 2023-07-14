<template>
  <div class="col-auto me-auto">
    <div class="form-check">
      <input
          id="flexCheckDefault"
          v-model="personStore.person.sacraments.bautismo"
          checked
          class="form-check-input"
          type="checkbox"
          value=""
      />
      <label class="form-check-label" for="flexCheckDefault"> Bautismo </label>
    </div>
  </div>
  <div class="col-auto me-auto">
    <div class="form-check">
      <input
          id="flexCheckDefault"
          v-model="personStore.person.sacraments.comunion"
          checked
          class="form-check-input"
          type="checkbox"
          value=""
      />
      <label class="form-check-label" for="flexCheckDefault"> Comunión </label>
    </div>
  </div>
  <div class="col-auto me-auto">
    <div class="form-check">
      <input
          id="flexCheckDefault"
          v-model="personStore.person.sacraments.confirmacion"
          checked
          class="form-check-input"
          type="checkbox"
          value=""
      />
      <label class="form-check-label" for="flexCheckDefault">
        Confirmación
      </label>
    </div>
  </div>
  <div class="col-auto me-auto">
    <div class="form-check">
      <input
          id="flexCheckDefault"
          v-model="personStore.person.sacraments.matrimonio"
          checked
          class="form-check-input"
          type="checkbox"
          value=""
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
};
</script>
<style scoped></style>
