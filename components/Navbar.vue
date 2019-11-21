<template>
  <div class="navigation">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Welcome
          </v-list-item-title>
          <v-list-item-subtitle v-for="userItem in user" :key="userItem._id">
            {{userItem.firstName}} {{userItem.lastName}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
  </div>
</template>

<script>
  export default {
  	data() {
  		return {
  			items: [],
        user: [],
			  clipped: false,
			  drawer: true,
			  fixed: false,
			  miniVariant: false,
			  right: true,
			  rightDrawer: false,
			  title: 'Elektronski Dnevnik',
        error: ''
      }
    },
	  async created() {
      this.$store.commit('getMenu')
	    this.isLogged = await this.$store.state.isLogged
	    if(this.isLogged) {
		    this.user = await this.$store.state.user_data
        let userRole = this.user[0].user_role
        if(userRole === 'role_admin') {
	        this.$router.push({path: '/dashboard'})
	        this.items = [
		        {icon: 'mdi-settings', title: 'Dashboard', to: '/dashboard'},
		        {icon: 'mdi-logout', title: 'Logout', to: '/logout'}
	        ]
        } else if (userRole === 'role_student') {
	        this.$router.push({path: '/profile'})
	        this.items = [
		        {icon: 'mdi-settings', title: 'Profil', to: '/profile'},
		        {icon: 'mdi-logout', title: 'Logout', to: '/logout'}
	        ]
        }
      } else {
	    	this.$router.push({path: '/login'})
      }
    }
  }
</script>
