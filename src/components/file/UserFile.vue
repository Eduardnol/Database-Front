<template>
  <div @click="openFile" class="pdf">
    <i class="bi bi-file-earmark-pdf-fill"></i>
    <p>{{ filename }}</p>
  </div>
</template>
<script>
export default {
  name: "UserFile",
  props: {
    filename: String,
  },
  methods: {
    openFile() {
      console.log("File being opened");
    },
  },
};
</script>
<style scoped>
.pdf {
  background: var(--card-extra-white);
  /*box-shadow: 0 8px 7px 0 var(--white);*/
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 25px;
}
</style>
