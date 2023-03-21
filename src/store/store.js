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
                    extras: [{id: null, selected: "", name: "", tagname: ""}],
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
                    extras: [{id: null, selected: "", name: "", tagname: ""}],
                    fileStorage: [{name: null, url: null}],
                    createdOn: null,
                }],
                lifeteens: [{
                    id: null,
                    title: "",
                    responsables: [{id: null, nombre: "", apellido: ""}],
                    startDate: "2001-01-20",
                    numInscritos: 0,
                    idMonitores: [{id: null, nombre: "", apellido: ""}],
                    idInscritos: [{id: null, nombre: "", apellido: ""}],
                    subgrupos: [{
                        titulo: "",
                        descripcion: "",
                        responsables: null,
                        integrantes: null,
                    }],
                }],
                lifeteen: {
                    id: null,
                    title: "",
                    responsables: [{id: null, nombre: "", apellido: ""}],
                    startDate: "2001-01-20",
                    numInscritos: 0,
                    idMonitores: [{id: null, nombre: "", apellido: ""}],
                    idInscritos: [{id: null, nombre: "", apellido: ""}],
                    subgrupos: [{
                        titulo: "",
                        descripcion: "",
                        responsables: null,
                        integrantes: null,
                    }],
                },
                isInscritos: false,
            }

        },
        getters: {
            getArrItem: (state) => (id) => {
                return state.persons.find(item => item.id === id);
            },
            getArrItemLifeTeen: (state) => (id) => {
                return state.lifeteens.find(item => item.id === id);
            },
            isInscritos: (state) => {
                return state.isInscritos;
            },
            getLifeteens: (state) => {
                return state.lifeteens;
            },
            getIndividualLifeteen: (state) => {
                return state.lifeteen;
            }
        },
        mutations: {
            //***********************Persons***********************//
            insertUser(state, person) {
                state.person = person
            },
            insertDiscipulado(state, discipulado) {
                state.lifeteen = discipulado
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
                state.person.extras = [{id: null, selected: "", name: "", tagname: ""}]
                state.person.fileStorage = [{name: null, url: null}]
            },
            deleteFromArray(state, person) {
                const toBeDeleted = state.persons.map(item => item.id).indexOf(person.id);
                state.persons.splice(toBeDeleted, 1);
            },
            //***********************Extra fields***********************//
            deleteFromExtraArray(state, fieldId) {
                state.person.extras.splice(fieldId, 1);
            },
            addAnExtraField(state) {
                state.person.extras.push({id: null, selected: "", name: "", tagname: ""})
            },
            //***********************Update View***********************//
            updateView(state, person) {
                const toBeUpdated = state.persons.map(item => item.id).indexOf(person.id);
                state.persons.splice(toBeUpdated, 1, person);
                // state.persons.splice(toBeUpdated, 1);
                // state.persons.push(person);
            },
            //***********************Files***********************//
            addFile(state, {filename, fileUrl}) {
                console.log("the url is" + fileUrl);
                console.log("the filename is" + filename);
                state.person.fileStorage.push({name: filename, url: fileUrl})
                console.log(state.person);
            },
            deleteFile(state, fileUrl) {
                console.log("the url" + fileUrl);
                const toBeDeleted = state.person.fileStorage.map(item => item.url).indexOf(fileUrl);
                console.log("The id to be deleted" + toBeDeleted)
                state.person.fileStorage.splice(toBeDeleted, 1);
            },
            //***********************Lifeteens***********************//
            insertLifeteen(state, lifeteen) {
                state.lifeteens.push(lifeteen);
            },
            updateLifeteen(state, updatedLifeteen) {
                state.lifeteens = updatedLifeteen;
            },
            deleteLifeteen(state, lifeteen) {
                const toBeDeleted = state.lifeteens.map(item => item.id).indexOf(lifeteen.id);
                state.lifeteens.splice(toBeDeleted, 1);
            },
            updateMonitorList(state, list) {
                state.lifeteen.idMonitores = list;
            },
            updateInscritosList(state, list) {
                state.lifeteen.idInscritos = list;
            },
            updateResponsablesList(state, list) {
                state.lifeteen.responsables = list;
            },
            updateIndividualLifeteen(state, lifeteen) {
                state.lifeteen = lifeteen;
            },
            //***********************Extras***********************//
            updateInscritosBoolean(state, boolValue) {
                state.isInscritos = boolValue;
            }
        }
    }
);
