<template>
  <v-app>
    <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://www.terra.cl/u/fotografias/m/2020/8/31/f1280x720-2466_134141_5050.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="600"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      

      <v-app-bar-title>Bar App</v-app-bar-title>

      <v-spacer></v-spacer>
       <SearchBar></SearchBar>      
       <ShoppingCard ></ShoppingCard>       
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
    >
       <v-main style="padding-top:10rem;">
      
         <router-view/>
     
        </v-main>

    </v-sheet>
    
  </v-card>    
  </v-app>
</template>

<script>
import ShoppingCard from './components/ShoppingCard.vue'
import SearchBar  from './components/SearchBar.vue'
import {  mapState  }  from 'vuex'
export default {
  computed:{
       ...mapState(['CartShopping']),   
     },
  name: 'App',
  methods: {
   
  },
  components:{
    ShoppingCard,
    SearchBar
  },
  data: () => ({
   
  }),
};
</script>
