import { ctx } from './config'
import utils from '../common/utils'
// import jsonp from '../common/jsonp'

let core = {
  data: {
    /**
     *
     * @param options pageId
     * @returns {{}}
     */
    getPageConfig: function (options) {
      let pageConfig = {
        code: 'sys_user_list',
        content: {
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
            columns: [
              {field: 'id', title: '', type: 'PK'},
              {field: '', title: '操作', type: 'action', options: [{title: '详细', click: 'alert("aaaa")'}]},
              {field: 'name', title: '名称', type: 'string', format: ''},
              {field: 'loginName', title: '登录名', type: 'string', format: ''},
              {field: 'description', title: '描述', type: 'string', format: ''}
            ],
            p: '1,10',
            order: 'name|+'
          },
          stat: ''
        }
      }
      return new Promise((resolve, reject) => {
        resolve({
          code: '0',
          msg: '',
          data: pageConfig
        })
      })
    }
  },
  url: {
    getList: function (options) {
      return ctx.url.api + '/meta/list?' + utils.param(options)
    },
    getPageConfig: function (options) {
      return ctx.url.api + '/page/' + utils.param(options)
    }
  }
}
export default core
