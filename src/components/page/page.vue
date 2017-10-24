<!--
  通用的加载页面，实现动态路由，通过currentView切换页面，并通过opts、query传递属性及查询参数给渲染的页面
  注意：加载的页面，需存放于本page.vue所在目录下
-->
<template>
  <div class="page-content-wrapper">
    <!-- .page-content内有：margin-left:xxx，导致整个页面右移，适合作为主页面的右移(左边有菜单)-->
    <div class="page-content">
      <component v-bind:is="currentView" :opts="pageConfig" :query="query">
        <!-- 组件在 vm.currentview 变化时改变！ -->
      </component>
    </div>
  </div>
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
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this._getPageConfig()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': '_getPageConfig'
    },
    methods: {
      _getPageConfig () {
        // 注意！！！
        // 先切换到加载页面，若无该切换，操作this.currentView会保留在真正需打开的页面上
        // 若该路由变化且this.currentView require的vue是同一个时，会导致页面不刷新，
        // 就算路由的参数如id等变化也不刷新
        this.currentView = require('./loading-page.vue')
        // 路由的格式：page/:moduleName/:pageCode?query
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
<!-- 添加 'scoped' 属性，使该CSS只应用于本vue。 -->
<style scoped>
</style>
