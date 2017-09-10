<template>
  <div class="panel-group accordion dnd-toolbox" id="collapse_field">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_field"
             href="#collapse_field_default">默认</a>
        </h6>
      </div>
      <div id="collapse_field_default" class="panel-collapse in">
        <div class="panel-body">
          <table class="xg-form compact type-blank xg-col-24">
            <tbody>
            <tr data-setting-value>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-i-cursor" aria-hidden="true"></i><label>单行</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'singleText'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><i class="required">*</i><label>单行</label></span>
                      <div class="col-md-9">
                        <!--<input type="text" class="form-control" placeholder="">-->
                        <div class="input-group">
                          <!--<span class="input-group-addon">-->
                          <!--<i class="fa fa-envelope"></i>-->
                          <!--</span>-->
                          <input type="text" class="form-control" placeholder=""></div>
                        <!--<span class="help-block">行内帮助信息</span>-->
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-edit" aria-hidden="true"></i><label>多行</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'multiText'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><i class="required">*</i><label>多行</label></span>
                      <div class="col-md-9">
                        <textarea class="form-control" rows="4"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr data-setting-value>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-calendar" aria-hidden="true"></i><label>日期</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'date'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><i class="required">*</i><label>日期</label></span>
                      <div class="col-md-9">
                        <div class="input-group date date-picker" data-date-format="dd-mm-yyyy"
                             data-date-start-date="+0d">
                          <input type="text" class="form-control" readonly="">
                          <span class="input-group-btn">
                            <button class="btn default" type="button">
                              <i class="fa fa-calendar"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-clock-o" aria-hidden="true"></i><label>时间</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'time'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><i class="required">*</i><label>时间</label></span>
                      <div class="col-md-9">
                        <div class="input-group date-picker input-daterange" data-date="10/11/2012"
                             data-date-format="mm/dd/yyyy">
                          <input type="text" class="form-control" name="from">
                          <span class="input-group-addon"> 到 </span>
                          <input type="text" class="form-control" name="to"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr data-setting-value>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-envelope" aria-hidden="true"></i><label>邮件</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'email'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><label>邮件</label><i class="required">*</i></span>
                      <div class="col-md-9">
                        <!--<input type="text" class="form-control" placeholder="">-->
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="fa fa-envelope"></i>
                          </span>
                          <input type="text" class="form-control" placeholder="邮箱地址"></div>
                        <!--<span class="help-block">行内帮助信息</span>-->
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-phone" aria-hidden="true"></i><label>电话</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'phone'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><i class="required">*</i><label>电话</label></span>
                      <div class="col-md-9">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="fa fa-phone"></i>
                          </span>
                          <input type="text" class="form-control" placeholder="如13900000000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr data-setting-value>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-dot-circle-o"
                                               aria-hidden="true"></i><label>单选</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'radio'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><i class="required">*</i><label>单选</label></span>
                      <div class="mt-radio-inline col-md-9">
                        <label class="mt-radio">
                          <input type="radio" name="optionsRadios" id="optionsRadios4" value="option1" checked="">
                          Option 1
                          <span></span>
                        </label>
                        <label class="mt-radio">
                          <input type="radio" name="optionsRadios" id="optionsRadios5" value="option2"> Option 2
                          <span></span>
                        </label>
                        <!--mt-radio-disabled-->
                        <label class="mt-radio mt-radio-disabled">
                          <input type="radio" name="optionsRadios" id="optionsRadios6" value="option3" disabled="">
                          Disabled
                          <span></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-check-square-o"
                                               aria-hidden="true"></i><label>多选</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'checkbox'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><i class="required">*</i><label>多选</label></span>
                      <div class="col-md-9">
                        <div class="mt-checkbox-inline">
                          <label class="mt-checkbox">
                            <input type="checkbox" id="inlineCheckbox21" value="option1"> Checkbox 1
                            <span></span>
                          </label>
                          <label class="mt-checkbox">
                            <input type="checkbox" id="inlineCheckbox22" value="option2"> Checkbox 2
                            <span></span>
                          </label>
                          <label class="mt-checkbox mt-checkbox-disabled">
                            <input type="checkbox" id="inlineCheckbox23" value="option3" disabled=""> Disabled
                            <span></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr data-setting-value>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-list" aria-hidden="true"></i><label>下拉
                    </label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'label'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><label>下拉</label><i class="required">*</i></span>
                      <div class="col-md-4">
                        <div class="input-group date date-picker" data-date-format="dd-mm-yyyy"
                             data-date-start-date="+0d">
                          <input type="text" class="form-control" readonly="">
                          <span class="input-group-btn">
                            <button class="btn default" type="button">
                              <i class="fa fa-calendar"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-clock-o" aria-hidden="true"></i><label>多选</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'label'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><label>多选</label><i class="required">*</i></span>
                      <div class="col-md-9">
                        <div class="input-group date-picker input-daterange" data-date="10/11/2012"
                             data-date-format="mm/dd/yyyy">
                          <input type="text" class="form-control" name="from">
                          <span class="input-group-addon"> 到 </span>
                          <input type="text" class="form-control" name="to"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr data-setting-value>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-file-picture-o"
                                               aria-hidden="true"></i><label>图片</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'label'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><label>图片</label><i class="required">*</i></span>
                      <div class="col-md-4">
                        <div class="input-group date date-picker" data-date-format="dd-mm-yyyy"
                             data-date-start-date="+0d">
                          <input type="text" class="form-control" readonly="">
                          <span class="input-group-btn">
                            <button class="btn default" type="button">
                              <i class="fa fa-calendar"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-upload" aria-hidden="true"></i><label>上传</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'label'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><i class="required">*</i><label>上传</label></span>
                      <div class="col-md-9">
                        <div class="input-group date-picker input-daterange" data-date="10/11/2012"
                             data-date-format="mm/dd/yyyy">
                          <input type="text" class="form-control" name="from">
                          <span class="input-group-addon"> 到 </span>
                          <input type="text" class="form-control" name="to"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr data-setting-value>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-group" aria-hidden="true"></i><label>组织</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'label'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><i class="required">*</i><label>组织</label></span>
                      <div class="col-md-4">
                        <div class="input-group date date-picker" data-date-format="dd-mm-yyyy"
                             data-date-start-date="+0d">
                          <input type="text" class="form-control" readonly="">
                          <span class="input-group-btn">
                            <button class="btn default" type="button">
                              <i class="fa fa-calendar"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td colspan="12">
                <div class="dnd-item">
                  <div class="dnd-dsc">
                    <span class="dnd-title"><i class="fa fa-user" aria-hidden="true"></i><label>人员</label></span>
                  </div>
                  <toolbar></toolbar>
                  <div class="dnd-content" data-meta="{type:'field', ui:'label'}">
                    <div class="form-group">
                      <span class="control-label col-md-3"><i class="required">*</i><label>人员</label></span>
                      <div class="col-md-4">
                        <div class="input-group date-picker input-daterange" data-date="10/11/2012"
                             data-date-format="mm/dd/yyyy">
                          <input type="text" class="form-control" name="from">
                          <span class="input-group-addon"> 到 </span>
                          <input type="text" class="form-control" name="to"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_field"
             href="#collapse_field_custom">自定义</a>
        </h6>
      </div>
      <div id="collapse_field_custom" class="panel-collapse collapse">
        <div class="panel-body" style="height:200px; overflow-y:auto;">
          <p>
            <a class="btn blue" href="ui_tabs_accordions_navs.html#collapse_field_custom"
               target="_blank">添加</a>
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
      dndHandler.bindDragObjects($items, 'field')
    },
    methods: {},
    components: {toolbar}
  }
</script>
<style>
</style>
