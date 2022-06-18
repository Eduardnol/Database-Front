<template>
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
              >
                <MiniPerson
                    :id="person.id"
                    :apellido="person.apellido"
                    :apellido2="person.apellido2"
                    :birthday="new Date(person.birthday)"
                    :email="person.email"
                    :nombre="person.nombre"
                    @click="addToSelected(person)"
                />
              </li>
            </ul>
          </template>
        </ais-hits>
      </ais-instant-search>
    </div>
  </div>
  <div>
    <p>Selected Users</p>
    <ul class="person_grid">
      <li
          v-for="person in selected"
          :key="person.id"
          class="list_item"
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
</template>

<script>
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";

export default {
  name: "ListPicker",
  data() {
    return {
      searchClient: instantMeiliSearch(
          "http://localhost:7720",
      ),
      selected: [],
    }
  },
  methods: {
    addToSelected(person) {
      this.selected.push(person);
    },
  },
}
</script>

<style scoped>

</style>