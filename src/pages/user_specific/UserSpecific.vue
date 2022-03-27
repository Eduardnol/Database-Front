<template>
  <div class="userinfo">
    <div class="userfields stats">
      <p>Identificador de Usuario: {{ getPerson.id }}</p>

      <p>Creado el: {{ getPerson.id }}</p>

      <p>Archivos: {{ getPerson.id }}</p>

      <ul>
        <li
            v-for="file in getPerson.fileStorage"
            :key="file.url"
            class="list_item">
          <UserFile :filename="file.name" :url="file.url"/>
        </li>
      </ul>

    </div>
    <div class="userfields info">
      <AddUserFields/>
    </div>
  </div>

  <div class="button-group">
    <button
        class="btn btn-primary"
        type="button"
        @click="saveIntoDatabase"
    >
      <i class="bi bi-cloud-arrow-up"></i> Guardar
    </button>
    <button @click="getToPage" type="button" class="btn btn-primary">
      <i class="bi bi-house"></i> HOME
    </button>
    <button
        class="btn btn-danger"
        type="button"
        @click="deleteuser"
    >
      <i class="bi bi-trash3"></i> Eliminar
    </button>
  </div>
</template>
<script>
import AddUserFields from "../../components/add_user/AddUserFields.vue";
import MongoDBconn from "../../services/MongoDBconn.js";
import UserFile from "../../components/file/UserFile.vue";

export default {
  name: "UserSpecific",
  components: {AddUserFields, UserFile},
  computed: {
    getPerson() {
      return JSON.parse(
          JSON.stringify(this.$store.getters.getArrItem(this.$route.params.id))
      ); //Makes a copy about the state in vuex store and returns it
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
      update.updatePerson(this.$store.state.person);
      this.$store.commit("updateView", this.getPerson); //Updates the view of all results on main page
      this.getToPage();
    },
    deleteuser() {
      //update database user throught api and automatically the array
      let deletion = new MongoDBconn();
      deletion.deletePerson(this.$store.state.person.id);
      this.$store.commit("deleteFromArray", this.getPerson);
      this.getToPage();
    },
  },
  beforeMount() {
    this.$store.commit("insertUser", this.getPerson); //Get a copy of the state and save it into the "working" state person
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
  grid-row-gap: 0px;
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
