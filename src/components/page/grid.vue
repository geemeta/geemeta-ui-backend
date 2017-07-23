<template>
  <div class="page-content-wrapper">
    <!-- BEGIN CONTENT BODY -->
    <div class="page-content">
      <!-- BEGIN PAGE HEADER-->
      <!-- END PAGE HEADER-->
      <div class="row">
        <div class="col-md-12">
          <!-- BEGIN GRID SIDEBAR -->
          <div class="grid-ui">
            <div class="grid-sidebar collapse in">
              <div class="portlet light" v-if="opts.content.query.tree">
                <div class="portlet-title">
                  <div class="caption" data-toggle="collapse" data-target=".grid-filter-tree">
                    <span class="caption-subject font-green-sharp bold uppercase" style="cursor: pointer">树型过滤 </span>
                  </div>
                </div>
                <div class="portlet-body grid-filter-tree collapse in">
                  <div id="geeTreeOne">
                  </div>
                </div>
              </div>
              <div class="portlet light" v-if="opts.content.query.filter">
                <div class="portlet-title">
                  <div class="caption" data-toggle="collapse" data-target=".grid-filter-list-content">
                    <span class="caption-subject font-green-sharp bold uppercase" style="cursor: pointer">常用过滤 </span>
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
              <div class="portlet light" v-if="opts.content.query.mix">
                <div class="portlet-title">
                  <div class="caption" data-toggle="collapse" data-target=".grid-filter-list-content-tags">
                    <span class="caption-subject font-red bold uppercase">综合查询 </span>
                  </div>
                  <div class="actions">
                    <a class="btn green btn-outline btn-sm" href="javascript:;">
                      <i class="fa fa-search"></i>查询 </a>
                    <a class="btn grey-salsa btn-outline btn-sm" href="javascript:;">
                      重置 </a>
                  </div>
                </div>
                <!--grid-filter-list-content grid-filter-list-content-tags-->
                <div class="portlet-body form">
                  <form-query :opts="opts.content.query.mix" v-model="mixQuery" @input="handleMixQuery"></form-query>
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
                  <div class="row">
                    <div class="col-md-12">
                      <!-- 去掉了table的display-->
                      <table id="geeGridOne"
                             class="table table-striped table-bordered table-hover table-checkable order-column"
                             width="100%">
                        <thead>
                        <tr>
                          <th>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="group-checkable" data-set="#geeGridOne .checkboxes"/>
                              <span></span>
                            </label>
                          </th>
                          <th> 操作</th>
                          <th> 名称</th>
                          <th> 位置</th>
                        </tr>
                        </thead>
                      </table>
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
    <!-- END CONTENT BODY -->
  </div>
</template>
<script>
  import utils from '../../common/utils'
  import api from '../../api/core'
  import formQuery from '../base/form-query'
  export default {
    props: {
      opts: {
        type: Object,
        default: {
          content: {
            query: {
              tree: {},
              filter: {},
              mix: {}
            },
            info: '',
            list: {
              columns: []
            },
            stat: ''
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
        mixQuery: {}
      }
    },
    mounted: function () {
      this._initTable()
      this._initTree()
    },
    methods: {
      _initTree () {
        if (this.opts.content.query.tree) {
          $('#geeTreeOne').jstree({
            core: {
              themes: {
                'responsive': false
              },
              // so that create works
              check_callback: true,
              data: [{
                text: 'Parent Node',
                children: [{
                  text: 'Initially selected',
                  state: {
                    selected: true
                  }
                }, {
                  text: 'Custom Icon',
                  icon: 'fa fa-warning icon-state-danger'
                }, {
                  text: 'Initially open',
                  icon: 'fa fa-folder icon-state-success',
                  'state': {
                    'opened': true
                  },
                  'children': [
                    {text: 'Another node', icon: 'fa fa-file icon-state-warning'}
                  ]
                }, {
                  text: 'Another Custom Icon',
                  icon: 'fa fa-warning icon-state-warning'
                }, {
                  text: 'Disabled Node',
                  icon: 'fa fa-check icon-state-success',
                  'state': {
                    'disabled': true
                  }
                }, {
                  text: 'Sub Nodes',
                  icon: 'fa fa-folder icon-state-danger',
                  'children': [
                    {text: 'Item 1', icon: 'fa fa-file icon-state-warning'},
                    {text: 'Item 2', icon: 'fa fa-file icon-state-success'},
                    {text: 'Item 3', icon: 'fa fa-file icon-state-default'},
                    {text: 'Item 4', icon: 'fa fa-file icon-state-danger'},
                    {text: 'Item 5', icon: 'fa fa-file icon-state-info'}
                  ]
                }]
              },
                'Another Node'
              ]
            },
            'types': {
              'default': {
                icon: 'fa fa-folder icon-state-warning icon-lg'
              },
              'file': {
                icon: 'fa fa-file icon-state-warning icon-lg'
              }
            },
            'state': {'key': 'demo2'},
            'plugins': ['contextmenu', 'dnd', 'state', 'types']
          })
        }
      },
      _initTable () {
        let self = this
        if (!this.query.em) {
          console.error('url中必须有参数：em')
          return
        }
        var table = $('#geeGridOne')
        let tableBaseOptions = {
          language: {
            'aria': {
              'sortAscending': ': 正序',
              'sortDescending': ': 倒序'
            },
            'emptyTable': '没有数据',
            'info': ' _START_ 到 _END_ /共 _TOTAL_ 条记录',
            'infoEmpty': '没有数据',
            'infoFiltered': '(从 _MAX_ 条记录中筛选)',
            'lengthMenu': '每页 _MENU_ 条记录',
            'search': '搜索当前表格:',
            'zeroRecords': '没有数据',
            'paginate': {
              'previous': '上一页',
              'next': '下一页',
              'last': '最后一页',
              'first': '第一页'
            }
          },
          serverSide: true,
          rowId: 'id',
          // save datatable state(pagination, sort, etc) in cookie.
//        bStateSave: false,
          lengthMenu: [
            [5, 10, 15, 20, -1],
            [5, 10, 15, 20, 30, '所有']
          ],
          // set the initial value
          pageLength: 5,
          pagingType: 'bootstrap_full_number',
          // 设置column默认值，可以通过targets，如[0,1,2] 指定多个列的属性，各列的个性化值可在columns中设置，注意columns没有targets属性，即只能对具体列分别设置
          columnDefs: [
            {
              'orderable': false,
              'targets': [0]
            },
            {
              'searchable': false,
              'targets': [0]
            },
            {
              'className': 'dt-right'
              // 'targets': [2]
            }
          ],
          // set first column as a default sort by asc
          'order': [
            [1, 'asc']
          ]
        }
        tableBaseOptions.ajax = {
          url: '',
          contentType: 'application/json',
          type: 'POST',
          // 响应的结果数据
          dataSrc: function (response) {
            console.debug('grid response data >', response)
            return response.data
          },
          // 请求的参数数据
          data: function (param) {
            console.debug('grid request data >', param)
            let o = {}
            o[self.query.em] = {
              '@p': self.opts.content.query.p,
              '@fs': utils.join(self.opts.content.list.columns, 'field', ',')
            }
            // 动态设置url
            // table.api().ajax.url('http://localhost:8080/api/meta/list?draw=' + param.draw)
            table.api().ajax.url(api.url.getList(({draw: param.draw})))
            return JSON.stringify(o)
          },
          error: function (e) {
            console.debug('error >', e)
          }
        }
        console.log('_getColumns() >', _getColumns())
        tableBaseOptions.columns = _getColumns()
        table.dataTable(tableBaseOptions)
        table.find('.group-checkable').change(function () {
          var set = $(this).attr('data-set')
          var checked = $(this).is(':checked')
          $(set).each(function () {
            if (checked) {
              $(this).prop('checked', true)
              $(this).parents('tr').addClass('active')
            } else {
              $(this).prop('checked', false)
              $(this).parents('tr').removeClass('active')
            }
          })
        })
        table.on('change', 'tbody tr .checkboxes', function () {
          $(this).parents('tr').toggleClass('active')
        })

        function _getColumns () {
          let cols = new Array(self.opts.content.list.columns.length)
          for (let i in self.opts.content.list.columns) {
            let col = self.opts.content.list.columns[i]
            cols[i] = _getColumn(col)
          }
          return cols
        }
        function _getColumn (col) {
          if (col.type === 'PK') {
            return {
              'sClass': 'text-center',
              'data': col.field,
              'render': function (data, type, full, meta) {
                return '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">' +
                  '<input type="checkbox"  class="checkboxes"  value="' + data + '" />' +
                  '<span></span>' +
                  '</label>'
              },
              'bSortable': false
            }
          } else if (col.type === 'action' && col.options) {
            return {
//          'sClass': 'text-center',
              'data': 'Action',
              'render': function (data, type, full, meta) {
                // 一个动作
                if (col.options.length === 1) {
                  // let obj = col.options[0]
                  // return '<li><a href="javascript:' + obj.click + '; class="btn-xs"><i class="icon-detail"></i>' + obj.title + '</a></li>'
                }
                // 多个动作，展示成下拉项方式
//                let act = ''
//                for (let i in col.options) {
//                  let obj = col.options[i]
//                  act += '<li><a href="javascript:' + obj.click + '; class="btn-xs"><i class="icon-detail"></i>' + obj.title + '</a></li>'
//                }
                return '<div class="btn-group">' +
                  '<button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false"> 更多 ' +
                  ' <i class="fa fa-angle-down"></i>' +
                  '</button>' +
                  '<ul class="dropdown-menu" role="menu">' +
//                  act +
                  '</ul>' +
                  '</div>'
              },
              'bSortable': false
            }
          } else {
            return {'data': col.field, title: col.title}
          }
        }
      },
      handleMixQuery (data) {
        console.log('this.mixQuery e>', data)
      }
    },
    components: {formQuery}
  }
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
