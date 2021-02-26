<template>
  <div class="proizvod">
    
    <div v-for="proiz in proizvod" :key="proiz.pro_id">
      {{ proiz.pro_naziv }}

      {{ proiz.pro_sastav }}
    </div>
    <img
      v-for="slika in slike"
      :key="slika.slike_img"
      class="img"
      :src="'data:image/jpg;base64,' + slika.slike_img"
    />
    <div class="porudzbenica">
         <router-link
        v-bind:to="'/Porudzbenica/' + proiz.pro_id"
       v-for="proiz in proizvod" :key="proiz.pro_id"
        
      >Porucite</router-link>
      
       <!-- <button @click="poruci">Poručite proizvod</button>  -->
       <!-- <Porudzbenica/> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import Porudzbenica from '../components/Porudzbenica.vue'

export default {
//   components: { Porudzbenica },
  data() {
    return {
      proizvod: [],
      slike: [],
      pro_id:null
    };
  },
  methods: {
    getProizvod() {
      axios
        .get("http://231j122.mars1.mars-hosting.com/api/proizvod", {
          params: { pro_id: this.$route.params.id },
        })
        .then((res) => {
          console.log(res.data.proizvod);
          this.proizvod = res.data.proizvod;
        });
    },
    getSlike() {
      axios
        .get("http://231j122.mars1.mars-hosting.com/api/proizvod", {
          params: { pro_id: this.$route.params.id },
        })
        .then((res) => {
          console.log(res.data.slike);
          this.slike = res.data.slike;
        });
    },
     poruci(){
        this.$router.push("'/Proizvod/' + proizvod.pro_id")
    }
  },
  mounted() {
    this.getProizvod();
    this.getSlike();
  },
  
};
</script>
<style scoped>
img {
  width: 250px;
  height: 250px;
}
.proizvod{
    display: flex;
    flex-direction: row;
}
</style>