import Vue from 'vue';
import Login from '@/components/Login';

describe('Login.vue', () => {
  it('should render a login form', () => {
    const Constructor = Vue.extend(Login);
    const vm = new Constructor().$mount();
    console.log(vm.$el.querySelector('form'));
    expect(vm.$el.querySelector('#loginForm'))
      .to.equal('foobar');
  });
});
