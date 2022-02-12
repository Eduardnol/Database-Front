<template>
  <div><AddUserFields /></div>

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
</style>
