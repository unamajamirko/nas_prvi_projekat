<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  | 
      <router-link to="/Comments">Komentari</router-link> |

      <router-link v-if="!isLoggedIn" class="link" to="/LogIn">LogIn</router-link> | 
      <router-link v-if="!isLoggedIn" class="link" to="/SignUp">SignUp</router-link> |
      <a href="#" @click="logout" v-if="isLoggedIn">Logout</a>

    </div>
    <router-view/>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
// import LoginComponent from "./components/LoginComponent.vue";
export default {
  // components: { LoginComponent },
  data() {
    return {      
      loginActive: false,
    };
  },
  methods: {
    ...mapActions(["change_login"]),
    isLogged() {
      axios
        .get("http://231j122.mars1.mars-hosting.com/api/isLogged", {
          params: {
            sid: localStorage.getItem("sid"),
          },
        })
        .then((res) => {
          console.log(res);
          localStorage.getItem("sid");
          if (res.data.message === "ok") {
            this.change_login(true);
          }
          if (res.data.message === "You are not logged in") {
            this.change_login(false);
          }
        });
    },
    logout() {
      axios
        .get( "http://231j122.mars1.mars-hosting.com/api/logout", {
          params: {
            sid: localStorage.getItem("sid"),
          },
        })
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message === "Logout success.") {
            this.change_login(false);
          }
          console.log(res);
          localStorage.removeItem("sid");
           localStorage.removeItem("usr_id");
          this.$router.push({ path: "/" });
        });
    },
  },
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  mounted() {
    this.isLogged();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body{
   margin: 0px;
  width: 100%;
  height: 100%;
 
}
</style>
