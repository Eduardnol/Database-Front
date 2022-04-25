import {createApp} from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'
import router from "./router";
import {store} from "./store/store"
import InstantSearch from 'vue-instantsearch/vue3/es';
import "bootstrap/dist/js/bootstrap.js"

createApp(App)
    .use(router)
    .use(store)
    .use(InstantSearch)
    .mount('#app');
