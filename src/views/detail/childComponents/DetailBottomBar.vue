<template>
  <div class="botoom-bar">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickChat"></van-goods-action-icon>
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickShop"></van-goods-action-icon>
      <van-goods-action-icon :icon="showIsFavorite[0]" :text="showIsFavorite[1]" :color="showIsFavorite[2]" @click="startClick"></van-goods-action-icon>
      <van-goods-action-button type="warning" text="加入购物车" @click="addClick"></van-goods-action-button>
      <van-goods-action-button type="danger" text="立即购买" @click="buyClick"></van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { GoodsAction, GoodsActionIcon, GoodsActionButton, Toast } from 'vant';

  Vue.use(GoodsAction);
  Vue.use(GoodsActionButton);
  Vue.use(GoodsActionIcon);
  export default {
    name: "DetailBottomBar",
    data() {
      return {
        isFavorite: false
      }
    },
    computed: {
      showIsFavorite() {
        return this.isFavorite ? ['star','已收藏','#ff5000'] : ['star-o','收藏','#000000']
      },
    },
    methods: {
      onClickChat() {
        Toast("点击客服按钮");
      },
      onClickShop() {
        Toast("点击店铺按钮");
      },
      startClick() {
        if (!this.isFavorite) {
          Toast("收藏成功");
          this.isFavorite = true;
        } else {
          Toast("已取消收藏");
          this.isFavorite = false;
        }
      },
      addClick() {
        Toast("已加入购物车");
        this.$emit("addCart")
      },
      buyClick() {
        this.$router.push('/shopcart')
      }
    }
  }
</script>

<style scoped>
  .botoom-bar {
    position: relative;
    z-index: 9;
  }
</style>
