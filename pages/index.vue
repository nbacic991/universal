<template>
  <div class="container">

  </div>
</template>

<script>
	import Logo from '~/components/Logo.vue';
	import Dashboard from '~/components/Dashboard.vue';
	import Login from '~/components/Login.vue';
	import UsersService from '../getData';

	export default {
		components: {
			Logo,
			Dashboard,
			Login
		},
		data() {
			return {
				user: []
			};
		},
	};
</script>

