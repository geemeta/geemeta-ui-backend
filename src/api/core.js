import Vue from 'vue'
import ctx from '../common/appContext'
import utils from '../common/utils'
// import jsonp from '../common/jsonp'
import securityCfg from './platform/securityCfg'

let core = {
  data: {
    /**
     * 通过页面id获取页面配置
     * @param pageCode pageId
     * @returns {{}}
     */
    getPageConfig: function (pageCode) {
      // let pageConfig = {
      //   code: 'sys_user_list',
      //   content: {
      //     component: 'grid',
      //     query: {
      //       tree: null,
      //       filter: null,
      //       mix: {
      //         fields: [
      //           {field: 'name', title: '名称', cop: 'eq', type: 'string'},
      //           {field: 'loginName', title: '登录名', cop: 'contains', type: 'string', lop: 'or'},
      //           {field: 'description', title: '描述', cop: 'contains', type: 'string', lop: 'and'}
      //           // {field: 'active', title: '激活', cop: 'eq', type: 'boolean', default: false},
      //           // {field: 'birthday', title: '生日', cop: 'gte', type: 'date', format: 'yyyy-mm-dd'},
      //           // {
      //           //   field: 'sex',
      //           //   title: '性别',
      //           //   cop: 'eq',
      //           //   type: 'select',
      //           //   default: 'male',
      //           //   options: [{key: '男', value: 'male'}, {key: '女', value: 'female'}]
      //           // }
      //         ]
      //       }
      //     },
      //     info: '',
      //     list: {
      //       select: {field: 'id', title: '', type: 'checkbox'},
      //       action: {
      //         field: 'id',
      //         title: '操作',
      //         options: [{title: '修改', click: 'open', disable: ':id > 0'}, {title: '修改2', click: 'open'}, {
      //           title: '详细',
      //           click: 'javascript:alert(\'aaaa\')'
      //         }, {title: '修改3', click: 'open'}]
      //       },
      //       columns: [
      //         // {field: 'id', title: '', type: 'checkbox'},
      //
      //         {field: 'name', title: '名称', type: 'string', format: ''},
      //         {field: 'loginName', title: '登录名', type: 'string', format: ''},
      //         {field: 'description', title: '描述', type: 'string', format: ''}
      //       ],
      //       p: '1,10',
      //       order: 'name|+'
      //     },
      //     stat: ''
      //   }
      // }
      let pageConfig = {}
      for (var i in securityCfg.pageConfigs) {
        let cfg = securityCfg.pageConfigs[i]
        if (cfg.code === pageCode) {
          pageConfig = cfg
          break
        }
      }
      return new Promise((resolve, reject) => {
        resolve({
          code: '0',
          msg: '',
          data: pageConfig
        })
      })
    },
    getPageConfig2: function (options) {
      // console.log('getPageConfig > options>', options)
      // console.log('options.id === 2 >', options.id === '2')
      let pageDefine = {
        template: '',
        before: {
          data: {}
        },
        fields: {}
      }
      if (options.id === '2') {
        pageDefine.template = ''
      } else {
        pageDefine.template = '<div class="portlet box green dnd-content" data-meta="{type:\'layout\'}" data-id="zsgxBWWT"><div class="portlet-title"><div class="caption"><i class="fa fa-gift"></i>Form Sample2\n' +
          '                </div> <div class="tools"><a href="javascript:;" class="collapse" data-original-title="" title=""></a> <a href="#portlet-config" data-toggle="modal" class="config" data-original-title="" title=""></a> <a href="javascript:;" class="reload" data-original-title="" title=""></a> <a href="javascript:;" class="remove" data-original-title="" title=""></a></div></div> <div class="portlet-body form"><form action="#" class="form-horizontal"><div data-dnd-allow="table,layout,control" class="form-body dnd-target" data-id="rJTO9Hld4ftfIYHW"><div data-meta="{type:\'layout\'}" class="row xg-mix-no-mp dnd-content " data-id="GDhmmsxy"><div class="col-md-6"><div class="form-group"><label class="control-label col-md-4">First Name</label> <div class="col-md-8"><div data-dnd-allow="control,field" class="dnd-target" data-id="dVGTEgQr9GHS7AFg"></div></div></div></div> <div class="col-md-6"><div class="form-group has-error"><label class="control-label col-md-4">Last Name</label> <div class="col-md-8"><select name="foo" class="form-control input-sm"><option value="1">Option 1</option> <option value="1">Option 2</option> <option value="1">Option 3</option></select> <span class="help-block"> This field has error. </span></div></div></div></div><div data-v-715627ce="" class="row xg-mix-no-mp dnd-content" data-meta="{type:\'layout\'}" data-id="RCqhMAFx"><div data-v-715627ce="" class="col-md-5 column"><div data-v-715627ce="" data-dnd-allow="layout,table,control" class="dnd-target" data-id="w9sXjNfsoaA8cidv"></div></div> <div data-v-715627ce="" class="col-md-7 column"><div data-v-715627ce="" data-dnd-allow="layout,table,control" class="dnd-target" data-id="pmHTqBQ0xYjE9nQR"></div></div></div></div> <div class="form-actions"><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-offset-3 col-md-9"><button type="submit" class="btn green">Submit</button> <button type="button" class="btn default">Cancel</button></div></div></div> <div class="col-md-6"></div></div></div></form></div></div>'
      }
      pageDefine.before.date = [
        {ref: 'age', gql: {'md_dict': {groupCode: 'age', '@fs': 'groupCode,code,name'}}},
        {ref: 'dept', gql: {'md_dict': {groupCode: 'age', '@fs': 'groupCode,code,name'}}}
      ]
      pageDefine.fields = {
        'age': {ds: 'age', defaultValue: '8TO18'}
      }
      let pageConfig = {
        define: pageDefine,
        data: []
      }
      return new Promise((resolve, reject) => {
        resolve({
          code: '0',
          msg: '',
          data: pageConfig
        })
      })
    },
    getFileTemplate: function (fileName) {
      return new Promise((resolve, reject) => {
        let lazyLoad = (fileName, resolve) => { require(['../views/geemeta/gm-desinger/file-template/' + fileName + '.vue'], resolve) }
        lazyLoad(fileName, data => { resolve(new Vue(data).$mount()) })
      })
    },
    getPageByCode: function (pageCode) {
      let df = $.Deferred()
      // gql查询语句
      let gql = {
        'platform_page_config': {
          '@p': '1,1',
          '@fs': 'id,code,content',
          'code': pageCode
        }
      }
      $.ajax(ctx.url.apiMetaList, {
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify(gql),
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          // 通常 textStatus 和 errorThrown 之中
          // 只有一个会包含信息
          var options = this // 调用本次AJAX请求时传递的options参数
          console.error({
            XMLHttpRequest: XMLHttpRequest,
            textStatus: textStatus,
            errorThrown: errorThrown,
            options: options
          })
        },
        success: function (data) {
          console.log('request end>>', data)
          df.resolve(data)
          // if ($.isFunction(callback))callback(data)
        }
      })
      return df.promise()
    },
    savePage: function (page) {
      var df = $.Deferred()
      $.ajax(ctx.url.apiMetaSave, {
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify(page),
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          // 通常 textStatus 和 errorThrown 之中
          // 只有一个会包含信息
          var options = this // 调用本次AJAX请求时传递的options参数
          console.error({
            XMLHttpRequest: XMLHttpRequest,
            textStatus: textStatus,
            errorThrown: errorThrown,
            options: options
          })
        },
        success: function (data) {
          console.debug('request end>>', data)
          df.resolve(data)
          // if ($.isFunction(callback))callback(data)
        }
      })
      return df.promise()
    },
    save: function (entityName, keyValues) {
      let data = {
        '@biz': 'x'
      }
      let biz = '0'
      data[entityName] = keyValues
      // $.extend(data[entityName], keyValues)
      var df = $.Deferred()
      $.ajax(ctx.url.apiMetaSave + '/' + biz, {
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify(data),
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          // 通常 textStatus 和 errorThrown 之中
          // 只有一个会包含信息
          var options = this // 调用本次AJAX请求时传递的options参数
          console.error({
            XMLHttpRequest: XMLHttpRequest,
            textStatus: textStatus,
            errorThrown: errorThrown,
            options: options
          })
        },
        success: function (data) {
          console.debug('request end>>', data)
          df.resolve(data)
          // if ($.isFunction(callback))callback(data)
        }
      })
      return df.promise()
    },
    /**
     * @param entityName e.g. platform_dev_project
     * @param keyValues e.g. {id:1111111111111111,name:'xxx'}
     * @param fieldNames e.g. id,name
     */
    queryOne: function (entityName, keyValues, fieldNames) {
      let df = $.Deferred()
      // gql查询语句
      let gql = {}
      gql[entityName] = {
        '@fs': fieldNames || '*'
      }
      $.extend(gql[entityName], keyValues)
      $.ajax(ctx.url.apiMetaList, {
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify(gql),
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          // 通常 textStatus 和 errorThrown 之中
          // 只有一个会包含信息
          var options = this // 调用本次AJAX请求时传递的options参数
          console.error({
            XMLHttpRequest: XMLHttpRequest,
            textStatus: textStatus,
            errorThrown: errorThrown,
            options: options
          })
        },
        success: function (data) {
          console.log('request end>>', data)
          df.resolve(data)
          // if ($.isFunction(callback))callback(data)
        }
      })
      return df.promise()
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
