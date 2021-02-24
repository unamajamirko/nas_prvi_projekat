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
      
       <button @click="poruci">Poručite proizvod</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      proizvod: [],
      slike: [],
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
        this.$router.push('/Porudzbenica')
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
</style>