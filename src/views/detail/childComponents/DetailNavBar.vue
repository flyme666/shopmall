<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="../../../assets/img/common/back.svg" alt="">
    </div>
    <div slot="center">
      <div class="tab-control">
        <div class="tab-control-item"
             v-for="(item,index) in title"
             :class="{active: index ===currentIndex}"
             @click="itemClick(index)">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        title: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      tabClick(index){
        this.$emit('tabClick',index)
      },
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',this.currentIndex)
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

  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 2;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

</style>
