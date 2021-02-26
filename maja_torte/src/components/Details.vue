<template>
  <div class="main">
    {{product}}{{proizvod_id}}
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
          product: [],
          picture: [],
          proizvod_id: window.location.pathname
        }
    },
    methods: {
        oneProduct(){
          axios.get('http://231j122.mars1.mars-hosting.com/api/proizvod',{
            params:{pro_id: this.proizvod_id}
          }).then(res => {
            console.log(res.data);
            this.product = res.data.proizvod;
            this.picture = res.data.slike;
          })
        }
    },
    mounted(){
      this.oneProduct();
    }

}
</script>


<style>

</style>