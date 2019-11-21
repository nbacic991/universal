<template>
  <v-app dark>
    <Navbar />

    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
	import { mapMutations } from 'vuex'
  import Navbar from '~/components/Navbar';

	export default {
		data() {
			return {
        isLogged: false,
				items: [],
				fixed: false,
        user: []
			};
		},
    components: {
			  Navbar
    },
    methods: {
	    ...mapMutations({
		    toggle: 'todos/toggle'
	    })
    },
    async created() {
	    // window.location.reload(true)
			this.$store.commit('getMenu')
      this.isLogged = await this.$store.state.isLogged
      this.items = await this.$store.state.items
      this.user = await this.$store.state.user_data
      if (this.$store.state.isLogged) {
	      let userRole = this.user[0].user_role;
	      if(userRole === 'role_student') {
		      this.$router.push({path: '/profile'})
        } else if(userRole === 'role_admin') {
		      this.$router.push({path: '/dashboard'})
        }
      } else {
	      this.$router.push({path: '/login'})
      }
    }
	};
</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
