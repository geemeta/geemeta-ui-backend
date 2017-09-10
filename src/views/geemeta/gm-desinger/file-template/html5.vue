<template>
  <div class="portlet box green dnd-content" data-meta="{type:'layout',ui:'portlet'}" data-id="zsgxBWWT">
    <div class="portlet-title">
      <div class="caption"><i class="fa fa-gift"></i><span>标题</span>
      </div>
      <div class="tools"><a href="javascript:;" class="collapse" data-original-title="" title=""></a>
        <!--<a href="#portlet-config" data-toggle="modal" class="config" data-original-title="" title=""></a>-->
        <a href="javascript:;" class="reload" data-original-title="" title=""></a>
        <!--<a href="javascript:;" class="remove" data-original-title="" title=""></a>-->
      </div>
    </div>
    <div class="portlet-body form">
      <form action="#" class="form-horizontal">
        <div data-dnd-allow="table,layout,control" class="form-body dnd-target">

        </div>
        <div class="form-actions">
          <div class="row">
            <div class="col-md-12" style="text-align: center">
              <button type="submit" class="btn green">Submit</button>
              <button type="button" class="btn default">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import settingHandler from '../../../../common/SettingHandler'

  export default {
    data () {
      return {}
    },
    created: function () {
    },
    mounted: function () {
      settingHandler.register('portlet', {
        data: {
          name: '.portlet-title>.caption>span'
        },
        facade: {
          icon: '.portlet-title>.caption>i',
          class: '[data-meta*=\'portlet\']',
          style: '[data-meta*=\'portlet\']'
        }
      })
    },
    methods: {
      getType () {
        return 'html5'
      },
      getConfig () {
      }
    },
    components: {}
  }
</script>
<style>
</style>
