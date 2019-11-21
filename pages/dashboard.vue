<template>
  <div class="container">
    <Dashboard/>
  </div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	import Dashboard from '~/components/Dashboard.vue'
	import Login from '~/components/Login.vue'

	export default {
		components: {
			Logo,
			Dashboard,
			Login
		},
    data() {
			return {
				title: 'Dashboard page'
      }
    }
	}
</script>
