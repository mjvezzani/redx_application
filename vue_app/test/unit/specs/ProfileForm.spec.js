import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import ProfileForm from '@/components/profile/ProfileForm';

describe('ProfileForm.vue', () => {
  it('updateProfileInfo() should update profile info', () => {
    const storeData = { state: { user: { name: 'John Beck', id: 1 } } };
    const store = new Vuex.Store({ storeData });
    const Constructor = Vue.extend(ProfileForm);
    const vm = new Constructor({ store, router }).$mount();
    console.log('*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*');
    console.log(vm.$el);
    console.log(vm.$store);
    vm.$el.getElementById('name').value = "Michael Vezzani";

    expectedParameters = 'http://localhost:4000/api/users/1', {
      id: '1',
      name: 'Michael Vezzani'
    };

    spyOn(Axios, 'post');

    expect(Axios.post).toHaveBeenCalledWith(expectedParameters);
  });
});
