<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <tab-control v-show="isFixed" ref="tabcontrol" :titles="['流行','新款','精选']"
                 @tabClick="tabClick" :class="{fixed:isFixed}"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true"
            @scroll="contentScroll" @pullingUp="loadMore">
      <home-swiper :banners="homeBanners" @swipperImageIsLoaded="swiperImageLoaded"></home-swiper>
      <home-recommend-view :recommends="homeRecommends" ></home-recommend-view>
      <home-popular-view></home-popular-view>
      <tab-control ref="tabcontrol" :titles="['流行','新款','精选']"
                   @tabClick="tabClick" :class="{fixed:isFixed}"></tab-control>
      <goods-list :goodslist="showGoods"></goods-list>
    </scroll >
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeNavBar from "./childComponents/HomeNavBar";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomePopularView from "./childComponents/HomePopularView";
  import HomeRecommendView from "./childComponents/HomeRecommendView";

  import Scroll from "../../components/common/scroll/Scroll";
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BackTop from "../../components/content/backtop/BackTop";

  import {getHomeMultidata,getHomeGoodsdata} from "../../network/home";
  import {debounce} from "../../common/utils";

  export default {
    name: "Home",
    components: {
      HomeNavBar,
      HomeSwiper,
      HomeRecommendView,
      HomePopularView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        homeBanners: [],
        homeRecommends: [],
        goods: {
          'pop': {page: 0, list:[] },
          'new': {page: 0, list:[] },
          'sell': {page: 0, list:[] },
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isFixed:false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
        this.isFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getGoodsdata(this.currentType)
      },
      swiperImageLoaded() {
        this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop
      },

      getMultidata(){
        getHomeMultidata().then(res => {
          this.homeBanners = res.data.banner.list;
          this.homeRecommends = res.data.recommend.list;
        })
      },
      getGoodsdata(type){
        const page = this.goods[type].page + 1
        getHomeGoodsdata(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullingUp()
        })
      },

    },
    created() {
      this.getMultidata()
      this.getGoodsdata('pop')
      this.getGoodsdata('new')
      this.getGoodsdata('sell')
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('imageIsLoaded',() => {
        refresh()
      })
    }

  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 0px;
    right: 0px;
  }
  .fixed {
    position: relative;
    z-index: 2;
  }

</style>
