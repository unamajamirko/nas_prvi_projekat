<template>
   <div class="porudzbenica">
     <div>
          <h2>Naručivanje:</h2>
         <label for="tezina">Unesite željenu težinu proizvoda: </label>
    <input type="text" v-model="tezina" placeholder="Težina" /><br />
    <br />
   <p>Informacije o naručiocu:</p>
    <label for="ime">Ime: </label>
    <input type="text" v-model="ime" placeholder="Ime" /><br />
    <br />
     <label for="prezime">Prezime:</label>
    <input type="text" v-model="prezime" placeholder="Prezime" /><br />
    <br />
    <p>Lokacija dostave:</p>
    <label for="adresa">Ulica i broj: </label>
    <input type="text" v-model="adresa" placeholder="Ulica i broj" /><br />
    <br />

    <label for="grad">Grad: </label>
    <input type="text" v-model="grad" placeholder="Grad"/>

    <p>Kontakt podaci:</p>
     <label for="telefon">Telefon: </label>
    <input type="text" v-model="telefon" placeholder="Telefon" /><br />
    <br />
    <label for="mail">e-mail: </label>
    <input type="mail" v-model="mail" placeholder="e-mail" /><br />
    <br />

    <p>Napomena:</p>
    <textarea></textarea>
     </div>
   </div>

</template>
<script>

export default {
    data(){
        return{
            ime:"",
            prezime:"",
            adresa:"",
            tezina:"",
            telefon:"",
            mail:"",
            grad:"",


        }
    },
    methods:{
        unesiPorudzbinu(){
            
        }
    }
   
}
</script>