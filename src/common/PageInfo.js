class PageInfo {
  constructor (options) {
    let opts = options
    this.id = opts.id || ''
    this.extendId = opts.extendId
    this.template = opts.template || ''
    this.before = opts.before || {data: []}
    this.evnet = opts.evnet || []
  }
}

export default PageInfo
