<template>
  <form @submit.prevent="update">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="$store.state.user.name">
    <button type="submit" v-on:click="update">Update Profile</button>
  </form>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Profile',
  data() {
    return {
    };
  },
  methods: {
    update() {
      console.log(this.$store.state.user.id);
      Axios.post('http://localhost:4000/api/users/' + this.$store.state.user.id,
        { id: this.$store.state.user.id,
          name: this.$store.state.user.name})
        .then((response) => {
          console.log(response);
      });
    }
  }
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
