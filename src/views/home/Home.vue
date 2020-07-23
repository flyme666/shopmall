<template>
  <home-nav-bar></home-nav-bar>
</template>

<script>
  import HomeNavBar from "../../components/content/HomeNavBar";
  import {getHomeMultidata} from "../../network/home";

  export default {
    name: "Home",
    data() {
      return {
        homeBanners: [],
        homeRecommends: []
      }
    },
    components: {HomeNavBar},
    created() {
      getHomeMultidata().then(res => {
        console.log(res.data);
        this.homeBanners = res.data.banner.list;
        this.homeRecommends = res.data.recommend.list;
      })
    }

  }
</script>

<style scoped>

</style>
