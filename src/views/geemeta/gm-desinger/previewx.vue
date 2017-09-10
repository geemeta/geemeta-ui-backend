<template>
  <div class="page-content-wrapper">
    <!-- BEGIN CONTENT BODY -->
    <div class="row">
      <div class="col-md-12">
        <component v-bind:is="currentView" :opts="pageConfig" :query="query">
          <!-- 组件在 vm.currentview 变化时改变！ -->
        </component>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../../../api/core'
//  import utils from '../../../common/utils'

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
        // preview/:code?
        api.data.getPageByCode(this.$route.params.code).then((res) => {
          let page = res.data[0]
//          console.log('page.content before>', page.content)
//          page.content = utils.CryptoJS.enc.Base64.parse(page.content).toString(utils.CryptoJS.enc.Utf8)
//          console.log('page.content after>', page.content)
//          console.log('res>', res.data[0].content.toString(utils.CryptoJS.enc.Utf8))
          console.log('JSON.parse(page.content)>', JSON.parse(page.content))
          if (res.code === '0') {
            if (res.data) {
              this.pageConfig = res.data
              console.log(this.pageConfig)
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
