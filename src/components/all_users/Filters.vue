<template>
  <div class="allfilters">
    <p>Fecha Inicial</p>
    <input v-model="beginDateBirthday" type="date" />

    <p>Fecha Final</p>
    <input v-model="endDateBirthday" type="date" />

    <p>Fecha</p>
    <input v-model="dateSaint" type="date" />
    <p>Posicion</p>
    <input type="text" v-model="tags" placeholder="tag1, tag2, tag3" />
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
      tags: "",
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
