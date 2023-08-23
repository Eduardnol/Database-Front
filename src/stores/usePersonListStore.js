import {defineStore} from 'pinia'

export const usePersonListStore = defineStore('personList', {
  state: () => ({
    personList: [{
      id: null,
      nombre: null,
      apellido: null,
      apellido2: null,
      email: null,
      birthday: null,
      saint: null,
      dni: null,
      sacraments: [{
        name: null,
        temple: null,
        date: null
      }],
      extras: [{
        id: null,
        selected: null,
        name: null,
        tagname: null
      }],
      fileStorage: [{name: null, url: null}],
      createdOn: null,
    }],
  }),
  actions: {
    setPersonList(personList) {
      this.personList = personList
    }
    ,
    setPerson(person) {
      this.person = person
    }
    ,
    getPersonById(id) {

      return this.personList.map(item => item.id).indexOf(id);

    }
    ,
    deleteFromArray(person) {
      const toBeDeleted = this.personList.map(
          item => item.id).indexOf(person.id);
      this.personList.splice(toBeDeleted, 1);
    }
    ,
    //***********************Update View***********************//
    updateView(person) {
      const toBeUpdated = this.personList.map(
          item => item.id).indexOf(person.id);
      this.personList.splice(toBeUpdated, 1, person);
      // state.personList.splice(toBeUpdated, 1);
      // state.personList.push(person);
    }
    ,
  }
})