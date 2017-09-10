<template>
  <div class="page-content-wrapper">
    <!-- BEGIN CONTENT BODY -->
    <div class="row">
      <div class="col-md-12">
        <div class="tabbable">
          <ul class="nav nav-tabs xg-mix-xs">
            <li class="active">
              <a href="#d-tab-ui" data-toggle="tab">界面</a>
            </li>
            <li>
              <a href="#d-tab-code" data-toggle="tab">代码</a>
            </li>
          </ul>
          <div class="tab-content">
            <div :class="['tab-pane','active','stage-ui',stageSelector]" id="d-tab-ui">
              <div class="dnd-target" data-dnd-allow="layout,table" style="border-color: #d8d8d8">
              </div>
            </div>
            <div class="tab-pane stage-code" id="d-tab-code">
              code
            </div>
            <!--<div class="tab-pane stage-doc" id="d-tab-doc">-->
            <!--<h3>页面说明</h3>-->
            <!--<textarea rows="15"></textarea>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import dndOptions from '../../../common/dndOptions'
  import designer from '../../../common/designer'

  export default {
    props: {
      page: {
        id: '',
        template: ''
      }
    },
    data () {
      return {
        stageSelector: dndOptions.selector.stage.substring(1)
      }
    },
    watch: {
      'page.id': function (val, oldVal) {
        // 切换页面前，输出当前页面的内容，便于保存
        this.$emit('beforeChange', {id: oldVal, template: designer.render()})
        // 切换页面
        console.log(this.page.template)
        this.load(this.page.template)
        $(this.$el).find('.nav a[href="#d-tab-ui"]').tab('show')
      }
    },
    mounted: function () {
    },
    methods: {
      load (template) {
        let el = this
        designer.load(template)
        designer.init()
        designer.onSetting(function (data) {
          el.$emit('setting', data)
        })
        designer.onBindControl(function (data) {
          console.log('onBindControl>', data)
        })
        $('.xg-designer-toolbar').mouseleave(function () {
          let $this = $(this)
          let $content = $this.children().last().children()
          $this.replaceWith($content)
        })
      }
    },
    components: {}
  }

</script>
<style>
  .xg-form {
    min-height: 3em;
  }

  .stage-code {

  }

  .xg-designer .toolbar {
    background-color: red;
  }
</style>

