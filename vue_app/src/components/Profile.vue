<template>
  <div>
    <Header />
    <h1>Profile</h1>
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.phone }}</p>
    <p>{{ user.number_of_photos }}</p>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Profile',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: {
        name: 'Michael Vezzani',
        email: 'mjvezzani@gmail.com',
        phone: '209-201-9660',
        number_of_photos: '37',
      },
    };
  },
  components: {
    Header,
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
