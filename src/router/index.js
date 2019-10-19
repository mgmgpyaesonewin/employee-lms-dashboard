import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CreatePost from '../views/CreatePost.vue';
import Questions from '../views/Questions.vue';
import Report from '../views/Report.vue';
import User from '../views/Users.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/create',
    name: 'PostCreate',
    component: CreatePost,
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions,
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,
  },
  {
    path: '/users',
    name: 'Users',
    component: User,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
