<template>
  <div class="person">
    <div class="basic">
      <p id="name">{{ nombre }}</p>
      <p id="surname">{{ apellido }}</p>
    </div>
    <p id="email">{{ email }}</p>
    <p id="birthday">{{ birthday }}</p>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    id: String,
    nombre: String,
    apellido: String,
    email: String,
    birthday: Date,
    saint: Date,
    dni: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basic {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
}

.person {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
