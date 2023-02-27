<template>
  <div class="selector">
    <div>
      <p>All Users</p>
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
                    @click="selectPerson(person)"
                >
                  <MiniPerson
                      :id="person.id"
                      :apellido="person.apellido"
                      :apellido2="person.apellido2"
                      :nombre="person.nombre"
                  />

                </li>
              </ul>
            </template>
          </ais-hits>
        </ais-instant-search>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ListPickerIndividual",
  methods: {
    selectPerson(person) {
      this.$store.lifeteen.responsable1 = person
    },
  },
}
</script>

<style scoped>

</style>