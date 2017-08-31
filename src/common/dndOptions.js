class DndOptions {
  constructor () {
    this.localConst = {
      toolbar: '<a href="javascript:;" class="btn btn-xs btn-circle blue">复制&nbsp;<i class="fa fa-clone"></i></a><a href="javascript:;" class="btn btn-xs btn-circle blue">设置&nbsp;<i class="fa fa-edit"></i></a><a href="javascript:;" class="btn btn-xs btn-circle red">删除&nbsp;<i class="fa fa-remove"></i></a>'
    }
    this.selector = {
      designer: '.xg-designer',
      stage: '.dnd-stage',
      target: '.dnd-target',
      // toolbox: '.dnd-toolbox',
      item: '.dnd-item',
      toolbar: '.dnd-toolbar',
      content: '.dnd-content',
      contentTr: 'td>table>tbody>tr.dnd-content',
      action: 'a,button',
      placeholder: '.dnd-placeholder'
    }
    this.attr = {
      data: {
        id: 'data-id',
        meta: 'data-meta',
        bind: '',
        allowTypes: 'data-dnd-allow',
        sortable: 'data-dnd-sortable'
      },
      value: {
        meta: {
          tr: '{type:\'tr\'}',
          layout: '{type:\'layout\'}'
        }
      }
    }
    this.const = {
      pos: {
        onPlaceholder: -3, // placeHolder上，0和正整数表示子元素的index，保留用
        onParentUp: -1, // 父容器上方
        onParentDown: -2 // 父容器下方
      }
    }

    this.template = {
      placeholderHtml: '<div class="' + this.selector.placeholder.substring(1) + '">拖放到此区域</div>',
      toolbarWrap: '<div class="' + this.selector.item.substring(1) + '"/>',
      toolbar: '<span class="' + this.selector.toolbar.substring(1) + '">' + this.localConst.toolbar + '</span>',
      placeholderHtmlTr: '<tr class="' + this.selector.placeholder.substring(1) + '"><td colspan="24">拖放到此表格</td></tr>',
      toolbarWrapTr: '<tr class="' + this.selector.item.substring(1) + '"><td colspan="24" style="padding-right: 0;"><table class="xg-form"><tbody></tbody></table></td></tr>',
      toolbarTr: '<tr class="' + this.selector.toolbar.substring(1) + '"><td colspan="24"><span>' + this.localConst.toolbar + '</span></td></tr>'
    }

    // this.eventBus = {}
    // this.eventName = {onSetting: 'onSetting', onBindControl: 'onBindControl'}
    // this.handlers = {}
    // this.controlContainer = 'field'
    // this.controlOverlay = '.dnd-control.mt-element-overlay'
    // this.overlayToolbarTemplate = $(this.controlOverlay)
  }
}

let instance = new DndOptions()
export default instance
