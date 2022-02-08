import { createRouter, createWebHistory } from "vue-router";
import AllUsers from "../pages/home/AllUsers.vue"
const routes = [
    {
        path: '/',
        name: AllUsers,
        component: AllUsers,
    },
]


const router = createRouter({
    // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html#blank-screen-on-builds-but-works-fine-on-serve
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;