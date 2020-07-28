<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="../../../assets/img/common/back.svg" alt="">
    </div>
    <div slot="center">
      <tab-control :titles="title" class="detail-tab"></tab-control>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  import TabControl from "../../../components/content/tabcontrol/TabControl";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar,
      TabControl
    },
    data() {
      return {
        title: ['商品','参数','评论','推荐']
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .detail-tab {
    font-size: 13px;
  }
  .back img {
    margin-top: 10px;
    padding-left: 20px;
  }

</style>
