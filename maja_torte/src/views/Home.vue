<template>
  <div class="home">
    <!-- <router-link class="link" to="/LogIn">LogIn</router-link> | 
   <router-link  class="link" to="/SignUp">SignUp</router-link> -->
   <Kategorije/>
  </div>
</template>

<script>
// @ is an alias to /src
import Kategorije from '../components/Kategorije'

export default {
  name: 'Home',
  components: {
    Kategorije
  }
}
</script>

<style scoped>
.link{
  text-decoration-line: none;
  color: rgb(223, 78, 11);
}
</style>
