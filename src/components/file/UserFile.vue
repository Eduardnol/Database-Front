<template>
  <div class="pdf">
    <i class="bi bi-file-earmark-pdf-fill"></i>
    <p class="filename">{{ filename }}</p>
    <div class="buttons">
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="downloadAction"
      >
        <i class="bi bi-cloud-download-fill download"></i>
      </button>
      <button type="button" class="btn btn-outline-danger">
        <i class="bi bi-trash3-fill delete"></i>
      </button>
    </div>
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
      //Send file name
    },
    deleteAction() {},
    downloadAction() {},
  },
};
</script>
<style scoped>
.pdf {
  display: flex;
  flex-direction: row;
  background: var(--card-extra-white);
  /*box-shadow: 0 8px 7px 0 var(--white);*/
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 25px;
  color: red;
  width: 500px;
  margin: 10px;
}
.filename {
  color: black;
}
.buttons {
  margin-left: auto;
}
.delete {
  padding: 4px;
}
.download {
  padding: 4px;
  margin-right: 4px;
}
</style>
