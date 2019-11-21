<template >
  <div class="" :style=loginBackground>
    <div class="container">
      <img class="login-image" src="../static/img/ed.png" alt="login-image">
      <Login />
    </div>
  </div>

</template>

<script>
	import Login from '~/components/Login.vue';
	import background from '../static/img/background.jpg';

	var loginBackground = {
		backgroundImage: `url(${background})`,
		backgroundPosition: 'center center',
		backgroundSize: 'cover'
	};
	export default {
		components: {
			Login
		},
    data() {
			return {
				loginBackground
			}
    }
	};
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    max-width: 1140px;
    width: 100%;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
