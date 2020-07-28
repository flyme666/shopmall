<template>
  <div v-if="Object.keys(goods).length !== 0" class="goods">
    <div class="goods-title">{{goods.title}}</div>
    <div class="goods-price">
      <div class="goods-now-price">{{goods.newPrice}}</div>
      <div class="goods-old-price">{{goods.oldPrice}}</div>
      <div class="goods-discount" :style="{backgroundColor:goods.discountBgColor,color:'white'}">{{goods.discount}}</div>
    </div>
    <div class="info">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="goods-services">
      <span
          :key="index"
          class="goods-services-item"
          v-for="index in goods.services.length - 1"
          v-if="goods.services[index - 1].icon"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .goods {
    padding-left: 8px;
    padding-right: 8px;
  }

  .goods-title {
    margin-top: 10px;
  }

  .goods-price {
    display: flex;
    margin-top: 12px;
  }

  .goods-now-price {
    color: var(--color-high-text);
    font-size: 24px;
  }

  .goods-old-price {
    margin-left: 2%;
    margin-top: 10px;
    font-size: 13px;
    text-decoration: line-through;
  }

  .goods-discount {
    margin-left: 2%;
    margin-bottom: 10px;
    padding: 3px 5px;
    font-size: 12px;
    border-radius: 8px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding-bottom: 5px;
    font-size: 13px;
    color: #999999;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1) ;
  }

  .goods-services {
    display: flex;
    flex-wrap: wrap;
    line-height: 60px;
    justify-content: space-between;
  }

  .goods-services-item img {
    position: relative;
    top: 2px;
    width: 14px;
    height: 14px;
  }

  .goods-services-item span {
    font-size: 13px;
    margin-left: 5px;
    color: #333333;
  }
</style>
