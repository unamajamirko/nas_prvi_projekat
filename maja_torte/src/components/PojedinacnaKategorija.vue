<template>
    <div class="pojedinacni">
       <div v-for="proizvod in proizvodi" :key="proizvod.pro_id">
           {{proizvod.pro_naziv}}
       </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            proizvodi:[]
        }
    },
    methods:{
        getProizvodi(){
            axios.get('http://231j122.mars1.mars-hosting.com/api/proizvodi',{
                params:{kat_id:this.$route.params.id}
            }).then((res)=>{
                console.log(res.data.data);
                this.proizvodi=res.data.data;
            })
        }

    },
     mounted(){
    this.getProizvodi();
    }
}
</script>