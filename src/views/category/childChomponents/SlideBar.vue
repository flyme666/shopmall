<template>
  <div class="slide-bar">
    <scroll class="slide-bar-scroll">
      <ul>
        <li class="datalist" v-for="(item,index) in datalist.list" :key="index"
            :class="{active:index === currentIndex}"
            @click="liClick(index)">{{item.title}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";

  export default {
    name: "SlideBar",
    props: {
      datalist: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    components: {
      Scroll
    },
    methods: {
      liClick(index) {
        this.currentIndex = index
        const obj = {
          index,
          maitKey: this.datalist.list[index].maitKey
        }
        this.$emit('slideBarClick', obj)
      }
    }
  }
</script>

<style scoped>
  .slide-bar {
    height: 100%;
  }

  .slide-bar-scroll{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 0px;
    right: 70vw;
    background-color: #f6f6f6;
    color: #666666;
  }

  .datalist{
    line-height: 50px;
    text-align: center;
  }

  .active {
    background-color: #fff;
    color: var(--color-high-text);
    border-left: 3px solid var(--color-tint);
  }

</style>
