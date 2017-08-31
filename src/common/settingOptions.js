class SettingOptions {
  constructor () {
    this.localConst = {}
    this.selector = {
      label: '.control-label>label',
      required: '.control-label>i',
      control: '.form-control'
    }
    this.attr = {
      data: {},
      value: {}
    }
    this.const = {}
    this.template = {
      form: {
        inlineHelper: '<span class="help-block"></span>'
      }
    }
  }
}

let instance = new SettingOptions()
export default instance
