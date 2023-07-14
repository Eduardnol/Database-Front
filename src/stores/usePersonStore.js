import {defineStore} from 'pinia'

export const usePersonStore = defineStore('person', {
  state: () => ({
    person: {
      id: null,
      nombre: null,
      apellido: null,
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
    }
  }),
  actions: {
    insertIndividualPerson(person_info) {
      console.log(person_info)
      this.person = person_info
    },
    deleteUser() {
      this.person.id = null
      this.person.nombre = null
      this.person.apellido = null
      this.person.apellido2 = null
      this.person.email = null
      this.person.birthday = null
      this.person.saint = null
      this.person.dni = null
      this.person.createdOn = null
      this.person.sacraments = {
        bautismo: false,
        comunion: false,
        confirmacion: false,
        matrimonio: false
      }
      this.person.extras = [{
        id: null,
        selected: null,
        name: null,
        tagname: null
      }]
      this.person.fileStorage = [{name: null, url: null}]
    },
    deleteFromExtraArray(fieldId) {
      this.person.extras.splice(fieldId, 1);
    },
    addAnExtraField() {
      this.person.extras.push(
          {id: null, selected: null, name: null, tagname: null})
    },
    //***********************Files***********************//
    addFile({filename, fileUrl}) {
      console.log("the url is" + fileUrl);
      console.log("the filename is" + filename);
      this.person.fileStorage.push({name: filename, url: fileUrl})
      console.log(this.person);
    },
    deleteFile(fileUrl) {
      console.log("the url" + fileUrl);
      const toBeDeleted = this.person.fileStorage.map(
          item => item.url).indexOf(fileUrl);
      console.log("The id to be deleted" + toBeDeleted)
      this.person.fileStorage.splice(toBeDeleted, 1);
    },
  }
})