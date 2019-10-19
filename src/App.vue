<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start" v-if="user.accessToken">
            <router-link class="navbar-item" to="/questions">Questions</router-link>
            <router-link class="navbar-item" to="/users">Users</router-link>
            <router-link class="navbar-item" to="/report">Report</router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <div class="navbar-item has-dropdown is-hoverable" v-if="user.accessToken">
                  <img class="profile" alt="Google Logo" :src="user.photoURL" />
                  <span class="padding-left" style="color: white">
                    {{ user.displayName }}
                  </span>
                  <div class="navbar-dropdown is-right">
                    <a class="navbar-item">Logout</a>
                  </div>
                </div>
                <a class="button is-light" @click="socialLogin()" v-else>
                  <img class="google" alt="Google Logo" src="./assets/google-logo.png" />
                  <span class="padding-left">Log in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'App',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((data) => {
          this.user = {
            accessToken: data.credential.accessToken,
            displayName: data.user.displayName,
            email: data.user.email,
            photoURL: data.user.photoURL,
          };
          localStorage.setItem('user', {
            accessToken: data.credential.accessToken,
            displayName: data.user.displayName,
            email: data.user.email,
            photoURL: data.user.photoURL,
          });
          this.$router.replace('questions');
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="scss">
.google {
  height: 18px;
  width: 18px;
}

.profile {
  border-radius: 50%;
  height: 20px;
  width: 20px;
}

.padding-left {
  padding-left: 10px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
