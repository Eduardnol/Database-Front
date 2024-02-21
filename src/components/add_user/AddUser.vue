<template>
  <!-- Button trigger modal -->
  <button
      id="searchButton"
      class="align-middle"
      data-bs-target="#staticBackdrop"
      data-bs-toggle="modal"
      type="button"
  >
    <!-- Icon -->
    <i class="bi bi-plus align-middle"></i>
    Añadir Usuario
  </button>
  <!-- Modal -->
  <div
      id="staticBackdrop"
      aria-hidden="true"
      aria-labelledby="staticBackdropLabel"
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title color" id="exampleModalLabel">
            Añadir un nuevo usuario
          </h5>
          <button
              aria-label="Close"
              class="btn-close"
              data-bs-dismiss="modal"
              type="button"
              @click="cancelUser"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <AddUserFields/>
          </form>
        </div>
        <div class="modal-footer">
          <button
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              type="button"
              @click="cancelUser"
          >
            <i class="bi bi-x-circle"></i> Cancelar
          </button>
          <button
              class="btn btn-primary"
              data-bs-dismiss="modal"
              type="button"
              @click="sendNewUserToDatabase"
          >
            <i class="bi bi-cloud-arrow-up"></i> Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddUserFields from "../../components/add_user/AddUserFields.vue";
import {usePersonStore} from "../../stores/usePersonStore";
import {usePersonListStore} from "../../stores/usePersonListStore";
import peopleService from "../../services/people-service";

export default {
  setup() {
    let personStore = usePersonStore();
    let personListStore = usePersonListStore();
    personStore.$reset();
    return {
      personStore,
      personListStore,
    };
  },
  components: {
    AddUserFields,
  },
  // beforeMount() {
  //   this.$store.commit("deleteUser");
  // },
  methods: {
    sendNewUserToDatabase() {
      peopleService.postPerson(this.person_ret);
    },
    cancelUser() {
      this.personStore.$reset();
    },
  },
  computed: {
    person_ret() {
      return this.personStore.person;
    },
  },
};
</script>
<style scoped>
.modal-dialog {
  color: black;
}

.bi.bi-plus {
  font-size: 30px;
}
</style>
