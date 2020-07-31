<template>
  <div id="shop-cart">
    <shop-cart-nav-bar :goods-num="cartListLength" @deleteAll="deleteAll"/>
    <scroll class="content" ref="scroll" :probe-type="3" >
      <shop-cart-goods-list-item v-for="(item,index) in cartList"
                                 :goods-item="item" :key="index"
                                 @goodSelected="goodSelected"
      />
    </scroll>
    <shop-cart-commit class="commit" :total-price="totalPrice" @allSelected="allSelected" ref="commit" @commit="commitList"/>
  </div>
</template>

<script>
  import ShopCartNavBar from "./childComponents/ShopCartNavBar";
  import ShopCartGoodsListItem from "./childComponents/ShopCartGoodsListItem";
  import ShopCartCommit from "./childComponents/ShopCartCommit";

  import Scroll from "../../components/common/scroll/Scroll";

  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import Vue from "vue"
  import {Toast, Dialog} from "vant"

  Vue.use(Toast)
  Vue.use(Dialog)

  export default {
    name: "Shopcart",
    data() {
      return {
        price: 0
      }
    },
    components: {
      ShopCartNavBar,
      ShopCartGoodsListItem,
      ShopCartCommit,
      Scroll
    },
    computed: {
      ...mapGetters(['cartListLength','cartList']),
      totalPrice() {
        return parseInt(this.cartList
            .filter(item => item.checked)
            .reduce((prev, item) => prev + item.price * item.count, 0)
            .toFixed(2) * 100);
      }
    },
    methods: {
      ...mapMutations(['clearCartList']),
      goodSelected() {
        let isAllSelectedFlag = 1
        this.cartList.forEach(item => {
          if(!item.checked) {
            isAllSelectedFlag = 0
          }
        })
        if(isAllSelectedFlag === 0) {
          this.$refs.commit.checked = false
        }else {
          this.$refs.commit.checked = true
        }
      },
      allSelected(){
        this.cartList.forEach(item => {
          item.checked = !item.checked
        })
      },
      deleteAll() {
        localStorage.clear()
        Toast("购物车已清空")
        this.$refs.commit.checked = false
        this.$store.commit("clearCartList");
      },
      commitList() {
        Dialog.confirm({
          title: "温馨提示",
          message: "确定要提交订单么"
        }).then(() => {
          this.$toast({
            type: "success",
            message: `支付成功，共计 ${this.totalPrice/100} 元`,
            forbidClick: true,
            duration: 1500
          });
          setTimeout(() => {
            this.clearCartList()
            this.$refs.commit.checked = false
          },1500)
        }).catch(err => err)

      }
    },
    created() {
      let list = JSON.parse(localStorage.getItem("cartGoodsList")) || [];
      if (list) {
        this.$store.commit("setCartGoodsList", list);
      }
    },
    mounted() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  #shop-cart {
    height: 100vh;
    position: relative;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 100px;
    left: 0px;
    right: 0px;
  }

</style>
