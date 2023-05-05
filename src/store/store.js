import {createStore} from 'vuex'

export const store = createStore({
        state() {
            return {
                person: {
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
                },
                personList: [{
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
                }],
                discipuladoList: [{
                    id: null,
                    title: null,
                    responsables: [{id: null, nombre: null, apellido: null}],
                    startDate: "2001-01-20",
                    numInscritos: 0,
                    idMonitores: [{id: null, nombre: null, apellido: null}],
                    idInscritos: [{id: null, nombre: null, apellido: null}],
                    subgrupos: [{
                        titulo: null,
                        descripcion: null,
                        responsables: null,
                        integrantes: null,
                    }],
                }],
                discipulado: {
                    id: null,
                    title: null,
                    responsables: [{id: null, nombre: null, apellido: null}],
                    startDate: "2001-01-20",
                    numInscritos: 0,
                    idMonitores: [{id: null, nombre: null, apellido: null}],
                    idInscritos: [{id: null, nombre: null, apellido: null}],
                    subgrupos: [{
                        titulo: null,
                        descripcion: null,
                        responsables: null,
                        integrantes: null,
                    }],
                },
                isInscritos: false,
            }

        },
        getters: {
            getDiscipuladoById: (state) => (id) => {
                return state.discipuladoList.find(item => item.id === id);
            },
            isInscritos: (state) => {
                return state.isInscritos;
            },
            getDiscipuladoList: (state) => {
                return state.discipuladoList;
            },
            getDiscipuladoIndividual: (state) => {
                return state.discipulado;
            }
        },
        mutations: {
            //***********************Persons***********************//
            insertIndividualPerson(state, person) {
                state.person = person
            },
            getPersonById(state, id) {

                return state.personList.map(item => item.id).indexOf(id);

            },
            deleteUser(state) {
                state.person.id = null
                state.person.nombre = null
                state.person.apellido = null
                state.person.apellido2 = null
                state.person.email = null
                state.person.birthday = null
                state.person.saint = null
                state.person.dni = null
                state.person.createdOn = null
                state.person.sacraments = {
                    bautismo: false,
                    comunion: false,
                    confirmacion: false,
                    matrimonio: false
                }
                state.person.extras = [{
                    id: null,
                    selected: null,
                    name: null,
                    tagname: null
                }]
                state.person.fileStorage = [{name: null, url: null}]
            },
            deleteFromArray(state, person) {
                const toBeDeleted = state.personList.map(
                    item => item.id).indexOf(person.id);
                state.personList.splice(toBeDeleted, 1);
            },
            //***********************Extra fields***********************//
            deleteFromExtraArray(state, fieldId) {
                state.person.extras.splice(fieldId, 1);
            },
            addAnExtraField(state) {
                state.person.extras.push(
                    {id: null, selected: null, name: null, tagname: null})
            },
            //***********************Update View***********************//
            updateView(state, person) {
                const toBeUpdated = state.personList.map(
                    item => item.id).indexOf(person.id);
                state.personList.splice(toBeUpdated, 1, person);
                // state.personList.splice(toBeUpdated, 1);
                // state.personList.push(person);
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
                const toBeDeleted = state.person.fileStorage.map(
                    item => item.url).indexOf(fileUrl);
                console.log("The id to be deleted" + toBeDeleted)
                state.person.fileStorage.splice(toBeDeleted, 1);
            },
            //***********************Lifeteens***********************//
            insertDiscipuladoIndividual(state, discipulado) {
                state.discipulado = discipulado
            },
            insertDiscipuladoToList(state, lifeteen) {
                state.discipuladoList.push(lifeteen);
            },
            updateDiscipuladoList(state, updatedLifeteen) {
                state.discipuladoList = updatedLifeteen;
            },
            deleteLifeteen(state, lifeteen) {
                const toBeDeleted = state.discipuladoList.map(
                    item => item.id).indexOf(lifeteen.id);
                state.discipuladoList.splice(toBeDeleted, 1);
            },
            updateDiscipuladoMonitorList(state, list) {
                state.discipulado.idMonitores = list;
            },
            updateDiscipuladoInscritosList(state, list) {
                state.discipulado.idInscritos = list;
            },
            updateDiscipuladoResponsablesList(state, list) {
                state.discipulado.responsables = list;
            },
            updateIndividualDiscipulado(state, lifeteen) {
                state.discipulado = lifeteen;
            },
            //***********************Extras***********************//
            updateInscritosBoolean(state, boolValue) {
                state.isInscritos = boolValue;
            }
        }
    }
);
