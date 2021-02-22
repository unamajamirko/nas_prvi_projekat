<template>
    <div class="proizvodi">
        <router-link  class="links" v-bind:to="'/PojedinacnaKategorija/' + kategorija.kat_id" v-for="kategorija in kategorije" :key="kategorija.kat_id" >
        {{kategorija.kat_naziv }}<br>
        <img
                class="img"
                :src="'data:image/jpg;base64,' + kategorija.kat_img"
              />
        </router-link>
    </div>

</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            kategorije:[]
        }
    },
    methods:{
        getKategorije(){
            axios.get('http://231j122.mars1.mars-hosting.com/api/kategorije')
            .then((res)=>{
                this.kategorije=res.data.kategorije;
                console.log(res.data.kategorije);

            })
        }
    },
     mounted(){
    this.getKategorije();
  }
}
</script>