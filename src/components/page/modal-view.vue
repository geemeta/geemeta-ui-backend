<template>
  <!--
    注意 不可用fade类似的动画，即不能用class="modal fade"，该动画会导致 vue component中的mounted事件未能按预设执行
    采用了bootstrap-modal-bs3patch.css样式，不需在modal-header上再加多两层div.modal-dialog、div.modal-content
  -->
  <div id="app-root-modal" class="modal container" tabindex="-1">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
      <h4 class="modal-title">
        {{modalOpts&&modalOpts.content&&modalOpts.content.win?modalOpts.content.win.title:''}}
      </h4>
    </div>
    <div class="modal-body">
      <component v-bind:is="modalBody" :opts="modalOpts">
      </component>
    </div>
    <div class="modal-footer">
      <button type="button" data-dismiss="modal" class="btn btn-outline dark">Close</button>
      <button type="button" class="btn green">Save changes</button>
    </div>
  </div>

  <!--<div id="app-root-modal"  class="modal" tabindex="-1" role="dialog">-->
  <!--<div class="modal-dialog" role="document">-->
  <!--<div class="modal-content">-->
  <!--<div class="modal-header">-->
  <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
  <!--<h4 class="modal-title">Modal title</h4>-->
  <!--</div>-->
  <!--<div class="modal-body">-->
  <!--<component v-bind:is="modalBody" :opts="modalOpts">-->
  <!--</component>-->
  <!--</div>-->
  <!--<div class="modal-footer">-->
  <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->
  <!--<button type="button" class="btn btn-primary">Save changes</button>-->
  <!--</div>-->
  <!--</div>&lt;!&ndash; /.modal-content &ndash;&gt;-->
  <!--</div>&lt;!&ndash; /.modal-dialog &ndash;&gt;-->
  <!--</div>&lt;!&ndash; /.modal &ndash;&gt;-->
</template>
<script>
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
  .page-content {
    margin-left: 0;
  }
</style>
