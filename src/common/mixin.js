import {debounce} from "./utils";

export const imgListenerMixin = {
  data() {
    return {
      imgLoadListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,100)
    this.imgLoadListener = () => {
      refresh()
    }
    this.$bus.$on('imageIsLoaded',this.imgLoadListener)
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0,0,500)
    }
  }
}
