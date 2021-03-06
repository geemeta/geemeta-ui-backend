import Vue from 'vue'
import ctx from '../common/appContext'
import utils from '../common/utils'
// import jsonp from '../common/jsonp'
import staticCfgManager from './staticCfgManager'

/**
 * 在使用之前需选设置$root {@link #ctx}
 * @type {{data: {getPageConfig: core.data.getPageConfig, getPageConfig2: core.data.getPageConfig2, getFileTemplate: core.data.getFileTemplate, getPageByCode: core.data.getPageByCode, savePage: core.data.savePage, save: core.data.save, queryOne: core.data.queryOne}, url: {getList: core.url.getList, getPageConfig: core.url.getPageConfig}, ui: {openPage: core.ui.openPage, openVue: core.ui.openVue}, ctx: {$root: undefined}}}
 */
let core = {
  data: {
    /**
     * 通过页面id获取页面配置
     * @param pageCode pageCode
     * @returns {{}}
     */
    getPageConfig: function (pageCode) {
      // 先从本地获取静态的，若本地无则从远程获取
      let pageConfig = staticCfgManager.get(pageCode)
      if (!pageConfig) {
        // TODO 从远程加载
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
  },
  ui: {
    /**
     *
     * @param pageCode 配置的页面
     * @param query
     * @param data
     */
    openPage: function (srcVue, pageCode, query, data) {
      core.data.getPageConfig(pageCode).then(res => {
        console.debug('res>', res)
        var pageConfig = {}
        if (res.code === '0') {
          if (res.data) {
            pageConfig = res.data
          } else {
            console.error('返回数据res.data为空！')
          }
        }
        core.ui.openVue(srcVue, pageConfig.content.component, pageConfig, data)
      })
    },
    openVue: function (srcVue, vueTemplate, vueConfig, vueData) {
      console.log('vueTemplateName >', vueTemplate)
      console.log('vueConfig >', vueConfig)
      console.log('vueData >', vueData)
      // $root对应App.vue的上线，srcVue.$root.$children[0]才对应APP.vue
      Vue.set(srcVue.$root.$children[0].$refs.appRootModalView, 'modalBody', require('../components/page/' + vueTemplate + '.vue'))
      Vue.set(srcVue.$root.$children[0].$refs.appRootModalView, 'modalOpts', vueConfig)
      $('#app-root-modal').modal('show')
    }
  },
  ctx: {
    $root: undefined
  }
}
export default core
