<template>
  <div class="panel-group accordion dnd-toolbox" id=",collapse_page">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#,collapse_page"
             href="#,collapse_page_default">常用表单页面</a>
        </h6>
      </div>
      <div id=",collapse_page_default" class="panel-collapse in">
        <div class="panel-body">
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><label>表单-1</label></span>
            </div>
            <toolbar></toolbar>
             <div class="dnd-content" data-meta="{type:'layout'}" >
              <div class="row xg-mix-no-mp">
                <div class="col-md-12 column">
                  <div class="portlet light bordered">
                    <div class="portlet-title">
                      <div class="caption">
                        <i class="icon-equalizer font-red-sunglo"></i>
                        <span class="caption-subject font-red-sunglo bold uppercase">Form Sample</span>
                        <span class="caption-helper">some info...</span>
                      </div>
                      <div class="tools">
                        <a href="" class="collapse" data-original-title="" title=""> </a>
                        <a href="#portlet-config" data-toggle="modal" class="config" data-original-title="" title=""> </a>
                        <a href="" class="reload" data-original-title="" title=""> </a>
                        <a href="" class="remove" data-original-title="" title=""> </a>
                      </div>
                    </div>
                    <div class="portlet-body form">
                      <!-- BEGIN FORM-->
                      <form action="#" class="form-horizontal">
                        <div class="form-body">
                          <h3 class="form-section">Person Info</h3>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">First Name</label>
                                <div class="col-md-9">
                                  <input type="text" class="form-control" placeholder="Chee Kin">
                                  <span class="help-block"> This is inline help </span>
                                </div>
                              </div>
                            </div>
                            <!--/span-->
                            <div class="col-md-6">
                              <div class="form-group has-error">
                                <label class="control-label col-md-3">Last Name</label>
                                <div class="col-md-9">
                                  <select name="foo" class="form-control">
                                    <option value="1">Abc</option>
                                    <option value="1">Abc</option>
                                    <option value="1">This is a really long value that breaks the fluid design for a select2</option>
                                  </select>
                                  <span class="help-block"> This field has error. </span>
                                </div>
                              </div>
                            </div>
                            <!--/span-->
                          </div>
                          <!--/row-->
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">Gender</label>
                                <div class="col-md-9">
                                  <select class="form-control">
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                  </select>
                                  <span class="help-block"> Select your gender. </span>
                                </div>
                              </div>
                            </div>
                            <!--/span-->
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">Date of Birth</label>
                                <div class="col-md-9">
                                  <input type="text" class="form-control" placeholder="dd/mm/yyyy"> </div>
                              </div>
                            </div>
                            <!--/span-->
                          </div>
                          <!--/row-->
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">Category</label>
                                <div class="col-md-9">
                                  <select class="form-control" data-placeholder="Choose a Category" tabindex="1">
                                    <option value="Category 1">Category 1</option>
                                    <option value="Category 2">Category 2</option>
                                    <option value="Category 3">Category 5</option>
                                    <option value="Category 4">Category 4</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <!--/span-->
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">Membership</label>
                                <div class="col-md-9">
                                  <div class="radio-list">
                                    <label class="radio-inline">
                                      <input type="radio" name="optionsRadios2" value="option1"> Free </label>
                                    <label class="radio-inline">
                                      <input type="radio" name="optionsRadios2" value="option2" checked=""> Professional </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--/span-->
                          </div>
                          <h3 class="form-section">Address</h3>
                          <!--/row-->
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">Address 1</label>
                                <div class="col-md-9">
                                  <input type="text" class="form-control"> </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">Address 2</label>
                                <div class="col-md-9">
                                  <input type="text" class="form-control"> </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">City</label>
                                <div class="col-md-9">
                                  <input type="text" class="form-control"> </div>
                              </div>
                            </div>
                            <!--/span-->
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">State</label>
                                <div class="col-md-9">
                                  <input type="text" class="form-control"> </div>
                              </div>
                            </div>
                            <!--/span-->
                          </div>
                          <!--/row-->
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">Post Code</label>
                                <div class="col-md-9">
                                  <input type="text" class="form-control"> </div>
                              </div>
                            </div>
                            <!--/span-->
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label col-md-3">Country</label>
                                <div class="col-md-9">
                                  <select class="form-control">
                                    <option>Country 1</option>
                                    <option>Country 2</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <!--/span-->
                          </div>
                          <!--/row-->
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
                            <div class="col-md-6"> </div>
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
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><label>2 8 2</label></span>
            </div>
            <toolbar></toolbar>
             <div class="dnd-content" data-meta="{type:'layout'}" >
              <div class="row xg-mix-no-mp">
                <div class="col-md-2 column"> 2
                </div>
                <div class="col-md-8 column"> 8
                </div>
                <div class="col-md-2 column"> 2
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
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_control"
             href="#,collapse_page_custom">自定义</a>
        </h6>
      </div>
      <div id=",collapse_page_custom" class="panel-collapse collapse">
        <div class="panel-body" style="height:200px; overflow-y:auto;">
          <p>
            <a class="btn blue" href="ui_tabs_accordions_navs.html#collapse_2" target="_blank">添加</a>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import dndHandler from '../../../common/dndHandler'
  import toolbar from './stage-toolbar'

  export default {
    data () {
      return {}
    },
    mounted: function () {
      let $items = $(this.$el).find('.dnd-item')
//      $items.mouseover(function (e) {
//        $(e.target).addClass('active')
//      })
//      $items.mouseout(function (e) {
//        $(e.target).removeClass('active')
//      })
      dndHandler.bindDragObjects($items)
    },
    methods: {},
    components: {toolbar}
  }
</script>
<style scoped>

</style>
