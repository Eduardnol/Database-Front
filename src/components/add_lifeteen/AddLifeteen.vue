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
    Añadir Lifeteen
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
          <h5 id="exampleModalLabel" class="modal-title color">
            Añadir un nuevo Lifeteen
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
            <AddLifeteenFields ref="addDiscipuladoRef"/>
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
              @click="sendNewDiscipuladoToDatabase"
          >
            <i class="bi bi-cloud-arrow-up"></i> Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MongoDBconn from "../../services/MongoDBconn";
import AddLifeteenFields from "../../components/add_lifeteen/AddLifeteenFields.vue";

export default {
  name: "AddLifeteen",
  components: {
    AddLifeteenFields,
  },
  beforeMount() {
    this.$store.commit("deleteUser");
  },
  methods: {
    sendNewDiscipuladoToDatabase() {
      this.$refs.addDiscipuladoRef.saveObjectToStore();
      let conn = new MongoDBconn();
      conn.postDiscipulado(this.$refs.addDiscipuladoRef.discipulado);
    },
    cancelUser() {
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
