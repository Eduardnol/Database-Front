import {defineStore} from 'pinia'

export const usePersonListStore = defineStore('personList', {
  state: () => ([{
    id: null,
    nombre: null,
    apellido: null,
    apellido2: null,
    email: null,
    birthday: null,
    saint: null,
    dni: null,
    sacraments: {
      bautismo: false,
      comunion: false,
      confirmacion: false,
      matrimonio: false
    },
    extras: [{
      id: null,
      selected: null,
      name: null,
      tagname: null
    }],
    fileStorage: [{name: null, url: null}],
    createdOn: null,
  }]),
  actions: {
    setPersonList(personList) {
      this.personList = personList
    },
    setPerson(person) {
      this.person = person
    },
    getPersonById(state, id) {

      return state.personList.map(item => item.id).indexOf(id);

    },
    deleteFromArray(state, person) {
      const toBeDeleted = state.personList.map(
          item => item.id).indexOf(person.id);
      state.personList.splice(toBeDeleted, 1);
    },
    //***********************Update View***********************//
    updateView(state, person) {
      const toBeUpdated = state.personList.map(
          item => item.id).indexOf(person.id);
      state.personList.splice(toBeUpdated, 1, person);
      // state.personList.splice(toBeUpdated, 1);
      // state.personList.push(person);
    },
  }
})