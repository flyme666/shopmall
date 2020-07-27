<template>
  <swiper class="swipe">
    <swiper-item v-for="item in banners" :key="item.id" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>

  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from '@/components/common/swiper'

  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        if(!this.isLoad){
          this.$emit('swipperImageIsLoaded')
          this.isLoad = !this.isLoad
        }
      }
    }
  }
</script>

<style scoped>

</style>
