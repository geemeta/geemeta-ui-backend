// import staticCfgManager from '../staticCfgManager'

class DesignerCfg {
  constructor () {
    this.pageConfigs = [
      {
        code: 'platform_dev_project_list_select',
        content: {
          win: {
            title: '选择需打开的项目'
          },
          title: '项目列表',
          component: 'grid',
          entity: 'platform_dev_project',
          query: {
            hide: true,
            tree: null,
            filter: null,
            mix: {
              fields: [
                {field: 'name', title: '名称', cop: 'contain', type: 'string'}
              ]
            }
          },
          info: '',
          selected: 'footer',
          list: {
            select: {field: 'id', title: '', type: 'checkbox'},
            action: {},
            columns: [
              {field: 'id', title: '序号', visible: false},
              {field: 'name', title: '名称', type: 'string'}
            ],
            p: '1,10',
            order: 'name|+'
          },
          stat: '',
          // 状态
          state: {}
        }
      }
    ]
  }
}

let instance = new DesignerCfg()
// staticCfgManager.register(instance)
export default instance
