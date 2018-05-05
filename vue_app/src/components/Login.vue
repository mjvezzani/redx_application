<template>
  <div>
    <form id="loginForm" @submit.prevent="login">
      <label for="userEmail">Email Address</label>
      <input v-model="email" type="email" id="userEmail"
             placeholder="Your Email Address" required autofocus>
      <label for="userPassword">Password</label>
      <input v-model="password" type="password" id="userPassword"
            placeholder="Please type password" required>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      loggedIn: false,
    };
  },
  methods: {
    login() {
      this.$store.state.loggedIn = true;
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
