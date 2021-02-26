<template>
    <div class="pojedinacni">
        <h2>{{type[0].kat_naziv}}</h2>
            <div class="image" v-for="proizvod in proizvodi" :key="proizvod.pro_id">
                <router-link  class="links" v-bind:to="'/Details/' +
                 proizvod.pro_id"   >   
                        <img :src="'data:image/jpg;base64,' + proizvod.pro_img" 
                         alt="something went wrong!" />   
                <h4>{{proizvod.pro_naziv}}</h4>
                </router-link>
            </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            proizvodi:[],
            type: []
        }
    },
    methods:{
        getProizvodi(){
            axios.get('http://231j122.mars1.mars-hosting.com/api/proizvodi',{
                params:{kat_id:this.$route.params.id}
            }).then((res)=>{
                console.log(res.data.data);
                this.proizvodi=res.data.data;
                console.log(res.data.type);
                this.type= res.data.type;
            })
        },
   
    },
    
     mounted(){
    this.getProizvodi();
    }
}
</script>
<style scoped>
img{
    width: 400px;
    height: auto;
}
.image{
    display: grid;
    grid-template-rows: 4fr 1fr;
    justify-items: center;
}
</style>