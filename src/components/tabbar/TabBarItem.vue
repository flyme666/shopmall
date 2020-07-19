<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive"><slot name="item-icon"></slot></div>
    <div v-show="isActive"><slot name="item-icon-active"></slot></div>
    <div :style="showActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {

    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path
    },
    showActiveStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path:String,
    activeColor: {
      type: String,
      default: '#f00'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(() => {})
    }
  }

}
</script>

<style>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
