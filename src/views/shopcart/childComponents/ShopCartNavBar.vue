<template>
  <nav-bar class="shop-cart-navbar" background-color="#ff8198" text-color="#fff">
    <div slot="center">
      <span>购物车({{goodsNum}})</span>
    </div>
    <div slot="right">
      <span class="right" @click="deleteAll">清空</span>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";

  export default {
    name: "ShopCartNavBar",
    props: {
      goodsNum: {
        type: Number,
        default: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      deleteAll() {
        this.$emit("deleteAll")
      }
    }
  }
</script>

<style scoped>
  .right{
    padding-right: 10px;
    font-size: 14px;
  }
</style>
