<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
        S/. {{item.price}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
         {{item.strDrink}}
        </v-list-item-title>        
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
      ...mapMutations(['deleteCartShopping']),
         deleteToCart(item) {                               
             this.deleteCartShopping(item)
      },
     

    },
    
    name: 'ProductShoppingCard',
    
    
  }
</script>
