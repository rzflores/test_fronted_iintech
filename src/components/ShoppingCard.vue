<template>
  <div class="text-center">   
    <v-bottom-sheet
      v-model="sheet"
      inset
    >

      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="orange"
          dark
          v-bind="attrs"
          v-on="on"
        >
         {{CartShopping.length}}
          <v-icon>mdi-cart</v-icon> 
        </v-btn>
      </template>
      <v-sheet
        class="text-center"
        height="300px"
        width = "1000px"
      >
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="sheet = !sheet"
        >
          X
        </v-btn>
        <div class="my-3">
          <div> Total : S/ {{ summaryPriceCart }} </div>
         <div style="display:flex;overflow-x:auto; white-space: nowrap;">
            <div  v-for="item in CartShopping">
              <ProductShoppingCard :item="item"> </ProductShoppingCard>                          
            </div>
        </div> 
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
    import ProductShoppingCard from './ProductShoppingCard.vue'
    import {  mapState  }  from 'vuex'

  export default {
    data: () => ({
      sheet: false,
    }),
    computed:{
       ...mapState(['CartShopping','summaryPriceCart']),   
     },
    name:'ShoppingCard',
    components:{
      ProductShoppingCard
    }
  }
</script>