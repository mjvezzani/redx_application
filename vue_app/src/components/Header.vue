<template>
  <div>
    <router-link to="/photos">Photos</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/">Dashboard</router-link>
    <router-link v-on:click.native="logout" to="/">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      this.$store.state.loggedIn = false;
      this.$router.replace('/');
    },
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
