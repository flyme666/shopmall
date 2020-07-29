<template>
  <div >
    <p v-show="isRecommend" class="recommend">推荐商品</p>
    <div class="goods-list">
      <goods-list-item v-for="(item,index) in goodslist" :goods="item" :key="index"></goods-list-item>
    </div>
    <p v-show="isRecommend" class="end">已经到底啦！</p>

  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    props: {
      goodslist: {
        type: Array,
        default() {
          return []
        }
      },
      isRecommend: {
        type: Boolean,
        default: false
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

  .recommend {
    font-size: 18px;
    padding-top: 5px;
    margin: 15px 0px;
    padding-left: 10px;
  }

  .end {
    text-align: center;
    padding-top: 20px;
    font-size: 15px;
  }
</style>
