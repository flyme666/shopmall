<template>
  <nav-bar class="home-navbar" background-color="#ff8198" text-color="#fff">
    <div slot="center">
      <p>购物街</p>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "HomeNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-navbar{
    position: relative;
    z-index: 9;
  }
</style>
