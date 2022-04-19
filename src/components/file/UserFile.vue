<template>
  <div class="pdf">
    <i class="bi bi-file-earmark-pdf-fill"></i>
    <div class="filename"><p>{{ filename }}</p></div>

    <div class="buttons">
      <button
          class="btn btn-outline-primary"
          type="button"
          @click="downloadAction">
        <i class="bi bi-cloud-download-fill download"></i>
      </button>
      <button class="btn btn-outline-danger"
              type="button"
              @click="deleteAction">
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
    url: String,
  },
  emits: ['deleteUserFile'],
  methods: {
    deleteAction() {
      this.$emit('deleteUserFile', this.filename, this.url);
    },
    downloadAction() {
      window.open(this.url);
    },
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
  max-height: 50px;
  margin: 10px;

}

.filename {
  color: black;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
