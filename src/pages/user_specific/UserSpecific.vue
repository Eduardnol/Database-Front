<template>
  <div class="userinfo">
    <div class="userfields stats">
      <p>Identificador de Usuario: {{ this.$store.state.person.id }}</p>

      <p>Creado el: {{ this.$store.state.person.id }}</p>

      <p>Archivos: {{ this.$store.state.person.id }}</p>
      <UserFile :filename="'user-info.pdf'" />
    </div>
    <div class="userfields info"><AddUserFields /></div>
  </div>

  <div class="button-group">
    <button
      @click="
        save;
        getToPage;
      "
      type="button"
      class="btn btn-primary"
    >
      Guardar
    </button>
    <button @click="getToPage" type="button" class="btn btn-primary">
      HOME
    </button>
    <button
      type="button"
      class="btn btn-danger"
      @click="
        deleteuser;
        getToPage;
      "
    >
      Eliminar
    </button>
  </div>
</template>
<script>
import AddUserFields from "../../components/add_user/AddUserFields.vue";
import MongoDBconn from "../../services/MongoDBconn.js";
import UserFile from "../../components/file/UserFile.vue";
export default {
  name: "UserSpecific",
  components: { AddUserFields, UserFile },
  computed: {
    getPerson() {
      return this.$store.getters.getArrItem(this.$route.params.id);
    },
    save() {
      let update = new MongoDBconn();
      update.updatePerson(this.$store.state.person);
      return this.$store.commit("deleteUser");
    },
    deleteuser() {
      //update database user throught api and automatically the array
      let deletion = new MongoDBconn();
      deletion.deletePerson(this.$store.state.person.id);
      this.$store.commit("deleteFromArray", this.getPerson);
      return this.$store.commit("deleteUser");
    },
  },
  methods: {
    getToPage() {
      this.$router.push({
        name: "AllUsers",
      });
    },
  },
  beforeMount() {
    this.$store.commit("insertUser", this.getPerson);
  },
};
</script>
<style scoped>
body {
  background-image: url("../../assets/bg-footer-transparent.png");
  background-color: var(--light_blue);
  background-size: 20%;
}
.userinfo {
  display: grid;
  grid-template-columns: repeat(3);
  grid-column-gap: 35px;
  grid-row-gap: 0px;
}
.button-group {
  margin: 60px;
}
.stats {
  grid-area: 1 / 1 / 2 / 2;
  margin-left: 35px;
}
.info {
  grid-area: 1 / 2 / 2 / 3;
  margin-right: 35px;
}
.userfields {
  background: var(--card-white);
  /*box-shadow: 0 8px 7px 0 var(--white);*/
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  -moz-backdrop-filter: blur(20px);
  -o-backdrop-filter: blur(20px);
  -ms-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-bottom: 14px;
}
</style>
