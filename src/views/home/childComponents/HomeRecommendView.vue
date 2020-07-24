<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" >
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommandView",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 13px;
    border-bottom: 8px solid #FFC1C1;
  }

  .recommend-item {
    flex: 1;
    padding: 10px 0 20px;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 7px;
  }

</style>
