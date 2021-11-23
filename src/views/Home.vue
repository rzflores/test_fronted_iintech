<template>
  <div style="display:flex;flex-direction:row;flex-wrap: wrap;justify-content:space-around;">
    <div  v-for="item in Drinks">
      <CardProduct  :item="item"></CardProduct>
    </div>
  
 </div> 
  
</template>

<script>
  import {  mapState , mapActions }  from 'vuex'
  import CardProduct from '../components/CardProduct.vue'

  export default {
    data:()=> ({
      loading: false,
      selection: 1,
    }),
     created(){
     this.getDrinks();       
     }, 
     computed:{
       ...mapState(['Drinks']),   
     },        
    name: 'Home',
    methods:{ 
      ...mapActions(['getDrinks']),     
     

    },
    components: {
      CardProduct,
    },
  }
</script>
