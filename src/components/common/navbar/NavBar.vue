<template>
  <div class="nav-bar" :style="{'background': bgColor,'color':color}">
    <div class="navbar-left">
      <slot name="left"></slot>
    </div>
    <div class="navbar-center">
      <slot name="center"></slot>
    </div>
    <div class="navbar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      backgroundColor: {
        type: String,
        default: '#fff'
      },
      textColor: {
        type: String,
        default: '#666'
      }
    },
    data() {
      return {
        bgColor: this.backgroundColor,
        color: this.textColor
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
  }
  .navbar-left,.navbar-right{
    width: 60px;
  }
  .navbar-center{
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
</style>
