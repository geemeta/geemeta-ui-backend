<template>
  <component v-bind:is="currentView" :opts="pageConfig" :query="query">
    <!-- 组件在 vm.currentview 变化时改变！ -->
  </component>
</template>
<script>
  import api from '../../api/core'
  export default {
    data () {
      return {
        currentView: '',
        pageConfig: '',
        query: ''
      }
    },
    created: function () {
      this._getPageConfig()
    },
    mounted: function () {
//      let self = this
    },
    methods: {
      _getPageConfig () {
        // page/:moduleName/:pageCode?
        api.data.getPageConfig(this.$route.params.pageCode).then((res) => {
          console.debug('res>', res)
          if (res.code === '0') {
            if (res.data) {
              this.pageConfig = res.data
            } else {
              console.error('返回数据res.data为空！')
            }
            this.query = this.$route.query
            this.currentView = require('./' + this.pageConfig.content.component + '.vue')
          }
        })
      }
    }
  }
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
