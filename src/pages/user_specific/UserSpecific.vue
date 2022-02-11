<template>
  <div><AddUserFields /></div>

  <div class="button-group">
    <button @click="save" type="button" class="btn btn-primary">Guardar</button>
    <button type="button" class="btn btn-danger" @click="deleteuser">
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
      this.$store.commit("deleteUser");
      return null;
    },
    deleteuser() {
      //update database user throught api and automatically the array
      let deletion = new MongoDBconn();
      deletion.deletePerson(this.$store.state.person.id);
      this.$store.commit("deleteFromArray", this.getPerson);
      this.$store.commit("deleteUser");
      return null;
    },
  },
  beforeMount() {
    this.$store.commit("insertUser", this.getPerson);
  },
};
</script>
<style scoped>
.button-group {
  margin: 60px;
}
</style>
