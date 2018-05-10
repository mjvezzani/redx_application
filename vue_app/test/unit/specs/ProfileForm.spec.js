import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import router from '@/router';
import ProfileForm from '@/components/profile/ProfileForm';

describe('ProfileForm.vue', () => {
  it('updateProfileInfo() should update profile info', () => {
    const storeData = { state: { user: { name: 'John Beck', id: 1 } } };
    const store = new Vuex.Store({ storeData });
    const Constructor = Vue.extend(ProfileForm);
    const vm = new Constructor({ store, router }).$mount();
    //vm.$store.state.user.name = 'Michael Vezzani';
    sinon.spy(Axios, 'post');

    const expectedParameters = ['http://localhost:4000/api/users/1', {
      id: '1',
      name: 'Michael Vezzani'
    }];

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(vm.$el);
    expect(Axios.post.withArgs(expectedParameters).calledOnce).to.be.true
  });
});
