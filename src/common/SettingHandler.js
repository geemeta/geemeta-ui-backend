// import opt from './settingOptions'

import SettingInfo from './SettingInfo'

class SettingHandler {
  constructor () {
    this.localConst = {}
    this.selector = {}
    this.attr = {
      data: {},
      value: {}
    }
    this.handlers = {}
  }

  // registerSelector (uiType, path, selector) {
  //   let ary = (uiType + '.' + path).split('.')
  //   // var root = this.selector[uiType] || (this.selector[uiType] = {})
  //   let key = 'this.selector'
  //   for (var i in ary) {
  //     key = key + '[\'' + ary[i] + '\']'
  //     console.log(ary, key)
  //     var obj = this.eval(key)
  //     if (obj === undefined) {
  //       this.eval(key + '={}')
  //     }
  //   }
  //   this.eval(key + '=\'' + selector + '\'')
  //   console.log('this.selector>', this.selector)
  // }

  // TODO extSettingHandler
  register (uiTypes, baseSetting, extSettingHandler) {
    let uiTypeAry = uiTypes.split(',')
    for (let i in uiTypeAry) {
      let uiType = uiTypeAry[i]
      if (!this.handlers[uiType]) {
        this.handlers[uiType] = new BaseConfigurator(baseSetting)
      } else {
        // 有一个uiType已注册，说明uiTypes下的每一个都已注册，直接返回
        return this
      }
    }
    return this
  }

  getHandler (uiType) {
    return this.handlers[uiType]
  }
}

class BaseConfigurator {
  constructor (selector) {
    this.selector = selector
    // this.selector = new SettingInfo().cfg
    // $.extend(this.selector, selector, true)
  }

  setConfig (cfg, $content) {
    console.log('setConfig> $content> ', $content)
    console.log('setConfig> cfg', cfg)
    console.log('setConfig> this.selector', $content.findIncludeSelf(this.selector.data.name))
    let data = this.selector.data
    if (data) {
      data.name ? cfg.data.name = $content.findIncludeSelf(data.name).text() : null
      data.defaultValue ? cfg.data.defaultValue = $content.findIncludeSelf(data.defaultValue).val() : null
      data.placeholder ? cfg.data.placeholder = $content.findIncludeSelf(data.placeholder).attr('placeholder') : null
    }
    let facade = this.selector.facade
    if (facade) {
      facade.tip ? cfg.facade.tip = $content.findIncludeSelf(facade.tip).attr('title') : null
      facade.icon ? cfg.facade.icon = $content.findIncludeSelf(facade.icon).attr('class') : null
      facade.class ? cfg.facade.class = $content.findIncludeSelf(facade.class).attr('class') : null
      facade.style ? cfg.facade.style = $content.findIncludeSelf(facade.style).attr('style') : null
    }
    console.log('addBack>', $content.findIncludeSelf(facade.class).attr('class'))
    let auth = this.selector.auth
    if (auth) {
      auth.required ? cfg.auth.required = $content.findIncludeSelf(auth.required).hasClass('required') : null
    }
  }

  updateView (propPath) {
    propPath.split('.')
  }
}

class LayoutSetting {
  setConfig (cfg, $content) {
    // cfg.data.name = $content.findIncludeSelf(opt.selector.label).text()
    // cfg.data.defaultValue = $content.findIncludeSelf(opt.selector.control).val()
    // cfg.data.placeholder = $content.findIncludeSelf(opt.selector.control).attr('placeholder')
    // cfg.facade.tip = $content.findIncludeSelf(opt.selector.label).attr('title')
    // cfg.auth.required = $content.findIncludeSelf(opt.selector.required).hasClass('required')
  }
}

class FieldSetting {
  constructor (selector) {
    this.baseSetting = new BaseConfigurator(selector)
  }

  setConfig (cfg, $content) {
    this.baseSetting.setConfig(cfg, $content)
    // cfg.data.name = $content.findIncludeSelf(opt.selector.label).text()
    // cfg.data.defaultValue = $content.findIncludeSelf(opt.selector.control).val()
    // cfg.data.placeholder = $content.findIncludeSelf(opt.selector.control).attr('placeholder')
    // cfg.facade.tip = $content.findIncludeSelf(opt.selector.label).attr('title')
    // cfg.auth.required = $content.findIncludeSelf(opt.selector.required).hasClass('required')
  }
}

// class Form {
//   constructor () {
//     this.fields = []
//   }
// }
//
// class Field {
//   constructor () {
//     this.name
//     this.code
//     this.class
//     this.style
//     this.id
//     this.tip
//     this.auth
//   }
//   display () {
//   }
// }

let instance = new SettingHandler()

instance.register('form-section', {
  data: {
    name: '.form-section'
  }
})

instance.register('layout', new SettingInfo().cfg, new LayoutSetting())

instance.register('field,singleText,multiText,email,phone,date,time', {
  data: {
    name: '.control-label>label',
    defaultValue: '.form-control',
    placeholder: '.form-control'
  },
  facade: {tip: '.control-label>label'},
  auth: {required: '.control-label>i'}
}, new FieldSetting())
export default instance
