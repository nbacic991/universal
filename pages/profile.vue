<template>
  <div class="container">
    <h1>Student Stranica</h1>
    <div class="ocene">
      <v-card>
        <v-card-title>
          Ocene
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Pretraga"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="subjects"
          :search="search"
        ></v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
  	data() {
  		return {
  			user: [],
			  search: '',
        data: [],
			  headers: [
				  {
					  text: 'Predmeti',
					  align: 'left',
					  sortable: false,
					  value: 'name',
				  },
				  { text: 'Ocene', value: 'grades' },
				  { text: 'Napomena', value: 'text' },
			  ],
			  subjects: [],
      }
    },
    async created() {
	    try {
	    	this.$store.commit('getMenu')
		    this.user = await this.$store.state.user_data
		    this.subjects = await this.user[0].full_data
	    } catch(e) {
		    console.log(e)
	    }
    }
  }
</script>
