import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import userRoutes from './router/module/user';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    ...userRoutes,
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (store.state.userModule.token) {
      next();
    } else {
      router.push({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
