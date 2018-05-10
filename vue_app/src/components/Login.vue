<template>
  <div>
    <div v-if="!registering" id="loggingIn">
      <h2>Login</h2>
      <form id="loginForm" @submit.prevent="login">
        <label for="userName">User Name</label>
        <input v-model="name" type="text" id="userName"
               placeholder="Your User Name" required autofocus>
        <label for="userPassword">Password</label>
        <input v-model="password" type="password" id="userPassword"
              placeholder="Please type password" required>
        <button type="submit">Sign In</button>
      </form>
    </div>
    <div v-else id="userRegistration">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label for="registerUserName">User Name</label>
        <input v-model="name" type="text" id="registerUserName"
               placeholder="Your User Name" required>
        <label for="registerUserPassword">Password</label>
        <input v-model="password" type="password" id="registerUserPassword"
              placeholder="Please type password" required>
        <button type="submit">Sign In</button>
      </form>
    </div>
    <p v-on:click="switchToLogin">Login here</p>
    <p v-on:click="switchToRegister">Register here</p>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      name: '',
      password: '',
      registering: false,
    };
  },
  methods: {
    login() {
      Axios.get('http://localhost:4000/api/users').then((response) => {
        const user = response.data.users.filter(obj => obj.name === this.name)[0];
        if (user !== undefined && user.password === this.password) {
          this.$store.state.user.id = user.id;
          this.$store.state.user.name = user.name;
          this.$store.state.user.email = user.email;
          this.$store.state.user.phone = user.phone;
          this.$store.state.loggedIn = true;
          console.log(this.$store.state.email);
        } else {
          response.json({ message: 'There was an error' });
        }
      });
    },
    register() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('password', this.password);
      Axios.post('http://localhost:4000/api/users', formData).then(() => {
        this.login();
      });
    },
    switchToLogin() {
      this.registering = false;
    },
    switchToRegister() {
      this.registering = true;
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
