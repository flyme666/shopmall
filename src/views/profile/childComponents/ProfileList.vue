<template>
  <div class="profile-list">
    <div class="profile-item">
      <img src="../../../assets/img/profile/message.svg" alt="">
      <span>我的消息</span>
    </div>
    <div class="profile-item">
      <img src="../../../assets/img/profile/pointer.svg" alt="">
      <span>积分商城</span>
    </div>

    <div class="profile-item">
      <img src="../../../assets/img/profile/vip.svg" alt="">
      <span>会员卡</span>
    </div>

    <div class="line"></div>

    <div class="profile-item">
      <img src="../../../assets/img/profile/cart.svg" alt="">
      <span>我的购物车</span>
    </div>

    <div class="profile-item">
      <img src="../../../assets/img/profile/shopping.svg" alt="">
      <span>点赞购物APP</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ProfileList"
  }
</script>

<style scoped>
  .profile-item{
    margin-left: 20px;
    line-height: 40px;
    padding-top: 5px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }

  .profile-item:nth-child(3) {
    border-bottom: 0px ;
  }

  .profile-item:last-child{
    border-bottom: 0px ;
  }

  .profile-item img{
    vertical-align: middle;
    width: 24px;
    height: 24px;
  }

  .profile-item span{
    vertical-align: middle;
    margin-left: 15px;
    font-size: 16px;
  }

  .line {
    width: 100%;
    height: 5px;
    background-color: rgba(100, 100, 100, 0.1);
  }
</style>
