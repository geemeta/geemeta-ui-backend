<template>
  <div class="project-tree" :id="id">
  </div>
</template>

<script>
  //  import dndHandler from '../../../common/dndHandler'
  //  import toolbar from './toolbar'
  import utils from '../../../common/utils'

  export default {
    data () {
      return {
        id: utils.uuid(8)
      }
    },
    mounted: function () {
      let self = this
      $.jstree.defaults.contextmenu.select_node = false
      $.jstree.defaults.contextmenu.show_at_node = true

      let $tree = $(this.$el)
      let types = {
        default: {
          icon: 'fa fa-folder icon-state-warning icon-lg'
        },
        file: {
          icon: 'fa fa-file icon-state-success icon-lg'
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
//              console.log('node_parent.original.type === "file" >' + (nodeParent.original.type === 'file') + '>', nodeParent.original)
              if (nodeParent.original && nodeParent.original.type === 'file') {
                return false
              }
            }
            return true // allow all other operations
          },
          data: [{
            id: 1,
            text: 'Parent Node',
            children: [{
              id: 9,
              text: '文件1',
              type: 'file',
              state: {
                'selected': true
              }
            }, {
              id: 2,
              type: 'file',
              text: '文件2'
            }, {
              id: '7',
              text: 'Sub Nodes',
              type: 'default',
              'icon': 'fa fa-folder icon-state-danger',
              'children': [
                {type: 'file', 'text': 'Item 1', 'icon': 'fa fa-file icon-state-warning'},
                {type: 'file', 'text': 'Item 2', 'icon': 'fa fa-file icon-state-success'},
                {type: 'file', 'text': 'Item 3', 'icon': 'fa fa-file icon-state-default'},
                {type: 'file', 'text': 'Item 4', 'icon': 'fa fa-file icon-state-danger'},
                {type: 'file', 'text': 'Item 5', 'icon': 'fa fa-file icon-state-info'}
              ]
            }]
          },
            'Another Node'
          ]
        },
        types: types,
        state: {'key': 'demo2'},
        plugins: ['contextmenu', 'dnd', 'state', 'types'],
        contextmenu: {
          items: function (obj) {
            let disable = obj.type === 'file'
            let items = {
              create: {
                // 解决第一下action，默认是false，移动之后才按_disabled生效的问题
                separator_before: true,
                label: '新建',
                action: false,
                _disabled: disable,
                submenu: disable ? false : {
                  create_file: {
                    label: '文件',
                    action: function (data) {
                      let $ref = $.jstree.reference(data.reference)
                      let nodeId = $ref.create_node(data.reference, {
                        text: '新文件',
                        icon: types.file.icon,
                        type: 'file'
                      }, 'last')
                      $ref.edit(nodeId)
                    }
                  },
                  create_folder: {
                    label: '目录',
                    action: function (data) {
                      $.jstree.reference(data.reference).create_node(data.reference, {
                        text: '新目录',
                        icon: types.default.icon,
                        type: 'default'
                      }, 'last')
                    }
                  }
                }
              },
              rename: {
                label: '重命名',
                _disabled: false,
                action: function (data) {
                  $.jstree.reference(data.reference).edit(data.reference)
                }
              },
              remove: {
                label: '删除',
                _disabled: false,
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
        let selector = '.' + types.file.icon.split(' ').join('.').replace(/\s+/g, '')
        let data = $.jstree.reference($tree).get_node($node.find(selector))
        // 且叶子节点为文件类型才生效
        if (data.type === 'file') {
          self.openPage(event, {node: data})
        }
      })

      $tree.on('dnd_start.vakata', function (e, data) {
        console.log('Started')
      })
    },
    methods: {
      newPage () {
      },
      openPage (e, data) {
        let obj = data.node
        // 加载页面配置

        // 打开stage中的界面
        this.$emit('openPage', {id: obj.id, text: obj.text, type: obj.type})
//        console.log('node.text>', data.node.text)
//        console.log('data.node.type>', data.node.type)
      }
    },
    components: {}
  }
</script>
<style scoped>

</style>
