import {createStore} from 'vuex'

export const store = createStore({
        state() {
            return {
                person: {
                    id: null,
                    nombre: "",
                    apellido: "",
                    apellido2: "",
                    email: "",
                    birthday: "",
                    saint: "",
                    dni: "",
                    sacraments: {
                        bautismo: false,
                        comunion: false,
                        confirmacion: false,
                        matrimonio: false
                    },
                    extras: [{id: 0, selected: "", name: "", tagname: ""}],
                    fileStorage: [{name: null, url: null}],
                    createdOn: null,
                },
                persons: [{
                    id: null,
                    nombre: "",
                    apellido: "",
                    apellido2: "",
                    email: "",
                    birthday: "",
                    saint: "",
                    dni: "",
                    sacraments: {
                        bautismo: false,
                        comunion: false,
                        confirmacion: false,
                        matrimonio: false
                    },
                    extras: [{id: 0, selected: "", name: "", tagname: ""}],
                    fileStorage: [{name: null, url: null}],
                    createdOn: null,
                }]
            }

        },
        getters: {
            getArrItem: (state) => (id) => {
                return state.persons.find(item => item.id === id);
            }
        },
        mutations: {
            //***********************Persons***********************//
            insertUser(state, person) {
                state.person = person
            },
            getPersonById(state, id) {

                return state.persons.map(item => item.id).indexOf(id);

            },
            deleteUser(state) {
                state.person.id = null
                state.person.nombre = ""
                state.person.apellido = ""
                state.person.apellido2 = ""
                state.person.email = ""
                state.person.birthday = ""
                state.person.saint = ""
                state.person.dni = ""
                state.person.createdOn = null
                state.person.sacraments = {
                    bautismo: false,
                    comunion: false,
                    confirmacion: false,
                    matrimonio: false
                }
                state.person.extras = [{id: 0, selected: "", name: "", tagname: ""}]
                state.person.fileStorage = [{name: null, url: null}]
            },
            deleteFromArray(state, person) {
                const toBeDeleted = state.persons.map(item => item.id).indexOf(person.id);
                state.persons.splice(toBeDeleted, 1);
            },
            //***********************Extra fields***********************//
            deleteFromExtraArray(state, fieldId) {

                const i = state.persons.extras.map(item => item.id).indexOf(fieldId);
                state.persons.splice(i, 1);
            },
            addAnExtraField(state) {
                state.person.extras.push({id: 0, selected: "", name: "", tagname: ""})
            },
            //***********************Update View***********************//
            updateView(state, person) {
                const toBeUpdated = state.persons.map(item => item.id).indexOf(person.id);
                state.persons.splice(toBeUpdated, 1, person);
                // state.persons.splice(toBeUpdated, 1);
                // state.persons.push(person);
            },
            //***********************Files***********************//
            addFile(state, fileName, fileUrl) {
                state.person.fileStorage.push({name: fileName, url: fileUrl})
            },
            deleteFile(state, filename, fileUrl) {
                const toBeDeleted = state.person.fileStorage.map(item => item.url).indexOf(fileUrl);
                state.person.fileStorage.splice(toBeDeleted, 1);
            }


        }
    }
);
