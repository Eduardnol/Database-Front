import {createApp} from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'
import router from "./router";
import {createPinia} from 'pinia'
import InstantSearch from 'vue-instantsearch/vue3/es';
import "bootstrap/dist/js/bootstrap.js"

const pinia = createPinia()
createApp(App)
.use(router)
.use(pinia)
    .use(InstantSearch)
    .mount('#app');
