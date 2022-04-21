<template>
  <div class="person">
    <div class="icon"><i class="bi bi-person-circle"></i></div>
    <div class="textinfo">
      <div class="basic">
        <p id="responsable">{{ responsable1 }}</p>
        <p id="responsable2">{{ responsable2 }}</p>
        <p id="startdate">{{ startDate.toLocaleDateString().getUTCFullYear() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lifeteen",
  props: {
    id: String,
    responsable1: String,
    responsable2: String,
    startDate: String,
    idMonitores: [],
    idInscritos: [],
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
  font-size: 20px;
  font-weight: bold;
}

#email,
#birthday {
  font-size: 13px;
  margin-top: 6px;
}

.person {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 450px;
  height: 135px;

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
