<template>
  <div class="userinfo">
    <div class="userfields stats">
      <h5>Identificador Lifeteen: {{ lifeteens.id }}</h5>

      <h5>Creado el: {{
          getDateAndFormat(lifeteens.startDate)
        }}</h5>

      <h5>Archivos:</h5>

      <!--      <ul>-->
      <!--        <li-->
      <!--            v-for="file in lifeteens.fileStorage"-->
      <!--            :key="file.url"-->
      <!--            class="list_item">-->
      <!--          <UserFile :filename="file.name" :url="file.url"-->
      <!--                    @deleteUserFile="deleteFile"/>-->
      <!--        </li>-->
      <!--      </ul>-->
      <!--add a file uploader button-->
      <!--      <div class="d-inline">-->
      <!--        <input id="formFile" ref="file" class="form-control" type="file">-->
      <!--      </div>-->
      <!--      <button class="btn btn-primary d-inline" @click="addFile">Subir</button>-->


    </div>
    <div class="userfields info">
      <AddLifeteenFields/>
    </div>
    <div class="userfields searchInput">
      <ais-instant-search :search-client="searchClient" index-name="users">
        <ais-configure :hits-per-page.camel="6"/>
        <ais-search-box class="searchbox">
          <template v-slot="{isSearchStalled, refine}">
            <input
                class="form-control"
                placeholder="Search... "
                type="search"
                @input="refine($event.currentTarget.value)"
            />
            <span :hidden="!isSearchStalled">Loading...</span>
          </template>
        </ais-search-box>
        <ais-hits>
          <template v-slot="{ items }">
            <ul class="person_grid">
              <li
                  v-for="person in items"
                  :key="person.id"
                  class="list_item"
              >
                <MiniPerson
                    :id="person.id"
                    :apellido="person.apellido"
                    :apellido2="person.apellido2"
                    :birthday="new Date(person.birthday)"
                    :email="person.email"
                    :nombre="person.nombre"
                />
              </li>
            </ul>
          </template>
        </ais-hits>
      </ais-instant-search>
    </div>
    <div class="userfields inscritos">
      <p>Total Inscritos {{ lifeteens.numInscritos }}</p>
      <ul class="person_grid">
        <li
            v-for="person in lifeteens.idInscritos"
            :key="person.id"
            class="list_item"
            @click="getToPage(person.id)"
        >
          <MiniPerson
              :id="person.id"
              :apellido="person.apellido"
              :apellido2="person.apellido2"
              :nombre="person.nombre"
          />
        </li>
      </ul>
    </div>
    <div class="userfields monitores">
      <p>Total Monitores {{ lifeteens.idMonitores.length }}</p>

      <ul class="person_grid">
        <li
            v-for="person in lifeteens.idMonitores"
            :key="person.id"
            class="list_item"
            @click="getToPage(person.id)"
        >
          <MiniPerson
              :id="person.id"
              :apellido="person.apellido"
              :apellido2="person.apellido2"
              :nombre="person.nombre"
          />
        </li>
      </ul>
    </div>
    <!-- Button trigger modal -->
    <button class="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button"
            @click="openMonitores()">
      Añadir Monitores
    </button>

    <button class="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button"
            @click="openInscritos()">
      Añadir Inscritos
    </button>
    <!-- Modal -->
    <div id="exampleModal" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">Seleccionar Personas</h5>
            <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>
          <div class="modal-body">
            <ListPicker ref="ListPicker"/>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
            <button class="btn btn-primary" type="button" @click="saveSelectedItemsIntoVueStore()">Save changes</button>
          </div>
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
    <button class="btn btn-primary m-1" data-bs-target="#dismiss" data-bs-toggle="modal"
            type="button">
      <i class="bi bi-house"></i> HOME
    </button>
    <button
        class="btn btn-danger m-1"
        data-bs-target="#exampleModal"
        data-bs-toggle="modal"
        type="button"
    >
      <i class="bi bi-trash3"></i> Eliminar
    </button>
  </div>
</template>
<script>
import moment from "moment";
import AddLifeteenFields from "../../components/add_lifeteen/AddLifeteenFields";
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";
import MiniPerson from "../../components/add_lifeteen/MiniPerson";
import ListPicker from "../../components/list_picker/ListPicker";
import MongoDBconn from "../../services/MongoDBconn";

export default {
  name: "LifeteenSpecific",
  components: {ListPicker, MiniPerson, AddLifeteenFields},
  computed: {
    lifeteens: {
      get() {
        return this.$store.getters.getArrItemLifeTeen(this.$route.params.id);
      },
      set(value) {
        this.$store.commit("updateLifeteen", value);
      },
    },
  },
  data() {
    return {
      searchClient: instantMeiliSearch(
          "http://localhost:7720",
      ),

    }
  },

  methods: {
    //this will delete the working state person and return to the user home
    // getToPage() {
    //   this.$router.push({
    //     name: "AllUsers",
    //   });
    // },
    //
    /**
     * Loads the selection among users for either the monitores or the inscritos
     */
    updateSelected() {
      this.$refs.ListPicker.loadSelected();
    },
    // deleteuser() {
    //   //update database user throught api and automatically the array
    //   let deletion = new MongoDBconn();
    //   deletion.deletePerson(this.$store.state.person.id);
    //   this.$store.commit("deleteFromArray", this.person);
    //   this.getToPage();
    // },
    // addFile() {
    //   let file = this.$refs.file.files[0];
    //   if (file != null) {
    //
    //     let upload = new MongoDBconn();
    //     let resultStatus = upload.uploadFile(this.$store.state.person.id, file);
    //     resultStatus.then(data => {
    //       console.log("The data fetched is" + data.details.url);
    //       let filename = data.details.name;
    //       let fileUrl = data.details.url;
    //       console.log("the vairable is " + fileUrl);
    //       this.$store.commit("addFile", {filename, fileUrl,});
    //
    //     })
    //
    //
    //     //show confirmation and reload page
    //   }
    // },
    // deleteFile(fileName, fileurl) {
    //   let deleteFile = new MongoDBconn();
    //   deleteFile.deleteFile(this.person.id, fileName)
    //   this.$store.commit("deleteFile", fileurl);
    // },
    /**
     * Saves the vuex store lifeteen into the database
     */
    saveIntoDatabase() {
      let update = new MongoDBconn();
      update.updateLifeteen(this.lifeteens);
      // this.$store.commit("updateView", this.person); //Updates the view of all results on main page
    },
    /**
     * Selects the loading swich for monitores
     */
    openMonitores() {
      this.$store.commit("updateInscritosBoolean", false);
      this.updateSelected();
      console.log("openMonitores");
    },
    /**
     * Selects the loading swich for inscritos
     */
    openInscritos() {
      this.$store.commit("updateInscritosBoolean", true);
      this.updateSelected();
      console.log("openInscritos");
    },
    /**
     * Makes the call to ListPicker to save the selected items into the vue store (not to the database)
     */
    saveSelectedItemsIntoVueStore() {
      this.$refs.ListPicker.saveSelected(this.$route.params.id, this.isInscritos);
    },
    getToPage(identificator) {
      this.$router.push({
        name: "UserSpecific",
        params: {id: identificator},
      });
    },
    getDateTimeAndFormat(date) {
      return moment(String(date)).format('DD/MM/YYYY hh:mm:ss');
    }
    ,
    getDateAndFormat(date) {
      return moment(String(date)).format('DD/MM/YYYY');
    },
  },
}
;
</script>
<style scoped>
body {
  background-image: url("../../assets/bg-footer-transparent.png");
  background-color: var(--light_blue);
  background-size: 20%;
}

.userinfo {
  display: grid;
  grid-template-columns: repeat(4, 445px);
  grid-column-gap: 35px;
  grid-row-gap: 35px;
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
}

.searchbox {
  width: 350px;
  height: 35px;
  margin-bottom: 20px;
}

.searchInput {
  grid-area: 1 / 4 / 2 / 5;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.inscritos {
  grid-area: 2 / 1 / 2 / 2;
  margin-left: 35px;
}

.monitores {
  grid-area: 2 / 2 / 2 / 3;
}

.inscritos, .monitores {

  display: flex;
  align-items: center;
  flex-direction: column;
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

.person_grid {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 350px);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
}
</style>
