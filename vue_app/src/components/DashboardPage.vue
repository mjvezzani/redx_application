<template>
  <div>
    <div v-show="!$store.state.loggedIn">
      <Login />
    </div>
    <div v-show="$store.state.loggedIn">
      <Header />
      <Profile />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Profile from '@/components/profile/Profile';
import Login from '@/components/Login';

export default {
  name: 'Dashboard',
  components: {
    Header, Profile, Login,
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
