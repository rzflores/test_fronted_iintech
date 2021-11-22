import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Drinks : [],
    CartShopping: [],
    summaryPriceCart: 0
  },
  mutations: {
    getDrinksMutation(state , drinks){
                  
      let resultDrinks =  drinks.map((item)=> {
        let valuePrice = Math.round(Math.random() * (51 - 34) + 34);
        return item =   { ...item  , price :  valuePrice  }
      })                    
      state.Drinks = resultDrinks;

    },
    addCartShopping(state,item){    
      state.summaryPriceCart += item.price
      state.CartShopping.push(item);      
    },
    deleteCartShopping(state,item){ 
      
      state.summaryPriceCart -= item.price
      
      let resultCartShopping = state.CartShopping.filter((e)=>{
        return e = (e.idDrink !== item.idDrink)
      })

      state.CartShopping = resultCartShopping;      
    }
    
    
    
  },
  actions: {   
    getDrinks: async function ({ commit }) {
      await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then( res => {                              
        commit('getDrinksMutation',res.data.drinks)
      } )
    },
  },
  modules: {
  }
})
