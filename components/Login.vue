<template>
  <div class="login-page">
    <div class="form-holder">
      <div class="form-item">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" v-model="username">
      </div>
      <div class="form-item">
        <label for="password">Passwrd</label>
        <input type="password" name="password" id="password" v-model="password">
      </div>
      <button class="login-button" v-on:click="userLogin()">Login</button>
    </div>
  </div>
</template>

<script>
	import UsersService from '../getData';

	export default {
		data() {
			return {
				username: '',
				password: '',
				isLoged: false,
				message: '',
				users: []
			};
		},
		methods: {
			async userLogin() {
				let username = this.username;
				let password = this.password;
				console.log(password)
				var tomorrow = new Date();
				tomorrow.setDate(tomorrow.getDate() + 1);
				try {
					this.users = await UsersService.getUserData(username);
					console.log(this.users)
					this.isLoged = !this.isLoged;
					if (this.users[0].password === password) {
						this.$store.commit('toggle')
						document.cookie = "login=" + this.users[0]._id + "; expires=" + tomorrow + "; path=/";
						if(this.users[0].user_role === 'role_student') {
							this.$router.push({path: '/profile', force: true});
            } else if (this.users[0].user_role === 'role_admin') {
							this.$router.push({path: '/dashboard', force: true});
            }
					}
				} catch (e) {
					this.message = e.message;
					console.log(e);
				}
			}
		}
	};
</script>

<style>
  .login-image {
    max-width: 250px;
    width: 100%;
    margin: auto;
    display: block;
  }

  .login-page {
    max-width: 500px;
    width: 100%;
    margin: auto;
    text-align: center;
  }

  .form-holder .form-item {
    margin-top: 20px;
  }

  .form-holder .login-button {
    padding: 15px 35px;
    border: none;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #526488;
    color: #fff;
    transition: 300ms ease-in-out;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
  }

  .form-holder .login-button:focus {
    outline: 0;
  }

  .form-holder .login-button:hover {
    background-color: #3b8070;
    color: #000;
  }

  .form-holder .form-item label {
    display: block;
    padding-bottom: 5px;
    color: #fff;
    text-align: left;
    font-weight: bold;
  }

  .form-holder .form-item input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 15px;
    border-radius: 5px;
  }
</style>
