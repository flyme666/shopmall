<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <p class="params-info-p">{{paramsInfo.info.key}}</p>
    <table v-for="(table1,indexta1) in paramsInfo.rule.tables" :key="indexta1" class="params-info-rule">
      <tr v-for="(tr,indextr) in table1" :key="indextr">
        <td v-for="(td,indextd) in tr" :key="indextd">{{td}}</td>
      </tr>
    </table>
    <p class="params-info-rule-dis">{{paramsInfo.rule.disclaimer}}</p>
    <table class="params-info-set">
      <tr :key="index" v-for="(info, index) in paramsInfo.info.set">
        <td class="params-info-key">{{info.key}}</td>
        <td class="params-info-value">{{info.value}}</td>
      </tr>
    </table>

    <div class="info-img" v-if="paramsInfo.info.images !== undefined && paramsInfo.info.images.length !== 0">
      <img :src="paramsInfo.info.images" alt="" />
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      paramsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
  .params-info {
    padding: 20px 15px;
  }

  .params-info-p {
    font-size: 15px;
  }

  .params-info-rule-dis {
    font-size: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .params-info-rule {
    margin-top: 20px;
    height: 40px;
    line-height: 40px;
    width: 100%;
    font-size: 14px;
  }

  .params-info table {
    border-collapse: collapse;
    width: 100%;
  }

  .params-info tr td {
    border-bottom: 1px solid hsla(0,0%,39.2%,.1)
  }

  .params-info-set {
    border-top: 1px solid rgba(0,0,0,.1);
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }

  .params-info-key{
    width: 96px;
  }

  .params-info-value {
    color: var(--color-high-text);
  }

</style>
