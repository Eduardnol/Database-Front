<script>
export default {
  name: 'NavigationPersonPanel',
}

</script>

<template>
  <ul id="myTab" class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
      <button id="general-info-tab" aria-controls="home-tab-pane" aria-selected="true"
              class="nav-link active" data-bs-target="#home-tab-pane" data-bs-toggle="tab"
              role="tab"
              type="button">Información General
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button id="groups-tab" aria-controls="groups-tab-pane" aria-selected="false"
              class="nav-link" data-bs-target="#groups-tab-pane" data-bs-toggle="tab"
              role="tab" type="button">Grupos
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button id="family-residence-tab" aria-controls="family-residence-tab-pane"
              aria-selected="false"
              class="nav-link" data-bs-target="#family-residence-tab-pane" data-bs-toggle="tab"
              role="tab" type="button">Familia y Domicilio
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button id="files-tab" aria-controls="files-tab-pane" aria-selected="false"
              class="nav-link" data-bs-target="#files-tab-pane" data-bs-toggle="tab"
              role="tab" type="button">Archivos
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button id="economy-tab" aria-controls="economy-tab-pane" aria-selected="false"
              class="nav-link" data-bs-target="#economy-tab-pane" data-bs-toggle="tab"
              role="tab" type="button">Información Económica
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button id="sacraments-tab" aria-controls="sacraments-tab-pane" aria-selected="false"
              class="nav-link" data-bs-target="#sacraments-tab-pane" data-bs-toggle="tab"
              role="tab" type="button">Sacramentos
      </button>
    </li>
  </ul>
</template>

<style >

</style>
