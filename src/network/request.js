import axios from 'axios'
import url from '@/common/api'
import loading from '../store/index'

import Vue from "vue";
import {Toast} from "vant";

Vue.use(Toast)
Toast.setDefaultOptions(loading ,2000)

//需要api接口请联系微信coderwhy003
export function request(config) {
  const instance =axios.create({
    baseURL: url,
    timeout:5000
  })


  instance.interceptors.request.use(config => {
    if (loading.getters.loading) {
      Toast.loading({
        forbidClick: true,
        message: "加载中..."
      });
    }
    return config
  },error => {
    console.log(error);
  })


  instance.interceptors.response.use(config => {
    Toast.clear();
    return config.data
  },error => {
    Toast.clear();
    console.log(error);
  })

  return instance(config)
}
