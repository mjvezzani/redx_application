<template>
    <form @submit.prevent="updateProfileInfo">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="$store.state.user.name">
      <label for="email">Email</label>
      <input type="text" id="email" v-model="$store.state.user.email">
      <label for="phone">Phone</label>
      <input type="text" id="phone" v-model="$store.state.user.phone">
      <button type="submit" v-on:click="updateProfileInfo">Update Profile</button>
    </form>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'ProfileForm',
  methods: {
    updateProfileInfo() {
      Axios.post(`http://localhost:4000/api/users/${this.$store.state.user.id}`,
        { id: this.$store.state.user.id,
          name: this.$store.state.user.name,
          email: this.$store.state.user.email,
          phone: this.$store.state.user.phone,
        })
        .then(() => {
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
