<template>
  <div class="tabbable tabbable-tabdrop tabbable-line">
    <ul class="nav nav-tabs">
      <li v-for="(item,index) in opts.content.tabs" :class="index==opts.content.activeIndex ?'active':''">
        <a :href="'#tab'+uuid+index" data-toggle="tab">{{item.title}}-{{index}}-{{opts.content.activeIndex}}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="(item,index) in opts.content.tabs" class="tab-pane"
           :class="index==opts.content.activeIndex ?'active':''" :id="'tab'+uuid+index">
        <!-- 渲染动态配置页面-->
        <div v-if="item.page&&item.page.pageCode">item.page.pageCode</div>
        <!-- 渲染外部页面资源，如外嵌页面，采用iframe的方式-->
        <div v-else-if="item.href">
          <iframe :src="item.href" class="xg-iframe"></iframe>
        </div>
        <div v-else v-html="item.html"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import utils from '../../common/utils'

  export default {
    props: {
      opts: {
        type: Object,
        default: function () {
          return {
            content: {
              title: '请设置标题值：opts.content.title',
              info: '将opts.content.title，设置为空则不显示',
              activeIndex: 0,
              tabs: [
                {title: 'One', html: '<p style="text-align: center">One</p>', href: ''},
                {title: 'Two', html: '<p style="text-align: center">Two</p>', href: ''}
              ]
            }
          }
        },
        required: true
      },
      query: {
        type: Object
      }
    },
    data () {
      return {
        uuid: utils.uuid(8)
      }
    },
    created: function () {
//      console.log('xxx', this.opts)
//      this.opts = {
//        content: {
//          title: '请设置标题值：opts.content.title',
//          info: '将opts.content.title，设置为空则不显示',
//          activeIndex: 0,
//          tabs: [
//            {title: 'One', html: '<p style="text-align: center">tab</p>', href: ''},
//            {title: 'Two', html: '<p style="text-align: center">Two</p>', href: ''}
//          ]
//        }
//      }
    },
    mounted: function () {
//      console.log('xxx', this.opts)
      // ！！注意，若该vue文件被加载到modal中，且modal用了fade等入场动画，会导致以下执行无效，mounted早于modal的入场动画结束时间
      $(this.$el).find('.nav-tabs').tabdrop()
//      self.deployTimeOutId = setTimeout(() => {
//        $(self.$el).find('.nav-tabs').tabdrop({text: '更多'})
//        clearTimeout(self.deployTimeOutId)
//      }, 500)
    },
    methods: {},
    components: {}
  }
</script>
<style scoped>
</style>
