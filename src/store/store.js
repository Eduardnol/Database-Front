import { createStore } from 'vuex'

const store = createStore({
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
    actions: {

    },
    mutations: {
        setPersonForm(id, nombre, apellido, apellido2, email, birthday, saint, dni) {

            this.state.person.nombre = nombre;
            this.state.person.apellido = apellido;
            this.state.person.apellido2 = apellido2;
            this.state.person.email = email;
            this.state.person.birthday = birthday;
            this.state.person.saint = saint;
            this.state.person.dni = dni;


        }
    }
});

export default store;

