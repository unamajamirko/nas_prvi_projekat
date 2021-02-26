<template>
  <div class="main">
    {{oneProduct}}
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
          oneProduct: [],
          picture: []
        }
    },
    methods: {
        oneProduct(){
          axios.get('http://231j122.mars1.mars-hosting.com/api/proizvod',{
            params:{pro_od: this.$route.params.id}
          }).then(res => {
            console.log(res.data);
            this.oneProduct = res.data.proizvod;
            this.picture = res.data.slike;
          })
        }
    }

}
</script>


<style>

</style>