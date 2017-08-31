import utils from './utils'
import options from './dndOptions'

/**
 * @author itechgee
 */
class DndHandler {
  constructor () {
    this.currentDragObject = null
    this.currentDragSortObject = null
    this.$lastTargetObject = null  // 拖动进入到子target区域时，需记录上一targetObejct
  }

  /**
   * @param selector 拖放对象或者选择器
   * @param type 指定当前拖放对象的类型，默认为simple
   */
  bindDragObjects (selector, type) {
    var dragObjects = selector
    // console.log('>>', $.type(selector) === 'string')
    if ($.type(selector) === 'string') {
      dragObjects = $(selector)
    }
    dragObjects.each(function () {
      instance.bindDragObject(this, type)
    })
    dragObjects.mouseover(function (e) {
      $(e.target).addClass('active')
    })
    dragObjects.mouseout(function (e) {
      $(e.target).removeClass('active')
    })
  }

  /**
   * @param srcObject 拖放对象
   * @param type 指定当前拖放对象的类型，默认为simple
   */
  bindDragObject (dragObject, type) {
    if (dragObject instanceof jQuery) {
      dragObject = dragObject[0]
    }

    let $dragObject = $(dragObject)
    $dragObject.attr('draggable', true)
    // $dragObject.addClass('dragObject')

    dragObject.onselectstart = function () {
      return false
    }
    dragObject.ondragstart = function (ev) {
      // console.log('ev.target>', ev.target.outerHTML)
      let isTableLayout = ev.target.localName === 'tr'
      // isTableLayout:tr-td-table-tbody-tr
      let $content = isTableLayout ? $(ev.target).find(options.selector.contentTr).eq(0) : $(ev.target).children(options.selector.content)
      let meta = {
        type: 'null'
      }
      if ($content.size() === 0) {
        console.warn('拖动内容$content.size()为0，dragObject.ondragstart>ev.target>', ev.target.outerHTML)
        // ev.preventDefault()
        // ev.stopPropagation()
        // return false
      } else {
        meta = utils.eval($content[0].attributes[options.attr.data.meta].value)
      }
      instance.currentDragObject = {
        meta: meta,
        type: meta.type,
        target: ev.target,
        value: $content,
        id: $content.attr(options.attr.data.id),
        isNew: !$content.attr(options.attr.data.id),
        isTableLayout: meta.type.toLowerCase() === 'table' || meta.type.toLowerCase() === 'tr'
      }
      hideContent(dragObject)
      return true
    }
    dragObject.ondragend = function (ev) {
      // console.log('ondragend....')
      // 取消拖放时
      showContent()
      instance.currentDragObject = null
      return false
    }

    function hideContent () {
      if (!instance.currentDragObject.isNew) {
        $(instance.currentDragObject.target).find(options.selector.content).hide()
      }
    }

    function showContent () {
      if (instance.currentDragObject && !instance.currentDragObject.isNew) {
        $(instance.currentDragObject.target).find(options.selector.content).show()
      }
    }
  }

  bindDragTargets (selector, allowTypes, dropCallBack, dragoverCallBack) {
    let targetObjects = selector
    // console.log('>>', $.type(selector) === 'string')
    if ($.type(selector) === 'string') {
      targetObjects = $(selector)
    }

    for (let i = 0; i < targetObjects.length; i += 1) {
      this.bindDragTarget(targetObjects[i], allowTypes, dropCallBack, dragoverCallBack)
    }
  }

  /**
   * @param targetObject 拖放目标对象，dom element或jQuery object
   * @param allowTypes 可以放置的拖放对象类型，默认为default。多个类型用“,”分隔
   * @param dropCallBack 拖放成功后的回调函数，参数@dragObject,@isAllow
   */
  bindDragTarget (targetObject, allowTypes, dropCallBack, dragoverCallBack) {
    if (targetObject instanceof jQuery) {
      targetObject = targetObject[0]
    }
    let $targetObject = $(targetObject)
    // if ($targetObject.attr(options.attr.data.bind)) {
    //   console.warn('target has been bind, and the data-id is ', $targetObject.attr(options.attr.data.id))
    //   return
    // }
    $targetObject.attr(options.attr.data.id, utils.uuid(16))
    // $targetObject.attr(options.attr.data.bind, 'true')
    var lastPlaceholder = {
      index: 0
    }
    targetObject.ondragover = function (ev) {
      if (instance.$lastTargetObject && instance.$lastTargetObject.attr(options.attr.data.id) !== $targetObject.attr(options.attr.data.id)) {
        // 清理上一targetObject的状态
        // console.error('last:current > ' + instance.$lastTargetObject.attr(options.attr.data.id) + ':', $targetObject.attr(options.attr.data.id))
        // instance.$lastTargetObject.find(options.selector.placeholder).remove()
        instance.$lastTargetObject = $targetObject
      }
      let top = this.getBoundingClientRect().top + this.offsetHeight / 2
      var pos = 'top'
      if (ev.pageY > top) {
        pos = 'bottom'
      } else {
        pos = 'top'
      }
      if (isAllowDropOn()) {
        addPlaceHolder(ev.target, pos)
      }
      // console.log(ev.pageY)
      if ($.isFunction(dragoverCallBack)) { dragoverCallBack(ev, pos) }
      ev.preventDefault()
      ev.stopPropagation()
      return false
    }
    targetObject.ondragleave = function (ev) {
      if (isOut(ev.pageX, ev.pageY, get$Stage()[0])) {
        removeAllPlaceholder()
        // 重置
        lastPlaceholder = {
          index: options.const.pos.onParentUp
        }
      } else {
        // console.log('not out')
      }
      // console.log('set lastTarget data-id >', $targetObject.attr(options.attr.data.id))
      ev.preventDefault()
      instance.$lastTargetObject = $targetObject
      return true
    }
    targetObject.ondragenter = function (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      return false
    }
    targetObject.ondrop = function (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      if (instance.currentDragObject) {
        let isAllow = isAllowDropOn()
        // 日志
        if (!isAllow) {
          console.log('!!allowTypes:' + allowTypes + ',current:', instance.currentDragObject.type)
        } else {
          if (instance.currentDragObject.isNew) {
            console.log('drag and new at ', lastPlaceholder.index)
          } else {
            console.log('drag and move [' + instance.currentDragObject.id + '] to ', lastPlaceholder.index)
          }
        }
        // 拖动时，hide内容，在施放到目标时才show
        showContent()
        console.log('ev>', ev)
        dropCallBack(isAllow, instance.currentDragObject, this, lastPlaceholder, ev)
        // 拖动后，恢复相关状态
        removeAllPlaceholder()
      }
      return false
    }

    /**
     * ！！注意
     * targetObject是容纳拖放对像的目标对像，该对像上有options.selector.target类
     * currentDragTarget、lastDragTarget 是实际onDrag时，在最顶层的对象，该对象在targetObject内
     * @param lastDragTarget
     * @param currentDragTarget
     * @param pos
     * @returns {number} 添加后的PlaceHolder，在targetObject的子元素中排位
     */
    function addPlaceHolder (currentDragTarget, pos) {
      // 是否为表格部局
      let isTableLayout = $targetObject.get(0).localName === 'tbody'
      var palceholderHtml = options.template.placeholderHtml
      if (isTableLayout) {
        palceholderHtml = options.template.placeholderHtmlTr
      }

      // if ($targetObject.get(0).localName === 'tbody') {
      //   palceholderHtml = options.template.placeholderHtmlTr
      // }
      // currentDragTarget.mousePos 不能反应最终placeHolder应加入的位置，需通过indexOffset来修正
      var currentPos = options.const.pos.onParentUp
      if ($targetObject.children(options.selector.content).length === 0) {
        // 1 没子元素时
        if (pos === 'top') {
          currentPos = options.const.pos.onParentUp
        } else {
          currentPos = options.const.pos.onParentDown
        }
        if ($targetObject.children(options.selector.placeholder).length === 0) {
          $targetObject.append(palceholderHtml)
        }
        lastPlaceholder.index = 0
      } else {
        // 2 有子元素时
        let $currentDragTarget = $(currentDragTarget)
        var isOnPlaceholder = $currentDragTarget.hasClass(options.selector.placeholder.substring(1))
        if (isTableLayout) {
          isOnPlaceholder = $currentDragTarget.parent().hasClass(options.selector.placeholder.substring(1))
        }
        // var isFromPlaceHolder = lastDragTarget.object && ($(lastDragTarget.object).find(options.selector.placeholder).length > 0)
        if (isOnPlaceholder) {
          // console.log('isOnPlaceholder ...' + isOnPlaceholder)
          currentPos = options.const.pos.onPlaceholder
        } else {
          var isOnParentContainer = $currentDragTarget.hasClass(options.selector.target.substring(1))
          if (isOnParentContainer) {
            // 当前是在父容器上
            if (pos === 'top') {
              currentPos = options.const.pos.onParentUp
            } else {
              currentPos = options.const.pos.onParentDown
            }
          } else {
            // 当前是拖拉的项上
            let $contents = $targetObject.children(options.selector.content)
            let contentId = getContentDataId($currentDragTarget)
            for (var i = 0; i < $contents.size(); i++) {
              // console.log('id > ', $contents.eq(i).attr(options.attr.data.id))
              if (contentId === $contents.eq(i).attr(options.attr.data.id)) {
                currentPos = i
                break
              }
            }
          }
          // 开始append placeholder
          // console.log('currentPos>' + currentPos + ' ', 'lastPlaceholder.index>' + lastPlaceholder.index)
          if (isMoveFromOtherObject()) {
            removeCurrentTargetPlaceholder()
            switch (currentPos) {
              case options.const.pos.onPlaceholder:
                break
              case options.const.pos.onParentUp:
                lastPlaceholder.index = 0
                $targetObject.prepend(palceholderHtml)
                break
              case options.const.pos.onParentDown:
                lastPlaceholder.index = $targetObject.children().size()
                $targetObject.append(palceholderHtml)
                break
              default:
                lastPlaceholder.index = currentPos + 1
                $targetObject.children().eq(currentPos).after(palceholderHtml)
                break
            }
          }
        }
      }
      // function addDivPlaceHolder (currentDragTarget, pos) {
      //
      // }
      //
      // function addTrPlaceHolder (currentDragTarget, pos) {
      //
      // }

      function isMoveFromOtherObject () {
        // console.log('currentPos>' + currentPos + ' lastPos>' + lastPlaceholder.pos, 'index>' + lastPlaceholder.index)
        return lastPlaceholder.pos !== currentPos
      }

      /**
       * 当拖动到.toolbar等元素上时，返回的id是-1,即无效的id
       * @param $el
       * @returns content的id，或无效的id(-1)
       */
      function getContentDataId ($el) {
        if ($el.size() === 0) {
          console.log('size is zero.')
          return '-1'
        }
        if ($el.hasClass(options.selector.content.substring(1))) {
          return $el.attr(options.attr.data.id)
        }
        return getContentDataId($el.parent())
      }

      lastPlaceholder.pos = currentPos
      return lastPlaceholder
    }

    function removeCurrentTargetPlaceholder () {
      console.log('ondragleave PlaceHolder ... remove')
      $targetObject.children(options.selector.placeholder).remove()
    }

    function removeAllPlaceholder () {
      get$Stage().find(options.selector.target + ' ' + options.selector.placeholder).remove()
    }

    function get$Stage () {
      if (!instance.$stage) {
        instance.$stage = $(options.selector.designer + ' ' + options.selector.stage)
      }
      return instance.$stage
    }

    function isOut (mouseX, mouseY, el) {
      // offter=6px 拖动到上方stage外release时，未检测到已移出的问题
      let offset = 6
      let rect = el.getBoundingClientRect()
      // console.log(mouseX, mouseY)
      // console.log(rect.left, rect.top)
      if (mouseX < rect.left || mouseX > rect.left + el.offsetWidth) {
        return true
      } else if (mouseY - offset < rect.top || mouseY > rect.top + el.offsetHeight) {
        return true
      }
      return false
    }

    function showContent () {
      if (!instance.currentDragObject.isNew) {
        $(instance.currentDragObject.target).find(options.selector.content).show()
      }
    }

    function isAllowDropOn () {
      if (!instance.currentDragObject) {
        return false
      }
      let types = allowTypes || 'default'
      // console.log('instance.currentDragObject.type >', instance.currentDragObject.type)
      // console.log('                     allowTypes >', allowTypes)
      if (instance.currentDragObject.type && types) {
        let typeAry = types.split(',')
        for (var i in typeAry) {
          if (typeAry[i] === instance.currentDragObject.type) {
            return true
          }
        }
      } else if (instance.currentDragObject.type === '*') {
        return true
      }
      return false
    }
  }

  // bindDragSortObject (sortObject, groupSelector, dropCallBack) {
  //   // console.log('group:' + groupSelector + ',bindSortObject:', sortObject)
  //   let $sortObject = sortObject instanceof jQuery ? sortObject : $(sortObject)
  //   sortObject = $sortObject[0]
  //   $sortObject.attr('draggable', true)
  //   $sortObject.addClass('sortObject')
  //   let targetObject = sortObject
  //
  //   sortObject.onselectstart = function () {
  //     return false
  //   }
  //   sortObject.ondragstart = function (ev) {
  //     instance.currentDragSortObject = {
  //       groupSelector: groupSelector,
  //       target: ev.target
  //     }
  //     return true
  //   }
  //   sortObject.ondragend = function (ev) {
  //     instance.currentDragSortObject = null
  //     return false
  //   }
  //
  //   // target
  //   targetObject.ondragover = function (ev) {
  //     ev.preventDefault()
  //     return true
  //   }
  //   targetObject.ondragenter = function (ev) {
  //     return true
  //   }
  //   targetObject.ondrop = function (ev) {
  //     ev.preventDefault()
  //     ev.stopPropagation()
  //     let sortTarget = this
  //     let isAllow = false
  //     // console.log('on drop ev>', ev)
  //     // console.log('instance.currentDragSortObject>', instance.currentDragSortObject)
  //     if (instance.currentDragSortObject) {
  //       if (instance.currentDragSortObject.groupSelector && instance.currentDragSortObject.groupSelector === groupSelector) {
  //         isAllow = true
  //       } else if (instance.currentDragObject.type === '*') {
  //         isAllow = true
  //       }
  //       if ($.isFunction(dropCallBack)) { dropCallBack(isAllow, instance.currentDragSortObject, sortTarget) }
  //     }
  //     return false
  //   }
  // }
}

let instance = new DndHandler()
// console.log('let instance = new DndHandler() and export instance')
export default instance

