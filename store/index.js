export const state = () => ({
  isLogged: false,
  items: []
});

export const mutations = {
  getMenu(state) {
    if (process.client) {
      let userID = document.cookie;
      userID = userID.split("=")[1];
      if(userID) {
        state.isLogged = true;
        state.items = [
          {icon: 'mdi-settings', title: 'Dashboard', to: '/dashboard'},
          {icon: 'mdi-logout', title: 'Logout', to: '/logout'}
        ]
      } else {
        state.items = [
          {icon: 'mdi-home', title: 'Login', to: '/login'},
        ]
      }

    }
  },
  toggle(state) {
    state.isLogged = !state.isLogged;
  }
};
