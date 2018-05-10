<template>
  <div>
    <h1>Profile</h1>
    <p>{{ $store.state.user.name }}</p>
    <p>{{ $store.state.user.email }}</p>
    <p>{{ $store.state.user.phone }}</p>
  </div>
</template>

<script>

export default {
  name: 'Profile',
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
