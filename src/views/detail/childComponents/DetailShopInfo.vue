<template>
    <div class="shopinfo" v-if="Object.keys(shopInfo).length !== 0">
      <div class="shop-top">
        <div class="shop-logo">
          <img :src="shopInfo.logo" alt="" v-if="shopInfo.logo">
          <span class="shop-name">{{shopInfo.name}}</span>
        </div>
      </div>

      <div class="shop-middle">
        <div class="shop-middle-left">
          <div class="shop-data">
            <p class="shop-data-num">{{shopInfo.sells | showNum}}</p>
            <p class="shop-data-word">总销量</p>
          </div>
          <div class="shop-data">
            <p class="shop-data-num">{{shopInfo.goodsCount | showNum}}</p>
            <p class="shop-data-word">总宝贝</p>
          </div>
        </div>
        <div class="shop-middle-right">
              <table  class="shop-score">
                <tr v-for="(item, index) in shopInfo.score">
                  <td class="shop-score-name">{{item.name}}</td>
                  <td class="shop-score-score" :style="{color:item.isBetter ? 'red' : 'green'}">{{item.score}}</td>
                  <td class="shop-score-isbetter" :style="{backgroundColor:item.isBetter ? 'red' : 'green',color:'white'}">{{item.isBetter ? ' 高 ' : ' 低 '}}</td>
                </tr>
              </table>
        </div>
      </div>

      <div class="shop-bottom" >
        <div class="shop-in">
          <a :href="shopInfo.href">进店逛逛</a>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showNum(value) {
        if(value < 10000) return value
        else
          return (value/10000).toFixed(1).toString() + '万'
      }
    }
  }
</script>

<style scoped>
  .shop-logo {
    display: flex;
    align-items: center;
    line-height: 45px;
    margin-top: 30px;
    margin-left: 10px;
    text-align: center;
  }

  .shop-logo img{
    width: 45px;
    height: 45px;
    border-radius:50%;
  }

  .shop-logo span {
    margin-left: 10px;
  }

  .shop-middle {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  .shop-middle-left {
    flex: 1;
    color: #333333;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .shop-middle-right {
    flex: 1;
    margin-left: 20px;
    justify-content: space-around;
    font-size: 13px;
  }

  .shop-score {
    display: inline-block;
    justify-content: space-between;
  }

  .shop-score tr {
    line-height: 20px;
  }

  .shop-score-score {
    padding-left: 20px;
    padding-right: 20px;
  }

  .shop-data {
    display: inline-block;
    text-align: center;
    margin-left: 20px;
    justify-content: space-around;
  }

  .shop-data p{
    padding: 3px;
  }

  .shop-data-num {
    font-size: 18px;
    font-weight: bold;
  }

  .shop-data-word {
    font-size: 12px;
  }

  .shop-bottom {
    text-align: center;
  }
  .shop-in {
    display: inline-block;
    width: 100px;
    line-height: 35px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    justify-content: space-around;
    font-size: 13px;
    border-radius: 5px;
    background-color: #f2f5f8;
  }

</style>
