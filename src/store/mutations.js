import {
  ADD_TO_CART,
  ADD_COUNTER,
  SUB_COUNTER,
  SET_CART_GOODS_LIST,
  DELETE_GOOD,
  CLEAR_CART_LIST,
  SET_LOADING
} from "./types";

import Vue from "vue";
import {Toast} from "vant";

Vue.use(Toast)

export default {
  [SET_LOADING](state, bol) {
    state.loading = bol;
  },
  [ADD_COUNTER](state,payload) {
    payload.count++
    Toast({
      type: "success",
      message: `当前商品数量为${payload.count}`,
      // 弹框的时候禁止点击
      forbidClick: true,
      duration: 1500
    });
    localStorage.setItem('cartGoodsList',JSON.stringify(state.cartList))
  },
  [ADD_TO_CART](state,payload) {
    payload.count = 1
    payload.checked = false
    state.cartList.push(payload)
    localStorage.setItem('cartGoodsList',JSON.stringify(state.cartList))
  },
  [SUB_COUNTER](state,payload) {
    payload.count--
    localStorage.setItem('cartGoodsList',JSON.stringify(state.cartList))
  },
  [SET_CART_GOODS_LIST](state, payload) {
    state.cartList = payload;
  },
  [DELETE_GOOD](state,payload) {
    let index = state.cartList.findIndex(item =>{
      if(item.id === payload.id){
        return true
      }
    })
    state.cartList.splice(index,1)
    if(state.cartList.length === 0) {
      localStorage.removeItem("cartGoodsList");
    }
  },
  [CLEAR_CART_LIST](state) {
    localStorage.removeItem("cartGoodsList");
    state.cartList = [];
  }
}
