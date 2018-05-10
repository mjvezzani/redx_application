import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import Header from '@/components/Header';

describe('Header.vue', () => {
  it('logout() should change loggedIn to false', () => {
    const storeData = { state: { loggedIn: true } };
    const store = new Vuex.Store({ storeData });
    const Constructor = Vue.extend(Header);
    const vm = new Constructor({ store, router }).$mount();
    vm.logout();
    expect(vm.$store.state.loggedIn)
      .to.equal(false);
  });
});
