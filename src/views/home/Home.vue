<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <home-swiper :banners="homeBanners"></home-swiper>
    <home-recommend-view :recommends="homeRecommends"></home-recommend-view>
  </div>
</template>

<script>
  import HomeNavBar from "./childComponents/HomeNavBar";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommendView from "./childComponents/HomeRecommendView";

  import {getHomeMultidata} from "../../network/home";

  export default {
    name: "Home",
    data() {
      return {
        homeBanners: [],
        homeRecommends: []
      }
    },
    components: {
      HomeNavBar,
      HomeSwiper,
      HomeRecommendView
    },
    created() {
      getHomeMultidata().then(res => {
        this.homeBanners = res.data.banner.list;
        this.homeRecommends = res.data.recommend.list;
      })
    }

  }
</script>

<style scoped>

</style>
