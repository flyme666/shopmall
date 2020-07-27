<template>
  <div class="goods-item">
    <img :src="goods.show.img" alt="">
    <div class="goods-title">
      <p >{{goods.title}}</p>
      <span class="price">{{goods.price}}</span>
      <span class="starimg"> <img src="../../../assets/img/common/collect.svg" alt=""></span>
      <span class="collect">{{goods.cfav}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;

    font-size: 12px;
    text-align: center;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-title {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-title p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .starimg img {
    position: relative;
    top: 3px;
    left: 6px;
    width: 14px;
    height: 14px;
  }

  .collect {
    margin-left: 6px;
  }

  .price {
    color: var(--color-high-text);
  }

</style>
