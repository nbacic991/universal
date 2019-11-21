<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1>Da li ste sigurni da li želite da se izlogujete ?</h1>

        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-5"
          style="height: 300px;" >
          <v-card class="ma-3 pa-6">
            <v-btn @click="logout" color="primary">Da</v-btn>
          </v-card>
          <v-card class="ma-3 pa-6">
            <v-btn @click="cancel" color="error">Ne</v-btn>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
  	data() {
      return {
	      alignmentsAvailable: [
		      'start',
		      'center',
		      'end',
		      'baseline',
		      'stretch',
	      ],
	      alignment: 'center',
	      dense: false,
	      justifyAvailable: [
		      'start',
		      'center',
		      'end',
		      'space-around',
		      'space-between',
	      ],
	      justify: 'center',
      }
    },
    methods: {
  		logout() {
			  this.$store.commit('toggle')
			  this.$router.push('/login')
			  document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      },
      cancel() {
  			this.$router.push('/profile')
      }
    }
  }
</script>
