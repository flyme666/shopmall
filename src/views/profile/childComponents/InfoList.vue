<template>
  <div class="profile-infolist">
    <div class="infolist-item">
      <p>
        <span class="item-span">0.00</span>
        <span>元</span>
      </p>
      <p class="item-p">我的余额</p>
    </div>
    <div class="infolist-item">
      <p>
        <span class="item-span">0</span>
        <span>个</span>
      </p>
      <p class="item-p">我的优惠</p>
    </div>
    <div class="infolist-item">
      <p>
        <span class="item-span">0</span>
        <span>个</span>
      </p>
      <p class="item-p">我的积分</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoList"
  }
</script>

<style scoped>
  .profile-infolist {
    display: flex;
    height: 20vw;
    box-shadow: 0px 5px 1px rgba(100, 100, 100, 0.1);
  }

  .infolist-item {
    flex: 1;
    text-align: center;
    padding-top: 15px;
    border-right: 1px solid rgba(0,0,0,0.1);
  }

  .item-p {
    padding-top: 5px;
    margin-bottom: 5px;
  }

  .item-span {
    padding-right: 3px;
    font-size: 24px;
    color: var(--color-high-text);
  }


</style>
