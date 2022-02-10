<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    id="searchButton"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Añadir Nuevo Usuario
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title color" id="exampleModalLabel">
            Añadir un nuevo usuario
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="cancelUser"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <AddUserFields />
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="cancelUser"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="sendNewUserToDatabase"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddUserFields from "../../components/add_user/AddUserFields.vue";
import MongoDBconn from "../../services/MongoDBconn";
import PersonVue from "../all_users/Person.vue";
export default {
  data() {
    return {
      person: PersonVue,
    };
  },
  components: {
    AddUserFields,
  },
  methods: {
    sendNewUserToDatabase() {
      let conn = new MongoDBconn();
      conn.postPerson(this.person);
    },
    cancelUser() {
      this.$store.commit("deleteUser");
    },
  },
};
</script>
<style scoped>
.modal-dialog {
  color: black;
}
</style>
