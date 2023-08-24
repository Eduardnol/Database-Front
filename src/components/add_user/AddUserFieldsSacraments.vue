<template>
  <div v-for="sacraments in personStore.person.sacraments" :key="sacraments.name">
    <div class="col-auto me-auto">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ sacraments.name }}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{{ sacraments.temple }}</h6>
          <h6 class="card-subtitle mb-2 text-body-secondary">{{ sacraments.date }}</h6>
        </div>
      </div>
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
