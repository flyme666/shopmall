<template>
  <div class="detail-swiper">
    <swiper class="swiper-box">
      <swiper-item v-for="item in topImages" :key="item">
        <img :src="item" alt="" class="swiper-img">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../components/common/swiper'
  export default {
    name: "DetailSwiper",
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .swiper-box {
    height: 300px;
  }
  .swiper-box img {
  }

</style>
