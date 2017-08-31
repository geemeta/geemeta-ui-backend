class FieldSetting {
  constructor () {
    this.localConst = {}
    this.selector = {}
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

let instance = new FieldSetting()
export default instance
