// import staticCfgManager from '../staticCfgManager'

class SecurityCfg {
  constructor () {
    this.pageConfigs = [
      // 用户管理
      {
        code: 'sys_user_list',
        content: {
          title: '用户信息',

          component: 'grid',
          query: {
            tree: null,
            filter: null,
            mix: {
              fields: [
                {field: 'name', title: '名称', cop: 'eq', type: 'string'},
                {field: 'loginName', title: '登录名', cop: 'contains', type: 'string', lop: 'or'},
                {field: 'description', title: '描述', cop: 'contains', type: 'string', lop: 'and'}
                // {field: 'active', title: '激活', cop: 'eq', type: 'boolean', default: false},
                // {field: 'birthday', title: '生日', cop: 'gte', type: 'date', format: 'yyyy-mm-dd'},
                // {
                //   field: 'sex',
                //   title: '性别',
                //   cop: 'eq',
                //   type: 'select',
                //   default: 'male',
                //   options: [{key: '男', value: 'male'}, {key: '女', value: 'female'}]
                // }
              ]
            }
          },
          toobar: {create: {}},
          info: '',
          list: {
            select: {field: 'id', title: '', type: 'checkbox'},
            action: {
              field: 'id',
              title: '操作',
              options: [{title: '修改', click: 'open', disable: ':id > 0'}, {title: '修改2', click: 'open'}, {
                title: '详细',
                click: 'javascript:alert(\'aaaa\')'
              }, {title: '修改3', click: 'open'}]
            },
            columns: [
              // {field: 'id', title: '', type: 'checkbox'},

              {field: 'name', title: '名称', type: 'string', format: ''},
              {field: 'loginName', title: '登录名', type: 'string', format: ''},
              {field: 'description', title: '描述', type: 'string', format: ''}
            ],
            p: '1,10',
            order: 'name|+'
          },
          stat: ''
        }
      },
      // 角色管理
      {
        code: 'sys_role_list',
        content: {
          title: '角色信息',
          component: 'grid',
          entity: 'sys_role',
          query: {
            hide: true,
            tree: null,
            filter: null,
            mix: {
              fields: [
                {field: 'name', title: '名称', cop: 'eq', type: 'string'},
                {field: 'code', title: '编码', cop: 'contains', type: 'string', lop: 'or'},
                {field: 'description', title: '描述', cop: 'contains', type: 'string', lop: 'and'}
              ]
            }
          },
          info: '',
          selected: '',
          list: {
            select: {field: 'id', title: '', type: 'checkbox'},
            action: {
              title: '操作',
              options: [{title: '修改', click: 'open', disable: ':id > 0'},
                {title: '详细', click: 'open', params: {pageCode: 'sys_role_list_detail', query: ''}},
                {title: '直接调用js', click: 'javascript:alert(\'aaaa\')'}]
            },
            columns: [
              {field: 'id', title: '序号', visible: false},
              {field: 'name', title: '名称', type: 'string', format: ''},
              {field: 'code', title: '编码', type: 'string', format: ''},
              {field: 'description', title: '描述', type: 'string', format: ''}
            ],
            p: '1,10',
            order: 'name|+'
          },
          stat: '',
          // 状态
          state: {
            selectedRows: {},
            clickedRow: {}
          }
        }
      },
      // 角色详情
      {
        code: 'sys_role_list_detail',
        content: {
          title: '角色详情',
          component: 'tab-view',
          info: '',
          state: {},
          activeIndex: 1,
          tabs: [
            {title: '基本信息', html: '<p style="text-align: center">角色基本信息</p>', href: '', page: {}},
            {
              title: '角色用户',
              html: '<p style="text-align: center">角色用户信息</p>',
              href: '',
              page: {pageCode: 'sys_role_ref_user_list', query: ''}
            },
            {title: '角色权限', html: '<p style="text-align: center">角色权限清单</p>', href: '', page: {}}
          ],
          footer: {
            action: {}
          }
        }
      }
    ]
  }

}

let instance = new SecurityCfg()
// staticCfgManager.register(instance)
export default instance
