<template>
  <div><AddUserFields /></div>
  <button @click="save" type="button" class="btn btn-primary">Guardar</button>
  <button type="button" class="btn btn-danger" @click="deleteUser">
    Eliminar
  </button>
</template>
<script>
import AddUserFields from "../../components/add_user/AddUserFields.vue";
export default {
  name: "UserSpecific",
  components: { AddUserFields },
  computed: {
    getPerson() {
      return this.$store.getters.getArrItem(this.$route.params.id);
    },
    save() {
      //update database user throught api and automatically the array
      this.$store.commit("deleteUser");
      return null;
    },
    delteuser() {
      return null;
    },
  },
  beforeMount() {
    this.$store.commit("insertUser", this.getPerson);
  },
};
</script>
<style lang="stylus" scoped></style>
