import Vue from 'vue';
import Router from 'vue-router';
import DashboardPage from '@/components/DashboardPage';
import Login from '@/components/Login';
import Photos from '@/components/photos/Photos';
import ProfilePage from '@/components/profile/ProfilePage';

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
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos,
    },
  ],
});
