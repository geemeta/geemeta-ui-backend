import options from './dndOptions'
import dndHandler from './dndHandler'
import utils from './utils'

class Designer {
  constructor () {
    this.controlContainer = 'field'
    this.controlOverlay = '.dnd-control.mt-element-overlay'
    this.overlayToolbarTemplate = $(this.controlOverlay)
    this.eventBus = {}
    this.eventName = {onSetting: 'onSetting', onBindControl: 'onBindControl'}
    this.handlers = {}
  }

  registerHandler (handler) {
    this.handlers[handler.getType()] = handler
  }

  getHandler (type) {
    return this.handlers[type]
  }

  init () {
    // bind all dragTarget
    $(options.selector.designer + ' ' + options.selector.stage + ' ' + options.selector.target).each(function () {
      // console.log('init bind target>', this)
      instance.bindDragTarget($(this))
    })
    $(options.selector.designer + ' ' + options.selector.stage + ' ' + options.selector.content).each(function () {
      // console.log('init bind content>', this)
      instance.warpToolbarOnMouseEnter($(this))
    })
  }

  /**
   * @param dragTarget
   */
  bindDragTarget (dragTargetSelector) {
    // var target = dragTargetSelector
    var $target = dragTargetSelector
    if (!(dragTargetSelector instanceof jQuery)) {
      $target = $(dragTargetSelector)
    }
    let allowTypes = $target.attr(options.attr.data.allowTypes)
    // console.log('dndHandler.bindDragTarget > allowTypes:' + allowTypes + ' > ', $target)
    dndHandler.bindDragTarget($target, allowTypes, ondrag, ondragover)

    function ondrag (isAllow, dragObject, dragTarget, lastPlaceholder, ev) {
      // console.log(ev.ctrlKey)
      if (isAllow) {
        // 解析被拖动的对像 获取相应的配置值、dom对像
        // 是移动，还是新建
        // 拖动对象是怎么类型，采用相应的handler处理
        if (dragObject.isNew) {
          // 新建
          onDragForNew(dragObject, dragTarget, lastPlaceholder)
        } else {
          // 存在id，说明是移动
          onDragForMove(dragObject, dragTarget, lastPlaceholder)
        }
      }
    }

    function onDragForNew (dragObject, dragTarget, lastPlaceholder) {
      let $dragElement = $(dragObject.target)
      let $contentWrapClone = $dragElement.find(options.selector.content).clone()
      let $contentClone = $contentWrapClone.children().first()
      $contentClone.addClass(options.selector.content.substring(1))
      $contentClone.attr(options.attr.data.meta, $contentWrapClone.attr(options.attr.data.meta))
      // 从工具栏拖动新添加的对像，需添加data-id
      let dataId = utils.uuid(8)
      $contentClone.attr(options.attr.data.id, dataId)

      // 处理子拖放区域：模板数据内，存在拖放区域dragTarget，该操作需在$dragTarget.prepend之前执行
      let $subDragTarget = $contentWrapClone.find(options.selector.target)
      $subDragTarget.each(function () {
        instance.bindDragTarget($(this))
      })
      // 完成以上处理之后开始加入文档流
      let $dragTarget = $(dragTarget)
      let $appendedCentent
      if (lastPlaceholder.index === 0) {
        $dragTarget.prepend($contentClone)
        $appendedCentent = $dragTarget.children().first()
        instance.warpToolbarOnMouseEnter($appendedCentent)
      } else {
        $dragTarget.children().eq(lastPlaceholder.index - 1).after($contentClone)
        $appendedCentent = $dragTarget.children().eq(lastPlaceholder.index)
        instance.warpToolbarOnMouseEnter($appendedCentent)
      }
      // console.log('isTableLayout>', dragObject)
      if (dragObject.isTableLayout) {
        // 对于table tr的场景，为table添加拖动事件后；对于table内的下tr,若其有.dnd-content
        let $subContent = $appendedCentent.find(options.selector.content)
        if ($subContent.size() > 0) {
          // $subContent.addClass(options.selector.content.substring(1))
          $subContent.attr(options.attr.data.id, utils.uuid(8))
          // 没有date-meta的话则，设置默认data-meta="{type:'tr'}"
          if (!$subContent.attr(options.attr.data.meta)) {
            $subContent.attr(options.attr.data.meta, options.attr.value.meta.tr)
          }
          instance.warpTrToolbarOnMouseEnter($subContent)
        }
      } else {
        // .dnd-content
        console.log('$appendedCentent>', $appendedCentent)
        let $subContent = $appendedCentent.find(options.selector.content)
        if ($subContent.size() > 0) {
          // $subContent.addClass(options.selector.content.substring(1))
          $subContent.attr(options.attr.data.id, utils.uuid(8))
          // 没有date-meta的话则，设置默认data-meta="{type:'layout'}"
          if (!$subContent.attr(options.attr.data.meta)) {
            $subContent.attr(options.attr.data.meta, options.attr.value.meta.layout)
          }
          instance.warpDivToolbarOnMouseEnter($subContent)
        }
      }

      if ($dragTarget.hasClass(instance.controlContainer)) {
        // 当前为controller
        // $target.append($contentClone[0])
        // handleControlTarget(dataEle)
        // let controlData = {
        //   key: $dragElement.attr(dndHandler.attr.data.meta)
        // }
        // instance.emit(instance.eventName.onBindControl, controlData)
      } else {
        // 移动到控件上时，生成overlay-toolbar
        // let dataEle = $contentClone[0]
        // handleLayoutTarget(dataEle)
      }
    }

    function onDragForMove (dragObject, dragTarget, lastPlaceholder) {
      let $dragElement = $(dragObject.target)
      let $dragTarget = $(dragTarget)
      if (dragObject.isTableLayout) {
        // onTrDragForMove(dragObject, dragTarget, lastPlaceholder)
        // dragObject是tr时
        let $content = $dragElement.find(options.selector.contentTr).eq(0)
        if ($content.size() === 0) {
          // dragObject是table时
          $content = $dragElement.children(options.selector.content)
        }
        move($dragTarget, $dragElement, $content, lastPlaceholder)
      } else {
        // onDivDragForMove(dragObject, dragTarget, lastPlaceholder)
        let $content = $dragElement.children(options.selector.content)
        move($dragTarget, $dragElement, $content, lastPlaceholder)
      }
    }

    function move ($dragTarget, $dragElement, $content, lastPlaceholder) {
      if ($content.size() === 0) {
        console.error('拖动的$content.size()为0，取消拖动操作！$dragElement>', $dragElement)
      } else {
        let allowCheck = isDropAllow($dragTarget, $content)
        if (allowCheck.value) {
          if (lastPlaceholder.index === 0) {
            $dragTarget.prepend($content)
          } else {
            $dragTarget.children().eq(lastPlaceholder.index - 1).after($content)
          }
          $dragElement.remove()
        } else {
          console.log(allowCheck.msg)
        }
      }
    }

    /**
     * 在即将删除时，再做一次检查，避免鼠标操作太快引起的状态异常
     */
    function isDropAllow ($dragTarget, $content) {
      let typeAry = $dragTarget.attr(options.attr.data.allowTypes).split(',')
      let currentType = utils.eval($content.attr(options.attr.data.meta)).type
      for (var i in typeAry) {
        if (currentType === typeAry[i]) {
          return {value: true, msg: ''}
        }
      }
      return {
        value: false,
        msg: '!!allowTypes:' + $dragTarget.attr(options.attr.data.allowTypes) + ',current:' + currentType + '。append前再检查，不符，取消拖放操作。'
      }
    }

    function ondragover (ev, pos) {
      // console.log('pos>', pos)
    }

    // function handleLayoutTarget (dataEle) {
    //
    // }

    // function handleControlTarget (dataEle) {
    //   let $control = $target.children().last()
    //   $control.popover({
    //     template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    //     trigger: 'focus',
    //     html: 'true',
    //     placement: 'top',
    //     content: '<div style="font-size: 0.8em"><button>设置</button>&nbsp;<button>删除</button></div>'
    //   })
    //   // mouseover时，才展示工具条，点击工具条中的按钮，则关闭
    //   $control.mouseenter(function () {
    //     // 先清除同下存放目标区域内的其它control popover
    //     $target.find('.popover').popover('hide')
    //     $control.popover('show')
    //     $target.find('.popover button').click(function () {
    //       if ($(this).text() === '设置') {
    //         instance.emit(instance.eventName.onSetting, {value: 'abc'})
    //       } else {
    //         console.log('delete...')
    //         $control.popover('hide')
    //         $control.remove()
    //       }
    //     })
    //     $(document).click(function () {
    //       $control.popover('hide')
    //     })
    //   })
    //   $target.mouseleave(function () {
    //     $control.popover('hide')
    //   })
    // }
  }

  warpToolbarOnMouseEnter ($appendedContent) {
    let isTableLayout = $appendedContent.get(0).localName === 'tr'
    // console.log('$appendedContent>', $appendedContent)
    if (isTableLayout) {
      return instance.warpTrToolbarOnMouseEnter($appendedContent)
    } else {
      return instance.warpDivToolbarOnMouseEnter($appendedContent)
    }
  }

  warpTrToolbarOnMouseEnter ($appendedContent) {
    let dataId = utils.uuid(8)
    // console.log('$appendedContent>', $appendedContent)
    $appendedContent.mouseenter(function () {
      if ($appendedContent.prev().hasClass(options.selector.toolbar.substring(1))) {
        return
      }
      $appendedContent.wrap($(options.template.toolbarWrapTr).attr(options.attr.data.id, dataId))
      // console.log('wrap item  > ', $appendedContent)
      $appendedContent.before(options.template.toolbarTr)

      // <tr><td><table><tbody>$appendedContent</tbody></table></td></tr>
      let $wrapEl = $appendedContent.parent().parent().parent().parent()
      // console.log('$wrapEl>', $wrapEl.get(0))
      $appendedContent.prev().find(options.selector.action).click(function () {
        let action = utils.trim($(this).text())
        if (action === '设置') {
          instance.emit(instance.eventName.onSetting, {
            value: 'abc',
            meta: utils.eval($appendedContent.attr(options.attr.data.meta))
          })
        } else if (action === '删除') {
          if ($wrapEl.parent().children().size() === 1) {
            alert('表格必须至少保留一行！')
          } else {
            $wrapEl.remove()
          }
        } else if (action === '复制') {
          console.log('复制>', $wrapEl)
        }
      })
      $wrapEl.mouseleave(function () {
        // 删除toolbar
        $appendedContent.prev().remove()
        // 去除外壳td-tr-tbody-table
        $appendedContent.unwrap().unwrap().unwrap().unwrap()
      })
      dndHandler.bindDragObject($wrapEl, 'tr')
    })
    return $appendedContent
  }

  /**
   * 格式 1 基于div
   * <div class="dnd-item">
   *   <span class="toolbar">
   *     <button class="btn btn-xs">设置</button>
   *   </span>
   *   <div class="content" data-id="xxxxxxxx" draggable="true">
   *     xxx
   *   </div>
   * </div>
   * @param $appendedContent 已经加载到dragTarget中的content
   * @returns {*}
   */
  warpDivToolbarOnMouseEnter ($appendedContent) {
    let dataId = utils.uuid(8)
    $appendedContent.mouseenter(function () {
      if ($appendedContent.prev().hasClass(options.selector.toolbar.substring(1))) {
        return
      }
      $appendedContent.wrap($(options.template.toolbarWrap).attr(options.attr.data.id, dataId))
      // console.log('wrap item  > ', $appendedContent)
      $appendedContent.before(options.template.toolbar)

      let $wrapEl = $appendedContent.parent()
      $appendedContent.prev().find(options.selector.action).click(function () {
        let action = utils.trim($(this).text())
        instance.doAction(action, $wrapEl, $appendedContent)
      })
      $wrapEl.mouseleave(function () {
        // 删除toolbar
        $appendedContent.prev().remove()
        // 去除外壳dnd-item
        $appendedContent.unwrap()
      })
      dndHandler.bindDragObject($wrapEl, 'layout')
    })
    return $appendedContent
  }

  doAction (action, $wrapEl, $appendedContent) {
    if (action === '设置') {
      let meta = utils.eval($appendedContent.attr(options.attr.data.meta))
      let cfg = {
        id: $appendedContent.attr(options.attr.data.id),
        meta: meta
      }
      instance.emit(instance.eventName.onSetting, instance.getHandler(meta.type).doSetting($appendedContent, cfg))
    } else if (action === '删除') {
      $wrapEl.remove()
    } else if (action === '复制') {
      console.log('复制>', $wrapEl)
    }
  }

  emit (event, data) {
    let events = this.eventBus[event]
    if (events) {
      for (var i in events) {
        events[i](data)
      }
    }
  }

  onBindControl (callback) {
    this.on(instance.eventName.onBindControl, callback)
  }

  onSetting (callback) {
    this.on(instance.eventName.onSetting, callback)
  }

  on (event, callback) {
    if (!this.eventBus[event]) {
      this.eventBus[event] = []
    }
    this.eventBus[event].push(callback)
  }

  hasAttr ($target, attr) {
    return typeof $target.attr(attr) !== 'undefined'
  }

  preview () {
  }

  load (html) {
    // let html = '<div class="portlet box green dnd-content" data-meta="{type:\'layout\'}" data-id="zsgxBWWT"><div class="portlet-title"><div class="caption"><i class="fa fa-gift"></i>Form Sample\n' +
    //   '                </div> <div class="tools"><a href="javascript:;" class="collapse" data-original-title="" title=""></a> <a href="#portlet-config" data-toggle="modal" class="config" data-original-title="" title=""></a> <a href="javascript:;" class="reload" data-original-title="" title=""></a> <a href="javascript:;" class="remove" data-original-title="" title=""></a></div></div> <div class="portlet-body form"><form action="#" class="form-horizontal"><div data-dnd-allow="table,layout,control" class="form-body dnd-target" data-id="rJTO9Hld4ftfIYHW"><div data-meta="{type:\'layout\'}" class="row xg-mix-no-mp dnd-content " data-id="GDhmmsxy"><div class="col-md-6"><div class="form-group"><label class="control-label col-md-4">First Name</label> <div class="col-md-8"><div data-dnd-allow="control,field" class="dnd-target" data-id="dVGTEgQr9GHS7AFg"></div></div></div></div> <div class="col-md-6"><div class="form-group has-error"><label class="control-label col-md-4">Last Name</label> <div class="col-md-8"><select name="foo" class="form-control input-sm"><option value="1">Option 1</option> <option value="1">Option 2</option> <option value="1">Option 3</option></select> <span class="help-block"> This field has error. </span></div></div></div></div><div data-v-715627ce="" class="row xg-mix-no-mp dnd-content" data-meta="{type:\'layout\'}" data-id="RCqhMAFx"><div data-v-715627ce="" class="col-md-5 column"><div data-v-715627ce="" data-dnd-allow="layout,table,control" class="dnd-target" data-id="w9sXjNfsoaA8cidv"></div></div> <div data-v-715627ce="" class="col-md-7 column"><div data-v-715627ce="" data-dnd-allow="layout,table,control" class="dnd-target" data-id="pmHTqBQ0xYjE9nQR"></div></div></div></div> <div class="form-actions"><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-offset-3 col-md-9"><button type="submit" class="btn green">Submit</button> <button type="button" class="btn default">Cancel</button></div></div></div> <div class="col-md-6"></div></div></div></form></div></div>'
    $(options.selector.designer).find(options.selector.stage).find(options.selector.target).html(html)
    //
    // let html = render()
    // console.log('render result>', html)
  }

  render () {
    let $stage = $(options.selector.designer).find(options.selector.stage)
    let pageHtml = $stage.find(options.selector.target).html()

    function removeAttr (htmlString) {
      // remove ' data-v-xxx="" ' that created by vue
      return htmlString.replace(/\sdata-v-\w{8}=""\s+/g, ' ')
    }

    return removeAttr(pageHtml)
  }

  html () {
    let $stage = $(options.selector.designer).find(options.selector.stage)
    return $stage.find(options.selector.target).html()
  }
}

class LayoutHandler {
  constructor () {
    this.type = 'layout'
  }

  getType () {
    return this.type
  }

  doSetting ($appendedContent, cfg) {
    cfg.value = 'layout'
    return cfg
  }

  onDrag () {

  }
}

class FieldHandler {
  constructor () {
    this.type = 'field'
  }

  getType () {
    return this.type
  }

  doSetting ($appendedContent, cfg) {
    console.log('xxx', $appendedContent.find('.control-label'))
    cfg.value = $appendedContent.find('.control-label').text().replace('*', '')
    cfg.content = $appendedContent[0]
    return cfg
  }

  onDrag () {

  }
}

class ControlHandler {
  constructor () {
    this.type = 'control'
  }

  getType () {
    return this.type
  }

  doSetting ($appendedContent, cfg) {
    cfg.value = 'control'
    return cfg
  }

  onDrag () {
  }
}

let instance = new Designer()
instance.registerHandler(new LayoutHandler())
instance.registerHandler(new ControlHandler())
instance.registerHandler(new FieldHandler())
window.designer = instance
export default instance
