<template>
  <NavigationPersonPanel/>
  <div id="home-tab-pane" aria-labelledby="general-info-tab" class="tab-pane fade show active"
       role="tabpanel" tabindex="0">
    <div class="userinfo">
      <div class="userfields stats">
        <h5>Identificador de Usuario: {{ personStore.person.id }}</h5>

        <h5>Creado el: {{
            getDateAndFormat(personStore.person.createdOn)
          }}</h5>

        <h5>Archivos:</h5>
        <ul>
          <li
              v-for="file in personStore.person.fileStorage"
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
  </div>
  <div id="groups-tab-pane" aria-labelledby="groups-tab" class="tab-pane fade" role="tabpanel"
       tabindex="0">
    <div class="usergroups">

    </div>
  </div>

  <div id="exampleModal" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal"
       tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmar Eliminación</h5>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal"
                  type="button"></button>
        </div>
        <div class="modal-body">
          <p>Desea eliminar este usuario?</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Cancelar
          </button>
          <button class="btn btn-danger" data-bs-dismiss="modal"
                  type="button"
                  @click="deleteuser">Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="dismiss" aria-hidden="true" aria-labelledby="dismiss" class="modal"
       tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmar Descarte</h5>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal"
                  type="button"></button>
        </div>
        <div class="modal-body">
          <p>Desea descartar este usuario?</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Seguir Editando
          </button>
          <button class="btn btn-warning" data-bs-dismiss="modal"
                  type="button"
                  @click="getToPage">Descartar Cambios
          </button>
        </div>
      </div>
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

</template>
<script>
import AddUserFields from "../../components/add_user/AddUserFields.vue";
import UserFile from "../../components/file/UserFile.vue";
import moment from "moment";
import {usePersonStore} from "../../stores/usePersonStore";
import {usePersonListStore} from "../../stores/usePersonListStore";
import {useRoute} from 'vue-router';
import peopleService from "../../services/people-service";
import fileService from "../../services/file-service";
import NavigationPersonPanel from "../../components/NavigationPersonPanel.vue";

export default {
  setup() {
    let personStore = usePersonStore();
    const personListStore = usePersonListStore();
    const route = useRoute();

    peopleService.getPersonById(route.query.id).then((response) => {
      personStore.insertIndividualPerson(response);
    });
    return {personStore, personListStore};
  },

  name: "UserSpecific",
  components: {NavigationPersonPanel, AddUserFields, UserFile},
  methods: {
    //this will delete the working state person and return to the user home
    getToPage() {
      this.$router.push({
        name: "AllUsers",
      });
    },
    //Saves into the database the user we just updated
    saveIntoDatabase() {
      peopleService.updatePerson(this.personStore.person);
      // this.$store.commit("updateView", this.person); //Updates the view of all results on main page
      this.getToPage();
    },
    deleteuser() {
      //update database user throught api and automatically the array
      peopleService.deletePerson(this.personStore.person.id)
      this.personListStore.deleteFromArray(this.personStore.person)
      this.getToPage();
    },
    addFile() {
      let file = this.$refs.file.files[0];
      if (file != null) {

        let resultStatus = fileService.uploadFile(this.personStore.person.id, file);
        resultStatus.then(data => {
          console.log("The data fetched is" + data.details.url);
          let filename = data.details.name;
          let fileUrl = data.details.url;
          console.log("the vairable is " + fileUrl);
          this.personStore.addFile(filename, fileUrl);

        })

        //show confirmation and reload page
      }
    },
    deleteFile(fileName, fileurl) {
      fileService.deleteFile(this.personStore.person.id, fileName)
      this.personStore.deleteFile(fileurl)
    },
    getDateTimeAndFormat(date) {
      return moment(String(date)).format('DD/MM/YYYY hh:mm:ss');
    },
    getDateAndFormat(date) {
      return moment(String(date)).format('DD/MM/YYYY');
    }
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
  grid-template-columns: repeat(3, 30%);
  grid-column-gap: 5%;
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
