<template>
  <div class="allfilters">
    <p><i class="bi bi-calendar3-range"></i>Fecha Inicial</p>
    <input v-model="beginDateBirthday" class="form-control" type="date" />

    <p><i class="bi bi-calendar3-range"></i>Fecha Final</p>
    <input v-model="endDateBirthday" class="form-control" type="date" />

    <p><i class="bi bi-calendar3-range"></i>Fecha</p>
    <input v-model="dateSaint" class="form-control" type="date" />

    <p><i class="bi bi-tag-fill"></i>Posición</p>

    <input
      type="text"
      v-model="tags"
      class="form-control"
      placeholder="tag1, tag2, tag3"
    />
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
  background: var(--card-white);
  /*box-shadow: 0 8px 7px 0 var(--white);*/
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: grid;
  grid-template-columns: repeat(2, 180px);
  grid-column-gap: 100px;
  grid-row-gap: 50px;
  padding-bottom: 14px;
  padding-top: 14px;
}

.field {
  display: flex;
  flex-direction: row;
}
</style>
