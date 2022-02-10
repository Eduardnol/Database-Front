import { createRouter, createWebHistory } from "vue-router";
import AllUsers from "../pages/home/AllUsers.vue"
import UserSpecific from "../pages/user_specific/UserSpecific.vue"
const routes = [
    {
        path: '/',
        name: 'AllUsers',
        component: AllUsers,
    },

    {
        path: '/user-specific',
        name: 'UserSpecific',
        component: UserSpecific,
    },
]


const router = createRouter({
    // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html#blank-screen-on-builds-but-works-fine-on-serve
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;