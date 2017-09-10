import Vue from 'vue'
// import $ from 'jquery';
// 用于定义私用方法
const newWin = Symbol('newWin')

class XGDndHandler {
  constructor () {
    this.currentDragObject = null
    this.currentDragSortObject = null
  }

  /**
   * @param selector 拖放对象或者选择器
   * @param type 可以拖放对象类型，默认为simple
   * @param valueSelector 从拖放对象中选择用于拖放后展示加载的内容，默认为'.content'
   */
  bindDragObjects (selector, type, valueSelector) {
    var dragObjects = selector
    console.debug('>>', $.type(selector) === 'string')
    if ($.type(selector) === 'string') {
      dragObjects = $(selector)
    }
    for (var i = 0; i < dragObjects.length; i += 1) {
      this.bindDragObject(dragObjects[i], type, valueSelector)
    }
  }

  /**
   * @param dragObject 拖放对象
   * @param type 可以拖放对象类型，默认为simple
   * @param valueSelector 从拖放对象中选择用于拖放后展示加载的内容，默认为'.content'
   */
  bindDragObject (dragObject, type, valueSelector) {
    console.debug('type:' + type + ',bindDragObject:', dragObject)
    let $dragObject = $(dragObject)
    $dragObject.attr('draggable', true)
    $dragObject.addClass('dragObject')

    dragObject.onselectstart = function () {
      return false
    }
    dragObject.ondragstart = function (ev) {
//                        console.debug('>>>', $(ev.target).find('.content tr'))
      this.currentDragObject = {
        key: ev.target.attributes['data-key'].value,
        type: type || 'simple',
        target: ev.target,
        value: $(ev.target).find(valueSelector || '.content'),
        id: ev.target.id
      }
      return true
    }
    dragObject.ondragend = function (ev) {
      this.currentDragObject = null
      return false
    }
  }

  bindDragTargets (selector, allowTypes, callback) {
    let targetObjects = selector
    console.debug('>>', $.type(selector) === 'string')
    if ($.type(selector) === 'string') {
      targetObjects = $(selector)
    }

    for (let i = 0; i < targetObjects.length; i += 1) {
      this.bindDragTarget(targetObjects[i], allowTypes, callback)
    }
  }

  /**
   * @param targetObject 拖放目标对象
   * @param allowTypes 可以放置的拖放对象类型，默认为simple。多个类型用“,”分隔
   * @param callback 拖放成功后的回调函数，参数@dragObject,@isAllow
   */
  bindDragTarget (targetObject, allowTypes, callback) {
    targetObject.ondragover = function (ev) {
      ev.preventDefault()
      return true
    }
    targetObject.ondragenter = function (ev) {
      return true
    }
    targetObject.ondrop = function (ev) {
      ev.preventDefault()
      let isAllow = false
      if (this.currentDragObject) {
//                            console.debug('ev>', ev)
        let types = allowTypes || 'simple'
        if (this.currentDragObject.type && types.indexOf(this.currentDragObject.type) > -1) {
          isAllow = true
        }
        callback(this.currentDragObject, isAllow, this)
      }
      return false
    }
  }

  bindDragSortObject (sortObject, groupSelector, callback) {
//                    console.debug('group:' + groupSelector + ',bindSortObject:', sortObject)
    let $sortObject = $(sortObject)
    $sortObject.attr('draggable', true)
    $sortObject.addClass('sortObject')
    let targetObject = sortObject

    sortObject.onselectstart = function () {
      return false
    }
    sortObject.ondragstart = function (ev) {
//                        console.debug('sort ev>', ev)
      this.currentDragSortObject = {
        groupSelector: groupSelector,
        target: ev.target
      }
      return true
    }
    sortObject.ondragend = function (ev) {
      this.currentDragSortObject = null
      return false
    }

    // target
    targetObject.ondragover = function (ev) {
      ev.preventDefault()
      return true
    }
    targetObject.ondragenter = function (ev) {
      return true
    }
    targetObject.ondrop = function (ev) {
      ev.preventDefault()
      // TODO tojb=this??
      let tobj = this
      let isAllow = false
      if (this.currentDragSortObject) {
//                            console.debug('on drop ev>', ev)
        if (this.currentDragSortObject.groupSelector && this.currentDragSortObject.groupSelector === groupSelector) {
          isAllow = true
        }
        if ($.isFunction(callback)) { callback(this.currentDragSortObject, isAllow, tobj) }
      }
      return false
    }
  }
}

class DataSource {
  // constructor () {
  // }

  // createMetaDataDS() {
  //     return new this.kendo.data.DataSource({
  //         transport: {
  //             read: {
  //                 url: function (options) {
  //                     return xg.ctx.url.api + '/helper/metadata'
  //                 },
  //                 dataType: 'json'
  //             }
  //         },
  //         requestEnd: function (e) {
  //             var response = e.response
  //             if (!e.response) {
  //                 console.error('获取不到元数据,请检查geeKey是否正确！', e)
  //             }
  //         },
  //     })
  // }

  loadMetadata (opts, resultAdapter) {
    function defaultAdapter (fields) {
      // from-------------
      // field:'updateDate'
      // length:20
      // nullable:false
      // operator:''
      // order:0
      // template:''
      // title:'更新时间'
      // type:'date'
      // value:''
      // to------------------
      // title: '名称',
      // name: 'name',
      // type: 'string',
      // nullable: false,
      // value: '',
      // tips: '中文'
      let r = []
      for (const i in fields) {
        fields[i].name = fields[i].field
        r.push(fields[i])
      }
      return r
    }

    let adapter = resultAdapter || defaultAdapter
    let result = []
    let geeKey = opts ? opts.queryKey || opts.geeKey : ''
    if (!geeKey) {
      console.error('需配置参数{queryKey:XXX}或{geeKey:XXX}')
    } else {
      let url = GM.ctx.url.api + '/helper/metadata?queryKey=' + geeKey
      result = $.ajax({
        url: url,
        async: false,
        cache: opts && opts.cache || false
      }).responseText
      if (!result) console.error('获取不到元数据,请检查geeKey是否正确！')
      else return adapter($.parseJSON(result))
    }
    return []
  }

  /**
   * @param filterFields 格式：[{},{}]
   * @param ignoreEmptyValue 是否忽略空值,默认为是
   * @returns {{xgQueryFilter: {logic: string}}}
   */
  createFilter (filterFields, ignoreEmptyValue) {
    var isIgnoreEmptyValue = ignoreEmptyValue === undefined ? true : ignoreEmptyValue
    var queryFilter = {logic: 'and'}
    queryFilter.filters = []
    if ($.isArray(filterFields)) {
      for (var i in filterFields) {
        push(filterFields[i])
      }
    } else {
      push(filterFields)
    }
    function push (filterField) {
      if (!filterField.value && isIgnoreEmptyValue) return
      queryFilter.filters.push(filterField)
    }

    // xgQueryFilter 与服务端的一致
    return {xgQueryFilter: queryFilter}
  }
}

let GM = new class GeeMeta {
  constructor (ds, dndHandler) {
    this.utils = {
      array: {
        toMap: function (srcItems, keyField) {
          if (!srcItems) return {}
          var map = {}
          for (var i in srcItems) {
            map[srcItems[i][keyField]] = srcItems[i]
          }
          // console.debug('toMetadataMap result>>', map)
          return map
        }
      },
      newId: function (prefix) {
        return (prefix || 'ID') + this.guid()
      },
      winId: function () {
        return 'WINID_' + GM.utils.guid()
      },
      guid: function (size) {
        function S4 () {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
        }

        if (size === 32) return S4() + S4() + S4() + S4()
        return S4() + S4()
      }

    }

    this.ctx = {
      url: {
        root: 'http://localhost:8080/',
        api: 'http://localhost:8080/api/common/'
        // root: window.location.origin + '/',
        // api: window.location.origin + '/api/common/'
        // module: window.location.origin + '/static/m/',
        // staticUrl: window.location.origin + '/static/',
        // jsUrl: window.location.origin + '/static/assets/',
      },
      user: {}
    }
    this.ds = ds
    this.dndHandler = dndHandler
    this.msg = {}
    this.dao = (function () {
      function ajax (type, geeKey, options) {
        if (!geeKey) console.error('未设置geeKey。')
        var url = GM.ctx.url.api + 'crud/' + geeKey.replace(/\./g, '_')
        if (options && options.id) url = url + '/' + options.id
        console.debug(type + ' data>', options)
        // console.debug(type + ' data>', JSON.stringify(options))
        var d = $.Deferred()
        $.ajax(url, {
          type: type,
          dataType: 'json',
          contentType: 'application/json',
          processData: false,
          data: JSON.stringify(options),
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
            d.resolve(data)
            // if ($.isFunction(callback))callback(data)
          }
        })
        return d.promise()
      }

      /**
       * @param logic 'and'|'or'
       * @returns {Condition}
       */
      function Condition (logic) {
        var queryFilter = logic || {logic: 'and'}
        queryFilter.filters = []
        // 属性为：xgQueryFilter，与服务端的参数值一致
        return {
          /**
           * [{field:'loginName',operator:'contains',value:''}]
           */
          add: function (field, operator, value) {
            queryFilter.filters.push({field: field, operator: operator, value: value})
          },
          values: {xgQueryFilter: queryFilter}
        }
      }

      return {
        createQuerier: function (geeKey, logic) {
          // function Querier(geeKey, logic) {
          let _logic = logic
          let _condition = new Condition(_logic)
          let pageInfo = {}
          return {
            setPage: function (pageIndex, pageSize) {
              pageInfo.page = pageIndex
              pageInfo.pageSize = pageSize
              return this
            },
            addFilter: function (field, operator, value) {
              _condition.add(field, operator, value)
              return this
            },
            clearFilter: function () {
              _condition = new Condition(_logic)
              return this
            },
            // fresh:function (callback) {
            //     ajax('GET', geeKey, _condition, callback)
            // },
            read: function () {
              var options = {}
              $.extend(options, pageInfo, _condition)
              return ajax('GET', geeKey, options)
            }
          }
          // }
          //
          // return new Querier(geeKey, logic)
        },
        query: function (geeKey, options) {
          return ajax('GET', geeKey, options)
        },
        save: function (geeKey, options) {
          return ajax('POST', geeKey, options)
        }
      }
    }())
  }

  profile (jsonProfile) {
    if (arguments.length === 1) {
      if (jsonProfile) {
        sessionStorage.setItem('geeMetaProfile', JSON.stringify(jsonProfile))
      } else {
        sessionStorage.removeItem('geeMetaProfile')
      }
    } else if (arguments.length === 0) {
      let value = sessionStorage.getItem('geeMetaProfile')
      if (value) {
        return JSON.parse(value)
      }
    }
    return {}
  }

  showMsg (msg, type) {
    $.bootstrapGrowl(msg, {
      ele: 'body', // which element to append to
      type: type || 'info', // (null, 'info', 'danger', 'success', 'warning')
      offset: {
        from: 'top', // 'top', or 'bottom'
        amount: 100
      },
      align: 'right', // ('left', 'right', or 'center')
      width: 250, // (integer, or 'auto')
      delay: 5, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
      allow_dismiss: true, // If true then will display a cross to close the popup.
      stackup_spacing: 10 // spacing between consecutively stacked growls.
    })
  }

  init (options) {
    if (options) {
      this.msg = options.msg | {}
      options.store ? this.store = options.store : null
      options.router ? this.router = options.router : null
    }
  }

  openWin (winOptions, dataItem) {
    if (!winOptions) {
      console.warn('未设置参数：{win:xx}')
      return
    }
    let _win = this[newWin](winOptions.win)
    let renderTo = _win.renderTo
    // console.debug('_win>', _win)
    let $win = _win.win
    $win.params = dataItem || {}
    if (winOptions.content) {
      $(renderTo).append(winOptions.content)
    } else if (winOptions.url) {
      console.debug('winOptions.url>', winOptions.url)
      // 注意require的url是相对于当前文件js的url
      let app = require(`${winOptions.url}`)// 无`${}`的话会告警
      console.debug('require vue >', app)
      app.propsData = {
        $win: $win
      }
      app.store = this.store
      // let app = require('./platform/xg-helper/about')
      let appVue = new Vue(app)
      appVue.$mount()
      $(renderTo).append(appVue.$el)
    }
  }

  [newWin] (winOpts) {
    var id = this.utils.newId('WINID')
    var winId = '#' + id
    $('body').prepend('<div id=""' + id + '"></div>')

    $(winId).kendoWindow({
      animation: false,
      visible: false,
      resizable: false,
      actions: [
        'Minimize',
        'Maximize',
        'Close'
      ]
    })
    var kendoWin = $(winId).data('kendoWindow')
    kendoWin.setOptions(winOpts)
    kendoWin.open().center()
    kendoWin.bind('close', function () {
      $(winId).remove()
      // console.debug('remove div id:', winId)
    })
    var contentId = this.utils.newId('WIN_CONTENT')
    var renderTo = '#' + contentId
    kendoWin.content('<div id="' + contentId + '"></div>')
    return {
      win: kendoWin,
      renderTo: renderTo
    }
  }

  login (user, remember, success) {
    let self = this
    return $.ajax(this.ctx.url.root + 'api/sys/auth/login?remember=' + remember, {
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      data: user,
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        self.showMsg('账号或密码不正确！')
      },
      success: success
    })
  }

  logout () {
    let self = this
    $.ajax(this.ctx.url.root + 'api/sys/auth/logout', {
      // type: 'POST',
      // dataType: 'json',
      // contentType: 'application/json',
      // processData: false,
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        self.showMsg('暂时不能注销！')
      },
      success: function (data) {
        self.profile(null)
        self.router.push('/login')
        // console.debug('request end>>', data)
        // var reloadURL = 'index.html' + window.location.search
        // window.location.replace(reloadURL, true)
      }
    })
  }

  isLogged () {
    let self = this
    $.ajax(this.ctx.url.root + 'api/sys/auth/isLogged', {
      // async: false,
      // dataType: 'json',
      // contentType: 'application/json',
      // processData: false,
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        self.showMsg('暂未能检查是否已登录！')
      },
      success: function (data) {
        self.profile(data)
      }
    })
  }

}(new DataSource(), new XGDndHandler())
export default GM
