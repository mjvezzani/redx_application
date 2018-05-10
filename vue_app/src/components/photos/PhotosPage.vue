<template>
  <div>
    <Header />
    <div>
      <ul id="photos">
        <li v-for="photo in photos" :key="photo.id">
          <img v-bind:src="filepath(photo)" />
        </li>
      </ul>
    </div>
    <div>
      <input type="file" name="photo" @change="fileSelected">
      <button @click="onUpload">Upload Photo</button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Axios from 'axios';

export default {
  name: 'PhotosPage',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      photos: null,
      photo: null,
    };
  },
  methods: {
    filepath(photo) {
      return `../../../static/${photo.filename}`;
    },
    fileSelected(event) {
      this.photo = event.target.files[0];
    },
    onUpload() {
      const formData = new FormData();
      formData.append('photo', this.photo, this.photo.name);
      formData.append('owner', this.$store.state.user.id);
      Axios.post('http://localhost:4000/api/photos/', formData).then((response) => {
        const photo = response.data.photo;
        const newPhoto = Object.create({ filename: photo.name, owner: photo.owner });
        this.photos.push(newPhoto);
        this.$forceUpdate();
      });
      this.$forceUpdate();
    },
  },
  beforeCreate() {
    Axios.get('http://localhost:4000/api/photos').then((response) => {
      this.photos = response.data.photos.map(photo => Object.create({
        filename: photo.filename,
        owner: photo.owner }));
    });
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
img {
  display: block;
  max-height: 100px;
  max-width: 100px;
  height: auto;
  width: auto;
}</style>
