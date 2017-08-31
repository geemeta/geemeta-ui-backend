export default class XGViewDesigner {
  cfg () {
    return {
      name: 'xg-view-designer',
      nav: {title: '页<br>面<br>设<br>计<br>'},
      menu: {
        data: {
          text: '文件',
          items: [
            {
              text: '新建文件',
              items: [
              {text: '表单'},
              {text: '工作流表单'},
              {text: '报表'}
              ]
            }
          ]
        },
        click: {
          '表单': function () {
            window.open('http://www.itechgee.org/doc')
          },
          '工作流表单': {
            win: {
              width: '600',
              height: '400',
              title: '反馈'
            },
            url: './xg-helper/couple-back',
            param: {}
          },
          '报表': {
            win: {
              width: '600',
              height: '400',
              title: '关于',
              max: false
            },
            url: './xg-helper/about',
            param: {}
          }
        }
      }
    }
  }
}
