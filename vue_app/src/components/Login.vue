<template>
  <div>
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
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    login() {
      Axios.get('http://localhost:4000/api/users').then((response) => {
        const user = response.data.users.filter(obj => obj.name === this.name)[0];
        if (user !== undefined && user.password === this.password) {
          this.$store.state.loggedIn = true;
        } else {
          alert('Wrong Credentials!');
        }
      });
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
