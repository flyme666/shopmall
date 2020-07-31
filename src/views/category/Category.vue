<template>
  <div id="category">
    <nav-bar background-color="#ff8198" text-color="#fff">
      <p slot="center">商品分类</p>
    </nav-bar>
    <slide-bar class="slide-bar" :datalist="slideBarData" @slideBarClick="slideBarClick($event)"></slide-bar>
    <scroll class="categroy-scroll" ref="scroll" :probe-type="3">
      <main-category class="main-categroy" :main-top-data-list="topDataList"></main-category>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick(currentIndex,$event)" ref="tab"></tab-control>
      <goods-list :goodslist="goods"></goods-list>
    </scroll>

  </div>
</template>

<script>
  import SlideBar from "./childChomponents/SlideBar";
  import MainCategory from "./childChomponents/MainCategory";

  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {getSlideBarData, getMainTopData, getMainMoreData} from "../../network/categroy";

  export default {
    name: "Category",
    components: {
      NavBar,
      SlideBar,
      MainCategory,
      Scroll,
      TabControl,
      GoodsList
    },
    data() {
      return {
        slideBarData: {},
        topDataList: [],
        currentIndex: 0,
        goods: [],
      }
    },
    methods: {
      slideBarClick(obj) {
        if(this.currentIndex === obj.index) return
        this.currentIndex = obj.index
        this.getMainMoreData(this.slideBarData.list[this.currentIndex].miniWallkey, 'pop')
        this.getMainTopData(obj.maitKey)
        this.$refs.tab.currentIndex = 0
        this.$refs.scroll.scrollTo(0,0,500)
      },

      tabClick(miniWallkey,index) {
        const typeList = ['pop','new','sell']
        this.getMainMoreData(this.slideBarData.list[this.currentIndex].miniWallkey, typeList[index])
      },

      getSlideBarData(){
        getSlideBarData().then(res => {
          this.slideBarData = res.data.category
          this.$nextTick(() => {
            this.getMainTopData(this.slideBarData.list[0].maitKey)
            this.getMainMoreData(this.slideBarData.list[0].miniWallkey,'pop')
          })
        })
      },
      getMainTopData(value) {
        getMainTopData(value).then(res => {
          this.topDataList = [...res.data.list]
        });
      },
      getMainMoreData(miniWallkey,type) {
        getMainMoreData(miniWallkey,type).then( res => {
          this.goods = [...res]
        })
      }
    },
    created() {
      this.getSlideBarData()
    },
    activated() {
      this.$store.commit("setLoading", true);
    }
  }
</script>

<style scoped>
  #category {
    height: calc(100vh - 50px);
  }

  .slide-bar {
    width: 30vw;
  }

  .main-categroy {

  }

  .categroy-scroll {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 30vw;
    right: 0px;
    color: #666666;
  }

</style>
