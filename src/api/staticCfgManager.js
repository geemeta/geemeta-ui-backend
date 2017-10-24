class StaticCfgManager {
  constructor () {
    this.pageConfigMap = {}
  }

  get (code) {
    return this.pageConfigMap[code]
  }

  register (cfgInstance) {
    if (!cfgInstance.pageConfigs) {
      console.error('cfgInstance.pageConfigs应是个数组，注册失败。cfgInstance:', cfgInstance)
      return
    }
    for (var i in cfgInstance.pageConfigs) {
      let cfg = cfgInstance.pageConfigs[i]
      if (this.pageConfigMap[cfg.code]) {
        console.error('存在同名的pageConfig code：', cfg.code)
      } else {
        this.pageConfigMap[cfg.code] = cfg
      }
    }
  }
}

let instance = new StaticCfgManager()
instance.register(require('./platform/designerCfg').default)
instance.register(require('./platform/securityCfg').default)
export default instance
