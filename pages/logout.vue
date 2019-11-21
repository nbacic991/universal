<template>
  <Logout />
</template>

<script>
  import Logout from '../components/Logout';
  export default {
  	data() {
  		return {

      }
    },
    components: {
  		Logout
    },
	  created() {
		  // this.$store.commit('getMenu')
		  // this.isLogged = this.$store.state.isLogged
	  }
  }
</script>
