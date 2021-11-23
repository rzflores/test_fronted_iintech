import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Drinks : [],
    CartShopping: [],
    summaryPriceCart: 0,
    summaryQuantityCart : 0,
    initQuantity:1
  },
  mutations: {
    incrementShoppingCart(state, item){
      state.summaryPriceCart += item.price
      state.CartShopping.forEach(e => {
        if(e.idDrink === item.idDrink)
        {
           
           e.quantity  += 1;             
        }
      });
    },
    decrementShoppingCart(state, item){
      state.summaryPriceCart -= item.price
      state.CartShopping.forEach(e => {
        if(e.idDrink === item.idDrink)
        {
          e.quantity  -= 1;             
        }
      });
      let resultCartShopping = state.CartShopping.filter((e)=>{
        return e = (e.quantity !== 0)
      })

      state.CartShopping = resultCartShopping;

    },
    getDrinksMutation(state , drinks){
                  
      let resultDrinks =  drinks.map((item)=> {
        let valuePrice = Math.round(Math.random() * (51 - 34) + 34);
        return item =   { ...item  , price :  valuePrice  }
      })                    
      state.Drinks = resultDrinks;

    },
    addCartShopping(state,item){    
        state.summaryPriceCart += item.price
        let needPush = true;
        state.CartShopping.forEach(e => {
          if(e.idDrink === item.idDrink)
          {
             needPush = false;
             e.quantity  += 1;             
          }
        });
        if(needPush){
          state.CartShopping.push({ ...item  , quantity :  state.initQuantity});
        }
    },
    deleteCartShopping(state,item){ 
      
      state.summaryPriceCart -= (item.price * item.quantity)
      
      let resultCartShopping = state.CartShopping.filter((e)=>{
        return e = (e.idDrink !== item.idDrink)
      })

      state.CartShopping = resultCartShopping;      
    },
    getSearchMutation(state,drinks){
      state.Drinks = [];
      let resultDrinks =  drinks.map((item)=> {
        let valuePrice = Math.round(Math.random() * (51 - 34) + 34);
        return item =   { ...item  , price :  valuePrice  }
      })       
      state.Drinks = resultDrinks;
    },
    getSummaryQuantityCart(state){
      state.summaryQuantityCart = 0;
      state.CartShopping.forEach(e => {
        state.summaryQuantityCart +=  e.quantity
      });
    }
    
    
  },
  actions: {   
    getDrinks: async function ({ commit }) {
      await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then( res => {                              
        commit('getDrinksMutation',res.data.drinks)
      } )
    },
    getSearch: async function({commit} , searchParam){
      await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchParam}`)
      .then( res=> {        
        commit('getSearchMutation',res.data.drinks)
      })
    }
  },
  modules: {
  }
})
