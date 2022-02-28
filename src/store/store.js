import { createStore } from 'vuex'

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
                sacraments: { bautismo: false, comunion: false, confirmacion: false, matrimonio: false },
                extras: [{ id: 0, selected: "", name: "", tagname: "" }],
                fileStorage: [{ name: null, url: null }],
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
                sacraments: { bautismo: false, comunion: false, confirmacion: false, matrimonio: false },
                extras: [{ id: 0, selected: "", name: "", tagname: "" }],
                fileStorage: [{ name: null, url: null }],
            }]
        }

    },
    getters: {
        getArrItem: (state) => (id) => {
            return state.persons.find(item => item.id === id);
        }
    },
    mutations: {
        insertUser(state, person) {
            state.person = person
        },
        deleteUser(state) {
            state.person.id = null,
                state.person.nombre = "",
                state.person.apellido = "",
                state.person.apellido2 = "",
                state.person.email = "",
                state.person.birthday = "",
                state.person.saint = "",
                state.person.dni = "",
                state.person.sacraments = { bautismo: false, comunion: false, confirmacion: false, matrimonio: false },
                state.person.extras = [{ id: 0, selected: "", name: "", tagname: "" }],
                state.person.fileStorage = [{ name: null, url: null }],
        },
        addUser(state, person) {
            state.persons.addUser(person)
        },
        deleteFromArray(state, person) {
            const i = state.persons.map(item => item.id).indexOf(person.id);
            state.persons.splice(i, 1);
        },
        deleteFromExtraArray(state, extra) {

            const i = state.persons.extras.map(item => item.id).indexOf(extra.id);
            state.persons.splice(i, 1);
        },
        addAnExtraField(state, person) {
            state.person.extra = person
        }


    }
}
);
