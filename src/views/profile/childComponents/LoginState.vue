<template>
  <div class="login-state">
    <div class="profile-avatar">
      <img src="../../../assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="profile-content">
      <p>登录/注册</p>
      <div class="profile-text">
        <img src="../../../assets/img/profile/phone.svg" alt="">
        <span>暂未绑定手机号</span>
      </div>
    </div>
    <div class="profile-right">
      <img src="../../../assets/img/profile/arrow_right.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginState"
  }
</script>

<style scoped>
  .login-state {
    width: 100vw;
    height: 20vw;
    display: flex;
    background-color: #ff8198;
  }

  .profile-avatar {
    float: left;
    height:20vw;
    line-height:20vw;
    margin-left: 20px;
  }

  .profile-avatar img {
    width: 60px;
    height: 60px;
    vertical-align: middle;
  }

  .profile-content {
    margin-top: 15px;
    margin-left: 15px;
  }

  .profile-content p{
    font-size: 16px;
    color: #ffffff;
  }

  .profile-text {
    margin-top: 5px;
  }

  .profile-text img {
    width: 16px;
    height: 16px;
  }

  .profile-text span {
    font-size: 14px;
    color: #ffffff;
  }

  .profile-right {
    position: relative;
    height: 20vw;
    line-height: 20vw;
    left: 130px;
  }

  .profile-right img {
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }



</style>
