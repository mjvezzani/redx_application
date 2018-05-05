<template>
  <div>
    <Header />
    <Profile />
    <ProfileForm />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Profile from '@/components/profile/Profile';
import ProfileForm from '@/components/profile/ProfileForm';

export default {
  name: 'ProfilePage',
  data() {
    return {
    };
  },
  components: {
    Header, Profile, ProfileForm,
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
