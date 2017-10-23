<template>
  <!--注意 不可用fade类似的动画，即不能用class="modal fade"，该动画会导致 vue component中的mounted事件未能按预设执行-->
  <div id="app-root-modal" class="modal" tabindex="-1">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
      <h4 class="modal-title">
        {{modalOpts&&modalOpts.content&&modalOpts.content.title?modalOpts.content.title:'标题'}}</h4>
    </div>
    <div class="modal-body">
      <component v-bind:is="modalBody" :opts="modalOpts">
      </component>
    </div>
    <div class="modal-footer">
      <template v-if="!modalBody">
        <a href="#" data-dismiss="modal" class="btn btn-default">关闭</a>
        <a href="#" class="btn btn-primary">保存</a>
      </template>
    </div>
  </div>
</template>
<script>
  //  import utils from '../../common/utils'

  export default {
    props: {},
    data: function () {
      return {
//        modalHeader:  {title: ''},
        modalBody: null,
//        modalFooter: null,
        modalOpts: {content: {title: ''}}
      }
    },
    created: function () {
    },
    mounted: function () {
    },
    methods: {},
    components: {}
  }
</script>
<style scoped>
</style>
