<template>
  <div class="pojedinacni">
    <div class="proizvod">
      <router-link
        v-bind:to="'/Proizvod/' + proizvod.pro_id"
        v-for="proizvod in proizvodi"
        :key="proizvod.pro_id"
      >
        <img class="img" :src="'data:image/jpg;base64,' + proizvod.pro_img" />
        {{ proizvod.pro_naziv }}
        {{ proizvod.pro_opis }}
        {{ "CENA: " + proizvod.pro_cena + "din./kg" }}
      </router-link>
    </div>
    <!-- <button @click="poruci">Poručite proizvod</button> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      proizvodi: [],
    };
  },
  methods: {
    getProizvodi() {
      axios
        .get("http://231j122.mars1.mars-hosting.com/api/proizvodi", {
          params: { kat_id: this.$route.params.id },
        })
        .then((res) => {
          console.log(res.data.data);
          this.proizvodi = res.data.data;
        });
    },
    poruci(){
        this.$router.push('/Porudzbenica')
    }
  },
  mounted() {
    this.getProizvodi();
  },
};
</script>
<style scoped>
img {
  width: 250px;
  height: 250px;
}
</style>