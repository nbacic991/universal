<template>
  <div>
    <h1>Dashboard page</h1>
    <v-container v-if="error" class="grey lighten-5">
      <v-card
        class="pa-2"
        outlined
        tile
      >
        Error Occured
      </v-card>
    </v-container>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
          v-for="item in items"
          :key="item._id"
          cols="12"
          sm="4"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            {{item.name}}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
	import UsersService from '../getData';

	export default {
		data() {
			return {
				items: [],
				error: '',
			};
		},
		async created() {
			try {
				this.items = await UsersService.getPosts();
			} catch (err) {
				this.error = err.message;
			}
		}
	};
</script>
