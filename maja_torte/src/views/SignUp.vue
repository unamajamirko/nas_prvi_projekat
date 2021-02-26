<template>
  <div class="signup">
    <label for="username">USERNAME:</label>
    <input type="text" v-model="usernameValue" placeholder="Username" /><br />
    <br />
    <label for="fullname">FULLNAME:</label>
    <input type="text" v-model="fullnameValue" placeholder="Fullname" /><br />
    <br />
    <label for="password">PASSWORD:</label>
    <input type="password" v-model="passwordValue" placeholder="Password" />
    <br /><br />
    <button class="btnSingup" @click="Signup">Sing Up</button>
  </div>
</template>

<script>
import axios from "axios";
//import axios from "axios";
export default {
  data() {
    return {
      usernameValue: "",
      fullnameValue: "",
      passwordValue: "",
    };
  },
  methods: {
    Signup() {
      axios
        .post("http://231j122.mars1.mars-hosting.com/api/signin", {
          name: this.fullnameValue,
          username: this.usernameValue,
          password: this.passwordValue,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/LogIn" });
        });
    },
  },
};
</script>

<style scoped>
.signup {
  text-align: center;
  margin-top: 100px;
}

h1,
h3 {
  color: rgb(255, 38, 126);
  text-align: center;
}
input {
  border: none;
  border-bottom: 1px solid rgb(15, 6, 94);
  background: transparent;
  outline: none;
  height: 40px;
  color: rgb(9, 12, 219);
  font-size: 16px;
}
button {
  border: none;
  outline: none;
  height: 30px;
  width: 150px;
  color: #fff;
  font-size: 16px;
  background: rgb(255, 38, 126);
  cursor: pointer;
  border-radius: 20px;
}

label {
  color: rgb(255, 38, 126);
}
</style>