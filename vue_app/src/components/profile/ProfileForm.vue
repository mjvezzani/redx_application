<template>
  <form>
    <label for="firstName">First Name</label>
    <input type="text" id="firstName" v-model="$store.state.user.firstName">
    <label for="lastName">Last Name</label>
    <input type="text" id="lastName" v-model="$store.state.user.lastName">
    <label for="email">Email</label>
    <input type="email" id="email" v-model="$store.state.user.email">
  </form>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
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
