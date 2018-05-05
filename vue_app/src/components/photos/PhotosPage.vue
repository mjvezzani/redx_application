<template>
  <div>
    <ul id="photos">
      <li v-for="photo in photos" :key="photo">
        <p>{{ photo }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Photos',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      photos: ['Photo1', 'Photo2', 'Photo3'],
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
