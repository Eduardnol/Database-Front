<template>
  <div><AddUserFields /></div>
  <p>{{ getPerson }}</p>
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
  },
  beforeMount() {
    this.$store.commit("insertUser", this.getPerson);
  },
};
</script>
<style lang="stylus" scoped></style>
