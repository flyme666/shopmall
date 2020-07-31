<template>
  <div class="cart-commit">
    <van-submit-bar
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
        class="van-submit"
        button-color="#ff8198"
        :disabled = "!(totalPrice > 0)"
    >
      <van-checkbox v-model="checked" checked-color="#ff8198" @click="allSelected">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { SubmitBar } from 'vant';
  import {mapGetters} from 'vuex'

  Vue.use(SubmitBar);
  export default {
    name: "ShopCartCommit",
    props: {
      totalPrice: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        checked: false
      }
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    methods: {
      onSubmit() {
        this.$emit("commit")
      },
      allSelected() {
        this.$emit('allSelected')
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .cart-commit {
    position: fixed;
    bottom: -50px;
  }
  .van-submit {
    position: absolute !important;
    bottom: 100px;
    width: 100vw;
  }

</style>
