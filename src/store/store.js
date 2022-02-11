import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            person: {
                id: "",
                nombre: "",
                apellido: "",
                apellido2: "",
                email: "",
                birthday: "",
                saint: "",
                dni: "",
            },
            persons: [{
                id: "",
                nombre: "",
                apellido: "",
                apellido2: "",
                email: "",
                birthday: "",
                saint: "",
                dni: "",
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
            state.person.nombre = "",
                state.person.apellido = "",
                state.person.apellido2 = "",
                state.person.email = "",
                state.person.birthday = "",
                state.person.saint = "",
                state.person.dni = ""
        },
        addUser(state, person) {
            state.persons.addUser(person)
        },
        deleteFromArray(state, person) {
            const i = state.persons.map(item => item.id).indexOf(person.id);
            state.someArrayofObjects.splice(i, 1);
        }


    }
}
);
