<template>
  <div id="detail">
    <detail-nav-bar @tabClick="tabClick" ref="tabControl"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods" class="base-info"/>
      <detail-shop-info :shop-info="shopInfo" class="shop-info"/>
      <detail-goods-info :goods-info="goodsInfo" class="goods-info" />
      <detail-params-info :params-info="paramsInfo" class="params-info" ref="paramsInfo"/>
      <detail-comment-info :comment-info="commentInfo" class="comment-info" ref="commentInfo"/>
      <goods-list :goodslist="recommendInfo" :is-recommend="true" ref="recommendInfo" class="goods"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>

</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo";
  import DetailShopInfo from "./childComponents/DetailShopInfo";
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
  import DetailParamsInfo from "./childComponents/DetailParamsInfo";
  import DetailCommentInfo from "./childComponents/DetailCommentInfo";
  import DetailBottomBar from "./childComponents/DetailBottomBar";


  import BackTop from "../../components/content/backtop/BackTop";
  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {getData, getRecommendData, Goods ,Shop } from "../../network/detail";
  import {debounce} from "../../common/utils";
  import {backTopMixin, imgListenerMixin} from "../../common/mixin";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      Scroll,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      BackTop
    },
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        shopInfo: {},
        goodsInfo: {},
        paramsInfo: {},
        commentInfo: {},
        recommendInfo: [],
        topY: [0,0,0,0,Number.MAX_VALUE],
        currentIndex: 0
      }
    },
    mixins: [imgListenerMixin,backTopMixin],
    methods: {
      getId() {
        this.id = this.$route.query.id
      },
      getData() {
        getData(this.id).then(res => {
          const  data = res.result
          this.topImages = data.itemInfo.topImages
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
          this.shopInfo = new Shop(data.shopInfo)
          this.goodsInfo = data.detailInfo
          this.paramsInfo = data.itemParams
          if(data.rate.cRate !== 0 ) {
            this.commentInfo = data.rate.list[0]
          }
        })
      },
      getRecommendData() {
        getRecommendData().then(res => {
          this.recommendInfo = res.data.list
        })
      },

      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
        this.topY.forEach((item,index) => {
          if((-position.y >= item && -position.y < this.topY[index+1]) && this.currentIndex !== index){
            this.currentIndex = index
            this.$refs.tabControl.currentIndex= this.currentIndex
          }
        })

      },
      tabClick(index) {
        if(index !== 0 && this.topY[index] === 0) {
          console.log("请稍等")
        }
        this.$refs.scroll.scrollTo(0,-this.topY[index],200)
      },
      addToCart() {
        const goods = {
          image: this.topImages[0],
          title: this.goods.title,
          desc: this.goods.desc,
          price: this.goods.lowNowPrice,
          id: this.id
        }
        // console.log(goods);
        this.$store.dispatch('setCartData', goods)
      }

    },
    created() {
      this.getId()
      this.getData()
      this.getRecommendData()
    },
    mounted() {
      const setY = () => {
        this.topY[1] = this.$refs.paramsInfo.$el.offsetTop
        this.topY[2] = this.$refs.commentInfo.$el.offsetTop
        this.topY[3] = this.$refs.recommendInfo.$el.offsetTop
      }
      this.$bus.$on('imageIsLoaded',debounce(setY,200))
    },
    destroyed() {
      this.$bus.$off('imageIsLoaded',this.imgLoadListener)
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

  .base-info, .shop-info, .goods-info, .params-info, .comment-info, .goods{
    box-shadow: 0px 5px 1px rgba(100, 100, 100, 0.1) ;
  }

  .goods {
    padding-top: 5px;
  }




</style>
