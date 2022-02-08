<template>
  <div class="allfilters">
    <p>Fecha Inicial</p>
    <input v-model="beginDateBirthday" type="date" />

    <p>Fecha Final</p>
    <input v-model="endDateBirthday" type="date" />

    <p>Fecha</p>
    <input v-model="dateSaint" type="date" />
  </div>
</template>

<script>
export default {
  name: "Filter",
  data() {
    return {
      beginDateBirthday: "",
      endDateBirthday: "",
      dateSaint: "",
    };
  },
};
</script>
<style scoped>
.allfilters {
  display: grid;
  grid-template-columns: repeat(2, 180px);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
}
.field {
  display: flex;
  flex-direction: row;
}
</style>
