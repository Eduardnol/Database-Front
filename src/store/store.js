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
            }
        }

    },
    mutations: {
        insertUser(state, person) {
            state.person = person
        },
        /*deleteUser(state) {
            state.person = state.person
        }*/
    }
}
);

