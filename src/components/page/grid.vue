<template>
  <div class="row">
    <div class="col-md-12">
      <!-- BEGIN GRID SIDEBAR -->
      <div class="grid-ui">
        <div class="grid-sidebar collapse" :class="opts.content.query.hide?'':'in'">
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
                <span
                  class="caption-helper visible-sm-inline-block visible-xs-inline-block">click to view project list</span>
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
                <span class="caption-subject font-green-sharp bold uppercase">{{opts.content.title}}</span>
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
                <div v-if="opts.content.info" class="col-md-12 note note-info">
                  <p>{{opts.content.info}}</p>
                </div>
                <div
                  v-if="opts.content.selected&&opts.content.selected==='header'&&selectedRows&&selectedRows.length>0"
                  class="col-md-12 note note-info">
                  <div>
                    <h5> 已选择的项：</h5>
                    <label v-for="item,i in selectedRows" class="btn btn-xs default" style="margin-right: 4px">
                      <i class="fa fa-check"></i>{{item.name}}
                    </label>
                  </div>
                </div>
                <div class="col-md-12">
                  <!-- 去掉了table的display-->
                  <table id="geeGridOne"
                         class="table table-striped table-bordered table-hover table-checkable order-column"
                         width="100%">
                    <thead>
                    <tr>
                      <th v-if="!opts.content.list.select.type||opts.content.list.select.type=='checkbox'">
                        <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                          <input type="checkbox" class="group-checkable" data-set="#geeGridOne .checkboxes"/>
                          <span></span>
                        </label>
                      </th>
                      <th v-if="opts.content.list.action&&opts.content.list.action.options">
                        操作
                      </th>
                      <!--以下th内的文本可以随便写，在datatable渲染时会被替换掉，关键是个数需要与数据列的个数一致-->
                      <th v-for="col in visibleColumns">
                        {{col.title}}占位
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                    </tfoot>
                  </table>
                </div>
                <div v-if="opts.content.stat" class="col-md-12 note note-info">
                  <p>{{opts.content.stat}}</p>
                </div>
                <div
                  v-if="opts.content.selected&&opts.content.selected==='footer'&&selectedRows&&selectedRows.length>0"
                  class="col-md-12 note note-info">
                  <div>
                    <h5> 已选择的项：</h5>
                    <label v-for="item,i in selectedRows" class="btn btn-xs default" style="margin-right: 4px">
                      <i class="fa fa-check"></i>{{item.name}}
                    </label>
                  </div>
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
</template>
<script>
  /* eslint-disable no-eval */
  import utils from '../../common/utils'
  import api from '../../api/core'
  import formQuery from '../base/form-query'

  export default {
    props: {
      opts: {
        type: Object,
        default: function () {
          return {
            content: {
              title: 'opts.content.title',
              entity: '',
              query: {
                tree: {},
                filter: {},
                mix: {}
              },
              info: '',
              // 展示已选择的内容，默认（空值或none）为不展示
              selected: 'header|footer|none',
              list: {
                select: {},
                action: {},
                columns: []
              },
              stat: ''
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
        mixQuery: {},
        columns: [],
        visibleColumns: [],
        selectedRows: [],
        lastGql: {},
        tableRef: undefined
      }
    },
    beforeMount: function () {
      this._initColumns()
    },
    mounted: function () {
      this._initTable()
      this._initTree()
    },
    methods: {
      _isRowBtnDisable (row, expression) {
//        console.log('row:', row)
//        console.log('expression:', expression)
        return 'disabled'
      },
      _initColumns () {
        let self = this
        self.columns = []
        for (let i in self.opts.content.list.columns) {
          let col = self.opts.content.list.columns[i]
          self.columns[i] = {'data': col.field, title: col.title}
          self.columns[i].type = col.type
          self.columns[i].visible = col.visible !== false
        }
        self.visibleColumns = self.columns.filter(function (item, index, src) {
          return item.visible !== false
        })
      },
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
        if (!this.opts.content.entity) {
          console.error('this.opts.content.entity不能为空，应如：sys_user、sys_role等实体名称。')
          return
        }

        var $table = $('#geeGridOne')
        self.tableRef = $table.dataTable(genTableBaseOptions())
        $table.find('.group-checkable').change(function () {
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
          // 选择的数据
          updateSelected()
//          console.log('select row data >', $table.api().rows('.active').data())
        })
        $table.on('change', 'tbody tr .checkboxes', function () {
          $(this).parents('tr').toggleClass('active')
          updateSelected()
        })

        /**
         * 构建ajax请求信息、查询结果的列展示信息（包括操作列、选择列）
         */
        function genTableBaseOptions () {
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
              // 动态设置url
              // $table.api().ajax.url('http://localhost:8080/api/meta/list?draw=' + param.draw)
              $table.api().ajax.url(api.url.getList(({draw: param.draw})))
              return JSON.stringify(self._genGql(self.lastMixQueryData))
            },
            error: function (e) {
              console.debug('error >', e)
            }
          }
          tableBaseOptions.columns = []
          $.extend(tableBaseOptions.columns, self.visibleColumns)
          // 添加操作列，若有配置才添加
          if (self.opts.content.list.action && self.opts.content.list.action.options && self.opts.content.list.action.options.length > 0) {
            tableBaseOptions.columns.unshift({
//          sClass: '',
              data: self.opts.content.list.select.field,
              render: function (data, type, full, meta) {
//            console.log('meta>', meta)
//            console.log('data>', data)
                let col = self.opts.content.list.action
                // 一个动作
                if (col.options.length === 1) {
                  // let colOption = col.options[0]
                  // return '<li><a href="javascript:' + colOption.click + '; class="btn-xs"><i class="icon-detail"></i>' + colOption.title + '</a></li>'
                }
                // 多个动作，展示成下拉项方式
                let act = ''
                for (let i in col.options) {
                  let colOption = col.options[i]
                  let sDisable = self._isRowBtnDisable($table.api().row(meta.row).data(), colOption.disable)
                  act += '<li><a ' + sDisable + ' data-gm-action="' + colOption.click + '" data-gm-title="' + colOption.title + '" data-gm-row="' + meta.row + '" class="gm-action btn-xs"><i class="icon-detail"></i>' + colOption.title + '</a></li>'
                }
                return '<div class="btn-group">' +
                  '<button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false"> 更多 ' +
                  ' <i class="fa fa-angle-down"></i>' +
                  '</button>' +
                  '<ul class="dropdown-menu" role="menu">' +
                  act +
                  '</ul>' +
                  '</div>'
              },
              bSortable: false
            })
          }
          // 添加选择列
          if (self.opts.content.list.select) {
            tableBaseOptions.columns.unshift({
              sClass: 'text-center',
              data: self.opts.content.list.select.field,
              render: function (data, type, full, meta) {
                return '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">' +
                  '<input type="checkbox"  class="checkboxes"  value="' + data + '" />' +
                  '<span></span>' +
                  '</label>'
              },
              bSortable: false
            })
          }
          return tableBaseOptions
        }

        /**
         * 更新选择的行信息
         */
        function updateSelected () {
          let selectedIds = $table.api().rows('.active')[0]
          let selectedRows = []
          for (var i in selectedIds) {
            let rowData = $table.api().rows(selectedIds[i]).data()[0]
            selectedRows.push(rowData)
          }
          self.selectedRows = selectedRows
          console.log('selectedRows>', self.selectedRows)
        }

        // 自定义列操作事件
        $table.on('click', 'tbody tr a.gm-action', function (e) {
          let $act = $(e.target)
          let action = utils.trim($act.attr('data-gm-action'))
          let actionTitle = utils.trim($act.attr('data-gm-title'))
          let rowIndex = $act.attr('data-gm-row')
          if (action.indexOf('javascript:') === 0) {
            // 执行自定义脚本
            eval(action.replace('javascript:', ''))
          } else {
            // 调用专用函数,如打开窗口
            var activeActionOption = {}
            self.opts.content.list.action.options.forEach(actionOption => {
              if (actionOption.title === actionTitle) {
                activeActionOption = actionOption
                return
              }
            })
            let data = {}
            $.extend(data, activeActionOption.params)
            $.extend(data, $table.api().row(rowIndex).data())
            console.log('activeActionOption>', activeActionOption)
            self[action](self, data)
          }
        })
        // 初始化操作按钮
        $(self.$el).find('#btn_new').click(function () {
          api.ui.openVue(self, 'tab-view', {})
//          console.log('self.$root>', self.$root)
//          self.$root.modalView = require('./tab-view.vue')
//          $(self.$el).find('.modal').modal()
        })
      },
      _genGql (queryData) {
        // 构建gql
        let root = {}
        if (queryData) {
          for (let i in queryData) {
            root[i] = queryData[i]
          }
        }
        let fsAry = []
        for (let i in this.opts.content.list.columns) {
          let col = this.opts.content.list.columns[i]
          fsAry.push(col.field)
        }
        root['@fs'] = fsAry.join(',')
        root['@order'] = this.opts.content.list.order
        root['@p'] = this.opts.content.list.p
        let gql = {}
        gql[this.opts.content.entity] = root
        console.log('创建的gql > ', gql)
        return gql
      },
      handleMixQuery (data) {
        this.lastMixQueryData = data
        this.tableRef.api().draw()
        this.selectedRows = []
      },
      open (srcVue, data) {
        api.ui.openPage(srcVue, data.pageCode, data.query, data)
      }
    },
    components: {formQuery}
  }
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
