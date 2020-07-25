<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <home-swiper :banners="homeBanners"></home-swiper>
    <home-recommend-view :recommends="homeRecommends" ></home-recommend-view>
    <home-popular-view></home-popular-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <goods-list :goodslist="showGoods"></goods-list>
  </div>
</template>

<script>
  import HomeNavBar from "./childComponents/HomeNavBar";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomePopularView from "./childComponents/HomePopularView";
  import HomeRecommendView from "./childComponents/HomeRecommendView";

  import TabControl from "../../components/content/TabControl/TabControl";
  import GoodsList from "../../components/content/Goods/GoodsList";

  import {getHomeMultidata,getHomeGoodsdata} from "../../network/home";

  export default {
    name: "Home",
    components: {
      HomeNavBar,
      HomeSwiper,
      HomeRecommendView,
      HomePopularView,
      TabControl,
      GoodsList
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
        currentType: 'pop'
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      tabClick(index){
        console.log(index)
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
        })
      }

    },
    created() {
      this.getMultidata()
      this.getGoodsdata('pop')
      this.getGoodsdata('new')
      this.getGoodsdata('sell')
    }

  }
</script>

<style scoped>
  .tab-control {
    position: sticky;
    top: 44px;
  }

</style>
