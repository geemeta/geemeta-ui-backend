class EntityNames {
  constructor () {
    this.platform = {
      dev: {
        project: 'platform_dev_project',
        pageConfig: 'platform_page_config'
      },
      common: {
        treeNode: 'platform_tree_node'
      }
    }
  }
}

let instance = new EntityNames()
export default instance
