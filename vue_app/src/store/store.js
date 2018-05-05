import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  loggedIn: false,
  user: {
    firstName: 'Michael',
    lastName: 'Vezzani',
    email: 'mjvezzani@gmail.com',
    phone: '209-201-9660',
  },
};

export default new Vuex.Store({
  state,
});
