import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  loggedIn: false,
  user: {
    id: '',
    name: '',
  },
};

export default new Vuex.Store({
  state,
});
