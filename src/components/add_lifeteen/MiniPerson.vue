<template>
  <div class="person">
    <div class="textinfo">
      <div class="basic">
        <p id="name">{{ nombre }}</p>
        <p id="surname">{{ apellido }}</p>
        <p id="surname2">{{ apellido2 }}</p>
      </div>
      <p>{{ id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniPerson",
  props: {
    id: String,
    nombre: String,
    apellido: String,
    apellido2: String,
    email: String,
    birthday: Date,
    saint: Date,
    dni: String,
    extras: [],
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.basic {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  font-size: 10px;
  font-weight: bold;
}

.person {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 350px;
  height: 35px;

  background: var(--card-white);
  /*box-shadow: 0 8px 7px 0 var(--white);*/
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  -webkit-transition: all 200ms ease-in-out;
  -moz-transition: all 200ms ease-in-out;
  -ms-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;
}

.person:hover {
  transform: scaleY(1);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 1px 3px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.textinfo {
  flex-grow: 2;
  justify-self: right;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
