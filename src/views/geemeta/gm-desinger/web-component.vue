<template>
  <div class="panel-group accordion dnd-toolbox" id="collapse_component">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_component1"
             href="#collapse_component_default">表单</a>
        </h6>
      </div>
      <div id="collapse_component_default" class="panel-collapse in">
        <div class="panel-body">
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><i class="fa fa-wpforms" aria-hidden="true"></i><label>表单容器-2列</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'layout'}">
              <div class="portlet box green">
                <div class="portlet-title">
                  <div class="caption">
                    <i class="fa fa-gift"></i>Form Sample
                  </div>
                  <div class="tools">
                    <a href="javascript:;" class="collapse"> </a>
                    <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                    <a href="javascript:;" class="reload"> </a>
                    <a href="javascript:;" class="remove"> </a>
                  </div>
                </div>
                <div class="portlet-body form">
                  <!-- BEGIN FORM-->
                  <form action="#" class="form-horizontal">
                    <div class="form-body dnd-target" data-dnd-allow="table,layout,control">
                      <div class="row xg-mix-no-mp dnd-content " data-meta="{type:'layout'}">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="control-label col-md-4">First Name</label>
                            <div class="col-md-8">
                              <div class="dnd-target" data-dnd-allow="control,field">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group has-error">
                            <label class="control-label col-md-4">Last Name</label>
                            <div class="col-md-8">
                              <select name="foo" class="form-control input-sm">
                                <option value="1">Option 1</option>
                                <option value="1">Option 2</option>
                                <option value="1">Option 3</option>
                              </select>
                              <span class="help-block"> This field has error. </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-actions">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="row">
                            <div class="col-md-offset-3 col-md-9">
                              <button type="submit" class="btn green">Submit</button>
                              <button type="button" class="btn default">Cancel</button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6"></div>
                      </div>
                    </div>
                  </form>
                  <!-- END FORM-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_component2"
             href="#collapse_component_element">表单元素</a>
        </h6>
      </div>
      <div id="collapse_component_element" class="panel-collapse in">
        <div class="panel-body">
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><i class="fa fa-header" aria-hidden="true"></i><label>标题</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'control'}">
              <h3 class="form-section">标题</h3>
            </div>
          </div>
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><i class="fa fa-columns" aria-hidden="true"></i><label>一行两列</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'layout'}">
              <div class="row xg-mix-no-mp">
                <div class="col-md-6 dnd-target" data-dnd-allow="control,field"></div>
                <div class="col-md-6 dnd-target" data-dnd-allow="control,field"></div>
              </div>
            </div>
          </div>
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><i class="fa fa-square-o" aria-hidden="true"></i><label>一行一列</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'layout'}">
              <div class="row xg-mix-no-mp">
                <div class="col-md-12 dnd-target" data-dnd-allow="control,field"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import dndHandler from '../../../common/dndHandler'
  import toolbar from './toolbar'
  export default {
    data () {
      return {}
    },
    mounted: function () {
      let $items = $(this.$el).find('.dnd-item')
      dndHandler.bindDragObjects($items, 'layout')
    },
    methods: {},
    components: {toolbar}
  }
</script>
<style scoped>

</style>
