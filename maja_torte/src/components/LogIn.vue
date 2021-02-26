<template>
  <div class="login">
    <div class="input">
      <input v-model="usernameValue" type="text" placeholder="Username" />

      <input v-model="passwordValue" type="password" placeholder="Password" />
    </div>

    <div class="btn">
      <button @click="login">LogIn</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      usernameValue: null,
      passwordValue: null,
      isAdmin: false,
    };
  },
  methods: {
    login() {
      axios
        .post("http://231j122.mars1.mars-hosting.com/api/login", {
          username: this.usernameValue,
          password: this.passwordValue,
          //isAdmin:this.isAdmin
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("sid", res.data.sid);
          localStorage.setItem("usr_id", res.data.usr_id);
        });
    },
  },
};
</script>

<style scoped>
.login {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 420px;
  padding: 80px 40px;
  box-sizing: border-box;
  background: transparent;
}
.login input[type="text"],
.login input[type="password"] {
  border: none;
  border-bottom: 1px solid rgb(15, 6, 94);
  background: transparent;
  outline: none;
  height: 40px;
  color: rgb(9, 12, 219);
  font-size: 16px;
}
button {
  margin-top: 75px;
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
</style>