import Vue from 'vue';
import Router from 'vue-router';
import DashboardPage from '@/components/DashboardPage';
import Login from '@/components/Login';
import PhotosPage from '@/components/photos/PhotosPage';
import ProfilePage from '@/components/profile/ProfilePage';
import store from '@/store/store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashboardPage',
      component: DashboardPage,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage,
      beforeEnter: (to, from, next) => {
        if (!store.state.loggedIn) {
          next({
            path: '/',
            query: { redirect: to.fullPath },
          });
        }
        next();
      },
    },
    {
      path: '/photos',
      name: 'PhotosPage',
      component: PhotosPage,
      beforeEnter: (to, from, next) => {
        if (!store.state.loggedIn) {
          next({
            path: '/',
            query: { redirect: to.fullPath },
          });
        }
        next();
      },
    },
  ],
});
