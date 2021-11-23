<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        
        <div class="text-overline">
         Cantidad: {{ item.quantity }}
        </div>
        <div class="text-overline">
         <v-btn
          color="primary"
          dark
          fab
          small   
          @click="increment(item)"       
          
        >         
          <v-icon>mdi-plus-circle </v-icon> 
        </v-btn>
        <v-btn
          color="primary"
          dark
          fab
          small
          @click="decrement(item)"          
          
        >         
          <v-icon>mdi-minus-circle </v-icon> 
        </v-btn>
        </div>
        <v-list-item-title class="text-h5 mb-1">
        
        </v-list-item-title>        
        <div class="text-overline">
        S/. {{item.price}}  
        </div>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"        
      > 
      <v-list-item-content>          
          <v-img
              contain 
              aspect-ratio="1.4"
              height="100"
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
                      color="blue lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
    
            </v-img>
      </v-list-item-content>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        color="red"        
        rounded
        text
        @click="deleteToCart(item)"
      >
        Eliminar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  
   import {  mapState , mapMutations }  from 'vuex'

  export default {
     computed:{
       ...mapState(['CartShopping']),   
     }, 
    
    props:{
        item : Object
    },
    methods:{ 
      ...mapMutations(['deleteCartShopping','getSummaryQuantityCart','incrementShoppingCart','decrementShoppingCart']),
         deleteToCart(item) {                               
             this.deleteCartShopping(item)
             this.getSummaryQuantityCart();
      },
      increment(item){
          this.incrementShoppingCart(item)
      },
      decrement(item){
        this.decrementShoppingCart(item)
      },

    },
    
    name: 'ProductShoppingCard',
    
    
  }
</script>
