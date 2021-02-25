<template>
  <div class="main">
      <div class="comments">
            <div v-for="(comment,index) in comments" :key="index"  class="comment"
            >
             <div class="user"><img
                class="img"
                :src="'data:image/jpg;base64,' + comment.usr_image"
              />
                    <p>{{comment.usr_username}}</p>
                 </div>                   
                <p class="description">{{comment.kom_text}}</p>
            </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            slike: [],
            comments: []
        }
    },
    methods: {
        
        
    },
    mounted(){
        axios.get('http://231j122.mars1.mars-hosting.com/api/comments')
        .then(res =>{
            this.comments = res.data.data;
            console.log(res);
            });       
    }
}
</script>

<style scoped>
.main{
    padding: 20px;
    background-color: rgb(197, 195, 195);
    height: 100vh;
}
.comment{
    transition: all .2s ease-in-out;
    display: grid;
    grid-template-columns: 1fr 4fr ;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 60%;
    background-color: white;
    padding: 20px;
    padding-left: 0px;
    margin: auto;
    margin-top: 30px;
    border: solid black 3px;
    border-radius: 15px;
    
}
.comment:hover{
    transform: scale(1.05);
    color: black;
    font-weight: bold;
}
img{
    width: auto;
    height: 80px;
    border: solid grey 2px;
    border-radius: 20%;
}
.user{
    border-right: darkslateblue solid 2px;
    display: grid;
    justify-content: center;
    
}
.description{
    padding-left: 20px;
    text-align: left;
}
</style>>

