class PlatformCfg {
  constructor () {
    this.menu = [
      {
        title: '项目管理',
        class: 'fa fa-connectdevelop',
        items: [
          {title: '项目信息', href: '/#/m/project/info'},
          {title: '任务管理', href: '/#/m/project/task'},
          {title: '项目报告', href: '/#/m/project/report'}
        ]
      },
      {
        title: '元数据管理',
        class: 'fa fa-connectdevelop',
        items: [
          {title: '项目信息', href: '/#/m/project/info'},
          {title: '任务管理', href: '/#/m/project/task'},
          {title: '项目报告', href: '/#/m/project/report'}
        ]
      },
      {
        title: '开发配置',
        class: 'fa fa-connectdevelop',
        items: [
          {title: 'UI设计', href: '/#/m/designer'},
          {title: 'UI预览', href: '/#/m/preview'},
          {title: '元数据管理', href: '/#/m/meta'}
        ]
      },
      {
        title: '系统管理',
        class: 'icon-settings',
        items: [
          {title: '个人信息', href: '/#/m/profile/account'},
          {title: '用户信息', href: '/#/m/page/sys_user/sys_user_list?em=sys_user'},
          {title: '角色信息', href: '/#/m/page/sys_role/sys_role_list?em=sys_role'}
        ]
      },
      {
        title: '开发资源',
        class: 'icon-settings',
        items: [
          {title: 'METRONIC4.7.5', href: '/static/admin_1/index.html', target: '_blank'},
          {title: 'Bootstrap', href: 'http://getbootstrap.com', target: '_blank'},
          {title: 'fontawesome', href: 'http://fontawesome.io/icons', target: '_blank'}
        ]
      }
    ]
  }
}

let instance = new PlatformCfg()
export default instance
