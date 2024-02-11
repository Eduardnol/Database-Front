import {createRouter, createWebHistory} from "vue-router";
import AllUsers from "../pages/home/AllUsers.vue"
import UserSpecific from "../pages/user_specific/UserSpecific.vue"
import AllLifeteen from "../pages/lifeteen/AllLifeteen.vue"
import LifeteenSpecific from "../pages/lifeteen_specific/LifeteenSpecific.vue"
import Register from "../pages/register/Register.vue";
import Login from "../pages/login/Login.vue";
import VueCookies from 'vue-cookies';

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
  {
    path: '/all-discipulado',
    name: 'AllLifeteen',
    component: AllLifeteen,
  },
  {
    path: '/discipulado-specific',
    name: 'LifeteenSpecific',
    component: LifeteenSpecific,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

const router = createRouter({
  // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html#blank-screen-on-builds-but-works-fine-on-serve
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the cookie exists
  const token = VueCookies.get('token');

  // If the cookie doesn't exist and the user is not trying to access the login page
  if (!token && to.name !== 'Login') {
    // Redirect the user to the login page
    next({ name: 'Login' });
  } else {
    // Otherwise, allow the user to access the route
    next();
  }
});

export default router;
