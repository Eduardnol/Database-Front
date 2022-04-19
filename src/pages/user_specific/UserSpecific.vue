<template>
  <div class="userinfo">
    <div class="userfields stats">
      <h5>Identificador de Usuario: {{ person.id }}</h5>

      <h5>Creado el: {{
          getDateAndFormat(person.createdOn)
        }}</h5>

      <h5>Archivos:</h5>

      <ul>
        <li
            v-for="file in person.fileStorage"
            :key="file.url"
            class="list_item">
          <UserFile :filename="file.name" :url="file.url"
                    @deleteUserFile="deleteFile"/>
        </li>
      </ul>
      <!--add a file uploader button-->
      <div class="d-inline">
        <input id="formFile" ref="file" class="form-control" type="file">
      </div>
      <button class="btn btn-primary d-inline" @click="addFile">Subir</button>


    </div>
    <div class="userfields info">
      <AddUserFields/>
    </div>
  </div>

  <div class="button-group">
    <button
        class="btn btn-primary m-1"
        type="button"
        @click="saveIntoDatabase"
    >
      <i class="bi bi-cloud-arrow-up"></i> Guardar
    </button>
    <button type="button" class="btn btn-primary m-1" data-bs-toggle="modal"
            data-bs-target="#dismiss">
      <i class="bi bi-house"></i> HOME
    </button>
    <button
        class="btn btn-danger m-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        type="button"
    >
      <i class="bi bi-trash3"></i> Eliminar
    </button>
  </div>
  <div class="modal" id="exampleModal" aria-labelledby="exampleModalLabel" tabindex="-1"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmar Eliminación</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
                  aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Desea eliminar este usuario?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-danger"
                  @click="deleteuser"
                  data-bs-dismiss="modal">Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" id="dismiss" aria-labelledby="dismiss" tabindex="-1"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmar Descarte</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
                  aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Desea descartar este usuario?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Seguir Editando
          </button>
          <button type="button" class="btn btn-warning"
                  @click="getToPage"
                  data-bs-dismiss="modal">Descartar Cambios
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddUserFields from "../../components/add_user/AddUserFields.vue";
import MongoDBconn from "../../services/MongoDBconn.js";
import UserFile from "../../components/file/UserFile.vue";
import moment from "moment";

export default {
  name: "UserSpecific",
  components: {AddUserFields, UserFile},
  computed: {
    person: {
      get() {
        return this.$store.state.person;
      },
      set(value) {
        this.$store.commit("insertUser", value);
      },
    },
  },
  methods: {
    //this will delete the working state person and return to the user home
    getToPage() {
      this.$router.push({
        name: "AllUsers",
      });
    },
    //Saves into the database the user we just updated
    saveIntoDatabase() {
      let update = new MongoDBconn();
      update.updatePerson(this.person);
      // this.$store.commit("updateView", this.person); //Updates the view of all results on main page
      this.getToPage();
    },
    deleteuser() {
      //update database user throught api and automatically the array
      let deletion = new MongoDBconn();
      deletion.deletePerson(this.$store.state.person.id);
      this.$store.commit("deleteFromArray", this.person);
      this.getToPage();
    },
    addFile() {
      let file = this.$refs.file.files[0];
      if (file != null) {

        let upload = new MongoDBconn();
        let resultStatus = upload.uploadFile(this.$store.state.person.id, file);
        resultStatus.then(data => {
          console.log("The data fetched is" + data.details.url);
          let filename = data.details.name;
          let fileUrl = data.details.url;
          console.log("the vairable is " + fileUrl);
          this.$store.commit("addFile", {filename, fileUrl,});

        })


        //show confirmation and reload page
      }
    },
    deleteFile(fileName, fileurl) {
      let deleteFile = new MongoDBconn();
      deleteFile.deleteFile(this.person.id, fileName)
      this.$store.commit("deleteFile", fileurl);
    },
    getDateTimeAndFormat(date) {
      return moment(String(date)).format('DD/MM/YYYY hh:mm:ss');
    },
    getDateAndFormat(date) {
      return moment(String(date)).format('DD/MM/YYYY');
    }
  },
  beforeMount() {
    this.$store.commit("insertUser", this.$store.getters.getArrItem(this.$route.params.id)); //Get a copy of the state and save it into the "working" state person
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
  grid-template-columns: repeat(3, 615px);
  grid-column-gap: 35px;
  grid-row-gap: 0;
}

.button-group {
  margin: 60px;
}

.stats {
  grid-area: 1 / 1 / 2 / 2;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info {
  grid-area: 1 / 2 / 2 / 4;
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
