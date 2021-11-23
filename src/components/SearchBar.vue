<template>
  <div>
    <v-row style="padding-top:1.3rem ; padding-right:1.5rem;">
    <v-icon style="padding-bottom:1rem;">mdi-magnify</v-icon>
    <v-text-field label="Buscar..." v-model="search" @change="searching"  clearable></v-text-field>    
    </v-row>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
     methods:{
        ...mapActions(['getSearch']),  
        searching(){            
             this.getSearch(this.search)
        } 
    },      
    data: () => ({
     search: ''
    }),
    name:'SearchBar'
  }
</script>