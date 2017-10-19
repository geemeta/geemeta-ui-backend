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
          query: {
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
              {field: 'code', title: '编码', type: 'string', format: ''},
              {field: 'description', title: '描述', type: 'string', format: ''}
            ],
            p: '1,10',
            order: 'name|+'
          },
          stat: ''
        }
      }
    ]
  }

}

let instance = new SecurityCfg()
export default instance
