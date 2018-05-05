<template>
  <div>
    <div v-show="!$store.state.loggedIn">
      <Login />
    </div>
    <div v-show="$store.state.loggedIn">
      <Header />
      <Profile />
      <PhotosSample />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Profile from '@/components/profile/Profile';
import PhotosSample from '@/components/photos/PhotosSample';
import Login from '@/components/Login';

export default {
  name: 'Dashboard',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      loggedIn: false,
    };
  },
  components: {
    Header, Profile, PhotosSample, Login,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
