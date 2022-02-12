<template>
  <div class="userfields"><AddUserFields /></div>

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
export default {
  name: "UserSpecific",
  components: { AddUserFields },
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
  color: white;
}
.button-group {
  margin: 60px;
}
.userfields {
  background: rgba(255, 255, 255, 0.45);
  /*box-shadow: 0 8px 7px 0 var(--white);*/
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
@media (max-width: 600px) {
  .userfields {
    margin-right: 2%;
    margin-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
  }
}

@media (min-width: 600px) {
  .userfields {
    margin-right: 20%;
    margin-left: 20%;
    padding-top: 2%;
    padding-bottom: 2%;
  }
}
</style>
