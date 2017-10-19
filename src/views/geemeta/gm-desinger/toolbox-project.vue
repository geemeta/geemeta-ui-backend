<template>
  <div class="project-tree">
  </div>
</template>

<script>
  //  import dndHandler from '../../../common/dndHandler'
  //  import toolbar from './toolbar'
  import entityNames from '../../../api/entityNames'
  import core from '../../../api/core'
  //  import utils from '../../../common/utils'

  export default {
    props: {
      ds: {id: '', name: ''}
    },
    data () {
      return {
      }
    },
    watch: {
      'ds': function (val, oval) {
        let treeData = [{
          id: val.id,
          text: '新项目',
          type: 'root'
        }]
        this.newTree(treeData)
//        console.log(val, oval)
//        console.log('entityNames>', entityNames)
      },
      'currentPageId': function (val, oval) {

      }
    },
    mounted: function () {
//      let treeData = [{
//        id: 1,
//        text: '新项目',
//        type: 'root',
//        children: [{
//          id: 9,
//          text: '文件1',
//          type: 'html5',
//          state: {
//            'selected': true
//          }
//        }, {
//          id: 2,
//          type: 'html5',
//          text: '文件2'
//        }, {
//          id: '7',
//          text: '用户信息',
//          type: 'default',
//          'children': [
//            {type: 'html5', 'text': 'Item 1', 'icon': 'fa fa-html5 icon-state-warning'},
//            {type: 'html5', 'text': 'Item 2', 'icon': 'fa fa-html5 icon-state-success'},
//            {type: 'html5', 'text': 'Item 3', 'icon': 'fa fa-html5 icon-state-default'},
//            {type: 'html5', 'text': 'Item 4', 'icon': 'fa fa-html5 icon-state-danger'},
//            {type: 'html5', 'text': 'Item 5', 'icon': 'fa fa-html5 icon-state-info'}
//          ]
//        }]
//      }
//      ]
//      this.newTree(treeData)
    },
    methods: {
      newTree (treeData) {
        let self = this
        $.jstree.defaults.contextmenu.select_node = false
        $.jstree.defaults.contextmenu.show_at_node = true
        let $tree = $(this.$el)
        // 如果已初始化则更新数据
        if ($tree.jstree(true).settings) {
          $tree.jstree(true).settings.core.data = treeData
          $tree.jstree(true).refresh()
        }
        let types = {
          default: {
            icon: 'fa fa-folder icon-state-warning icon-lg'
          },
          root: {
            icon: 'fa fa-folder icon-state-default icon-lg'
          },
          html5: {
            icon: 'fa fa-html5 icon-state-success icon-lg'
          },
          grid: {
            icon: 'fa fa-table icon-state-success icon-lg'
          },
          plus: {
            icon: 'fa fa-plus icon-state-default icon-lg'
          },
          edit: {
            icon: 'fa fa-edit icon-state-default icon-lg'
          },
          remove: {
            icon: 'fa fa-remove icon-state-default icon-lg'
          }
        }
        $tree.jstree({
          core: {
            themes: {
              responsive: false
            },
            check_callback: function (operation, node, nodeParent, nodePosition, more) {
              // operation can be 'create_node', 'rename_node', 'delete_node', 'move_node' or 'copy_node'
              // in case of 'rename_node' node_position is filled with the new node name
              if (operation === 'move_node') {
//              console.log('node_parent.original.type === "html5" >' + (nodeParent.original.type === 'html5') + '>', nodeParent.original)
                if (nodeParent.original && isFile(nodeParent.original.type)) {
                  // 不能移动到html5等文件节点下
                  return false
                } else if (!nodeParent.parent) {
                  // 必须有父节点，即限制只有一个根节点
                  return false
                }
              } else if (operation === 'delete_node') {
                if (node.parent === '#' || !node.parent) {
                  alert('根节点不能删除！')
                  return false
                }
              }
              return true // allow all other operations
            },
            data: treeData
          },
          types: types,
          state: {},
          plugins: ['contextmenu', 'dnd', 'state', 'types'],
          contextmenu: {
            items: function (obj) {
              let disable = isFile(obj.type)
              let items = {
                create: {
                  // 解决第一下action，默认是false，移动之后才按_disabled生效的问题
                  separator_before: true,
                  label: createIconLabel('新建', 'plus'),
                  action: false,
                  _disabled: disable,
                  submenu: disable ? false : {
                    create_html5: createNode('普通页面', 'html5', function (nodeId) {
                      self.newPage({id: nodeId, text: '普通页面', type: 'html5'})
                    }),
                    create_grid: createNode('查询列表', 'grid', function (nodeId) {
                      self.newPage({id: nodeId, text: '查询列表', type: 'grid'})
                    }),
                    create_folder: createNode('目录', 'default')
                  }
                },
                rename: {
                  label: createIconLabel('重命名', 'edit'),
                  _disabled: false,
                  action: function (data) {
                    $.jstree.reference(data.reference).edit(data.reference, undefined, self.updateNode)
                  }
                },
                remove: {
                  label: createIconLabel('删除', 'remove'),
                  _disabled: function (data) {
                    let node = $.jstree.reference(data.reference).get_node(data.reference)
                    if (node.type === 'root') {
                      // node.parent === '#' || !node.parent
//                    alert('根节点不能删除！')
                      return true
                    }
                    return false
                  },
                  action: function (data) {
                    $.jstree.reference(data.reference).delete_node(data.reference)
                  }
                },
                ccp: null
              }
              return items
            }
          }
        })
//      $tree.on('select_node.jstree', this.openPage)

        $tree.bind('dblclick.jstree', function (event) {
          // jstree的双击事件针对整个jstree对象，不区分是否为节点。这里对叶子节点的双击事件生效
          if (!$(event.target).parent().hasClass('jstree-leaf')) {
            return
          }
          var $node = $(event.target).closest('li')
          let data = getFileNodeData($node)
          // 且叶子节点为文件类型才生效
          if (data.type) {
            self.openPage(event, {node: data})
          }
        })

        function getFileNodeData ($node) {
          let fileTypes = ['html5', 'grid']
          for (var i in fileTypes) {
            let type = fileTypes[i]
            let selector = '.' + types[type].icon.split(' ').join('.').replace(/\s+/g, '')
            let data = $.jstree.reference($tree).get_node($node.find(selector))
            if (data.type) {
              return data
            }
          }
          return {}
        }

        function isFile (type) {
          console.log(type, type === 'grid')
          return type === 'html5' || type === 'grid'
        }

        function createIconLabel (label, typeName) {
          let type = types[typeName]
          return '<span class="' + type.icon + '"></span>' + label
        }

        function createNode (label, typeName, callback) {
          let type = types[typeName]
          return {
            label: createIconLabel(label, typeName),
            action: function (data) {
              let treeNode = {
                text: '新' + label,
                icon: type.icon,
                type: typeName,
                treeId: self.ds.id
              }
              core.data.save(entityNames.platform.common.treeNode, treeNode).then(function (res) {
                treeNode.id = res.data
                let $ref = $.jstree.reference(data.reference)
                console.log('treeNode>', res.data)
                let nodeId = $ref.create_node(data.reference, treeNode, 'last')
                $ref.select_node(nodeId)
                $ref.edit(nodeId, undefined, self.updateNode)
                if ($.isFunction(callback)) callback(nodeId)
              })
            }
          }
        }
      },
      newPage (data) {
        let obj = data
        this.$emit('newPage', {id: obj.id, text: obj.text, type: obj.type})
        console.log('newPage with params >', {id: obj.id, text: obj.text, type: obj.type})
      },
      openPage (e, data) {
        let obj = data.node
        this.$emit('openPage', {id: obj.id, text: obj.text, type: obj.type})
        console.log('openPage with params >', {id: obj.id, text: obj.text, type: obj.type})
      },
      updateNode (node, status, cancelled) {
        if (cancelled) {
          return false
        }
        let self = this
        let treeNode = {
          id: node.id,
          text: node.text,
          type: node.type,
          treeId: self.ds.id
        }
        core.data.save(entityNames.platform.common.treeNode, treeNode).then(function (res) {
          console.log('update>', res)
        })
        console.log('node>', node)
        console.log('status>', status)
        console.log('cancelled>', cancelled)
      }
    },
    components: {}
  }
</script>
<style scoped>

</style>
