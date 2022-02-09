<template>
  <div class="allfilters">
    <p>Nombre</p>
    <input type="text" v-model="name" placeholder="Nombre" />
    <p>Apellido1</p>
    <input type="text" v-model="surname" placeholder="Apellido" />
    <p>Apellido2</p>
    <input type="text" v-model="surname2" placeholder="Apellido2" />
    <p>Cumpleaños</p>
    <input v-model="birthday" type="date" />
    <p>Fecha</p>
    <input v-model="saint" type="date" />
    <p>Posicion</p>
    <input type="text" v-model="tags" placeholder="tag1, tag2, tag3" />
  </div>
</template>
<script>
export default {
  name: "AddUserFields",
  data() {
    return {
      name: "",
      surname: "",
      surname2: "",
      birthday: "",
      saint: "",
      tags: "",
    };
  },
};
</script>
<style scoped>
.allfilters {
  display: grid;
  grid-template-columns: repeat(2, 180px);
  grid-column-gap: 100px;
  grid-row-gap: 50px;
}
.field {
  display: flex;
  flex-direction: row;
}
</style>
