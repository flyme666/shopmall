<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="comment-info-top">
      <span class="comment-info-title">用户评价</span>
      <span class="comment-info-more">更多 ></span>
    </div>
    <div class="comment-info-main">
      <div class="main-top">
        <div class="user-logo">
          <img :src="commentInfo.user.avatar" alt="">
          <span class="shop-name">{{commentInfo.user.uname}}</span>
        </div>
      </div>
      <div class="main-middle">
        <div class="main-middle-content">
          <span>{{commentInfo.content}}</span>
        </div>
        <div class="main-middle-other">
          <span>{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
      </div>

      <div class="main-bottom">
        <img  v-for="(item,index) in commentInfo.images" :key="index" :src="item" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  import {formatDate} from "../../../common/utils";

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        const date = new Date(value * 1000)
        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding-left: 15px;
    color: #333333;
  }

  .comment-info-top {
    line-height: 60px;
    height: 60px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .comment-info-title {
    font-size: 15px;
    float: left;
  }

  .comment-info-more{
    font-size: 13px;
    margin-right: 15px;
    float: right;
  }

  .main-bottom {
    padding-bottom: 10px;
  }

  .main-bottom img {
    width: 70px;
    height: 70px;
    padding-right: 5px;
  }

  .user-logo {
    display: flex;
    align-items: center;
    line-height: 42px;
    padding-top: 10px;
    padding-bottom: 5px;
    text-align: center;
  }

  .user-logo img{
    width: 42px;
    height: 42px;
    border-radius:50%;
  }

  .user-logo span {
    margin-left: 10px;
    color: #333333;
  }

  .main-middle {
    padding-top: 5px;
    padding-bottom: 10px;
    justify-content: space-around;
  }

  .main-middle-content span {
    color: #777777;
    font-size: 14px;
    line-height: 1.5;
  }

  .main-middle-other {
    padding-top: 5px;
  }

  .main-middle-other span {
    margin-right: 5px;
    color: #999999;
    font-size: 12px;
  }



</style>
