<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" class="goods-info"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo" class="shop-info"></detail-shop-info>
      <detail-goods-info :goods-info="goodsInfo" ></detail-goods-info>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>

</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo";
  import DetailShopInfo from "./childComponents/DetailShopInfo";
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
  import BackTop from "../../components/content/backtop/BackTop";

  import Scroll from "../../components/common/scroll/Scroll";

  import {getData, Goods ,Shop } from "../../network/detail";
  import {debounce} from "../../common/utils";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      Scroll,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      BackTop
    },
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        shopInfo: {},
        goodsInfo:{},
        isShowBackTop: false
      }
    },
    methods: {
      getId() {
        this.id = this.$route.query.id
      },
      getData() {
        getData(this.id).then(res => {
          console.log(res)
          const  data = res.result
          this.topImages = data.itemInfo.topImages
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
          this.shopInfo = new Shop(data.shopInfo)
          this.goodsInfo = data.detailInfo
        })
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0,0,500)
      }
    },
    created() {
      this.getId()
      this.getData()
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,100)
      this.$bus.$on('imagesIsLoaded',() => {
        refresh()
      })
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 0px;
    right: 0px;
  }

  .goods-info {
    box-shadow: 0px 5px 1px rgba(100, 100, 100, 0.1) ;
  }

  .shop-info {
    box-shadow: 0px 5px 1px rgba(100, 100, 100, 0.1) ;
  }

</style>
