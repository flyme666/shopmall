import {
  SET_CART_DATA,
  DELETE_GOOD_DATA
} from "./types";

export default {
  [SET_CART_DATA]({state,commit},payload) {
    let cartlist = JSON.parse(localStorage.getItem('cartGoodsList')) || []

    if (cartlist) {
      state.cartList = cartlist
      //查找购物车列表数据中是否已有当前物品
      let findGoods = state.cartList.find(item => item.id === payload.id)
      if(findGoods) {
        //如果已有数据，为该物品执行addCounter
        commit('addCounter', findGoods)
      }else {
        //如果没有数据，执行addToCart
        commit('addToCart',payload)
      }
    }else {
      commit('addToCart',payload)
    }
  },
  [DELETE_GOOD_DATA]({state,commit},payload) {
    //查找购物车列表数据中是否已有当前物品
    let findGoods = {}
    state.cartList.forEach(item => {
      if(item.id === payload.id) {
        findGoods = item
      }
    })
    if(findGoods.count > 1) {
      commit('subCounter', findGoods)
    }else {
      commit('deleteGood',findGoods)
    }
  }
}
