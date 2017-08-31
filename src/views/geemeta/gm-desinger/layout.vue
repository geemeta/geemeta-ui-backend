<template>
  <div class="panel-group accordion dnd-toolbox" id="collapse_layout">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_layout"
             href="#collapse_layout_default">基本布局(GRID-12)</a>
        </h6>
      </div>
      <div id="collapse_layout_default" class="panel-collapse in">
        <div class="panel-body">
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><label>两列 3-9</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'layout'}" >
              <div class="row xg-mix-no-mp">
                <div class="col-md-3 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
                <div class="col-md-9 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><label>两列 4-8</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'layout'}" >
              <div class="row xg-mix-no-mp">
                <div class="col-md-4 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
                <div class="col-md-8 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><label>两列 5-7</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'layout'}" >
              <div class="row xg-mix-no-mp">
                <div class="col-md-5 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
                <div class="col-md-7 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><label>两列 6-6</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'layout'}" >
              <div class="row xg-mix-no-mp">
                <div class="col-md-6 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
                <div class="col-md-6 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><label>三列 2-8-2</label></span>
            </div>
            <toolbar></toolbar>
             <div class="dnd-content" data-meta="{type:'layout'}" >
              <div class="row xg-mix-no-mp">
                <div class="col-md-2 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
                <div class="col-md-8 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
                <div class="col-md-2 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><label>三列 3-6-3</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'layout'}" >
              <div class="row xg-mix-no-mp">
                <div class="col-md-3 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
                <div class="col-md-6 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
                <div class="col-md-3 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><label>三列 4-4-4</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'layout'}" >
              <div class="row xg-mix-no-mp">
                <div class="col-md-4 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
                <div class="col-md-4 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
                </div>
                <div class="col-md-4 column">
                  <div class="dnd-target" data-dnd-allow="layout,table,control">
                  </div>
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
             href="#collapse_layout_custom">常用部局页面</a>
        </h6>
      </div>
      <div id="collapse_layout_custom" class="panel-collapse collapse">
        <div class="panel-body">
          <div class="dnd-item">
            <div class="dnd-dsc">
              <span class="dnd-title"><label>T部局</label></span>
            </div>
            <toolbar></toolbar>
            <div class="dnd-content" data-meta="{type:'layout'}" >
              <div class="row xg-mix-no-mp">
                <div class="col-md-12">
                  <!-- BEGIN GRID SIDEBAR -->
                  <div class="grid-ui">
                    <div class="grid-sidebar collapse in">
                      <div class="portlet light">
                        <div class="portlet-title">
                          <div class="caption" data-toggle="collapse" data-target=".grid-filter-list-content">
                            <span class="caption-subject font-green-sharp bold uppercase"
                                  style="cursor: pointer">常用过滤 </span>
                            <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">click to view project list</span>
                          </div>
                          <div class="actions">
                            <div class="btn-group">
                              <a class="btn green btn-circle btn-outline btn-sm grid-filters-config" href="javascript:;"
                                 data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <i class="icon-settings"></i> &nbsp;
                                <i class="fa fa-angle-down"></i>
                              </a>
                              <ul class="dropdown-menu pull-right">
                                <li>
                                  <a href="javascript:;"> 从综合查询中创建 </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <span class="badge badge-danger"> 点击删除 </span> 普能用户 </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <span class="badge badge-danger"> 点击删除</span> 管理员 </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <span class="badge badge-danger"> 点击删除 </span> 外部用户</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    删除所有常用过滤</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="portlet-body grid-filter-list-content collapse in">
                          <div class="grid-filter-list">
                            <ul class="nav nav-stacked">
                              <li>
                                <a href="javascript:;">
                                  <span class="badge badge-danger"> 失效 </span> 普能用户 </a>
                              </li>
                              <li>
                                <a href="javascript:;">
                                  <span class="badge badge-danger"> 失效</span> 管理员 </a>
                              </li>
                              <li>
                                <a href="javascript:;">
                                  <span class="badge badge-danger"> 失效 </span> 外部用户</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END GRID SIDEBAR -->
                    <!-- BEGIN GRID CONTENT -->
                    <div class="grid-content">
                      <div class="portlet light">
                        <!-- GRID HEAD -->
                        <div class="portlet-title">
                          <div class="caption">
                            <a href="javascript:;" class="btn btn-sm green" data-toggle="collapse"
                               data-target=".grid-sidebar">
                              <i class="fa fa-navicon fa-lg"></i>
                            </a>
                            <span class="caption-subject font-green-sharp bold uppercase">用户信息</span>
                          </div>
                          <div class="actions">

                            <div class="btn-group">
                              <button id="btn_new" class="btn green btn-circle btn-sm"> 新增
                                <i class="fa fa-plus"></i>
                              </button>
                            </div>
                            <div class="btn-group">
                              <button id="btn_delete" class="btn red btn-circle btn-sm"> 删除
                                <i class="fa fa-remove"></i>
                              </button>
                            </div>
                            <div class="btn-group">
                              <a class="btn green btn-circle btn-sm" href="javascript:;" data-toggle="dropdown"
                                 data-hover="dropdown" data-close-others="true"> 导出
                                <i class="fa fa-angle-down"></i>
                              </a>
                              <ul class="dropdown-menu pull-right">
                                <li>
                                  <a href="javascript:;">
                                    <i class="fa fa-print"></i> Print </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="fa fa-file-pdf-o"></i> Save as PDF </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="fa fa-file-excel-o"></i> Export to Excel </a>
                                </li>
                                <li>
                                  <a href="javascript:;"> New Task </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;"> Pending
                                    <span class="badge badge-danger"> 4 </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;"> Completed
                                    <span class="badge badge-success"> 12 </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;"> Overdue
                                    <span class="badge badge-warning"> 9 </span>
                                  </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;"> Delete Project </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <!-- end GRID HEAD -->
                        <div class="portlet-body">
                          <div class="row xg-mix-no-mp">
                            <div class="col-md-12 drag-target-layout" data-dnd-allow="layout"
                                 data-dnd-target="append">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END GRID CONTENT -->
                  </div>
                </div>
                <!-- END PAGE CONTENT-->
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
