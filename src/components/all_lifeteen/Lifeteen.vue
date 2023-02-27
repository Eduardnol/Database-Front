<template>
  <div class="lifeteen">
    <div class="icon"><i class="bi bi-people-fill"></i></div>
    <div class="textinfo">
      <h1 class="title">{{ title }}</h1>
      <div class="basic">
<!--        <p id="responsable">Responsable: {{ responsables[0] }}</p>-->
<!--        <p id="responsable2">Responsable: {{ responsables[1] }}</p>-->
      </div>
    </div>
    <div class="inscriptionsTotal">
      <p class="inscriptionNum">{{ inscritos }}</p>
      <p>Inscritos</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Lifeteen",
  props: {
    id: String,
    title: String,
    responsables: [],
    startDate: Date,
    inscritos: Number,
    idMonitores: [],
    idInscritos: [],
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basic {
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  gap: 10px;
  font-size: 15px;
  font-weight: bold;
}

.title {
  margin-top: 3px;
  margin-bottom: 3px;

}

.inscriptionNum {
  font-size: 20px;
  font-weight: bold;
}

.lifeteen {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 450px;
  height: 135px;
  padding: 2px;

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

.icon {
  margin: 15px;
  height: 100px;
  width: 100px;
  background-color: var(--orange);
  border-radius: 50%;
  display: inline-block;
  font-size: 70px;
  text-align: center;
  justify-content: center;
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
