<template>
  <div>
    <h1>Test</h1>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="post-container">
      <div class="post"
      v-for="(post, index) in posts"
      :item="post"
      :index="index"
      :key="post._id">
        <img :src=post.detalji.slika alt="">
        <p class="text">{{ post.vrsta }}</p>
      </div>
    </div>
    <div class="create-post">
      <label for="create-post">Nova nekretnina</label>
      <input type="text" id="create-post" v-model="lokacija" placeholder="lokacija">
      <button v-on:click="createPost">Kreiraj novu nekretninu</button>
    </div>

  </div>
</template>

<script>
  import PostService from '../getData';

  export default {
  	data() {
  		return {
  			posts: [],
        error: '',
        lokacija: '',
        title: ''
      }
    },
    async created() {
  		try {
  			this.posts = await PostService.getPosts()
      } catch (err) {
          this.error = err.message
		  }
    }
  }
</script>
