import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Welcome from "../views/Welcome.vue";
import Contact from "../views/contact.vue"
import Kigali from "../views/Destinations/kigali.vue"
import North from "../views/Destinations/North.vue"
import South from "../views/Destinations/South.vue"
import East from "../views/Destinations/East.vue"
import West from "../views/Destinations/West.vue"

const routes = [
  {
    path: "/",
    component: Welcome,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },

   {
    path: "/contact",
    component: Contact,
  },

  {
    path: '/kgl',
    component: Kigali,
  },

  {
    path:'/Nrth',
    component: North,

  },
  {
    path:'/Sth',
    component: South,

  },
   {
    path:'/Est',
    component: East,

  },
   {
    path:'/Wst',
    component: West,

  },
   
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;