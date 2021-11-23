<template>
<div>
    
    <v-card 
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="primary"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      contain 
      aspect-ratio="1.4"
      height="250"
      :src= "item.strDrinkThumb"
      :lazy-src="item.strDrinkThumb"
    >
    <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-row>
        </template>
    
    </v-img>

    <v-card-title>{{item.strDrink}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >        

        <div class="grey--text ms-4">
          Categoria : {{item.strCategory}}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
         S/. {{item.price}}
      </div>
    
    </v-card-text>       
    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="primary"
        text
        @click="addToCart(item)"
      >
        Agregar
      </v-btn>
    </v-card-actions>
  </v-card>
</div>

</template>


<script>
  
   import {  mapState , mapMutations }  from 'vuex'

  export default {
     computed:{
       ...mapState(['CartShopping']),   
     }, 
    data:()=> ({
      loading: false,
      selection: 1,
    }),    
    props:{
        item : Object
    },
    methods:{ 
      ...mapMutations(['addCartShopping','getSummaryQuantityCart']),
      addToCart (item) {          
        this.loading = true        
        setTimeout(() => {
            this.loading = false;            
            this.addCartShopping(item)
            this.getSummaryQuantityCart();
        }, 2000)
      },
     

    },
    
    name: 'CardProduct',
    
    
  }
</script>
