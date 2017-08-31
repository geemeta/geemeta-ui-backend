<template>
  <div>
    <div class="toolItem" data-key="diliver">
      <label>分割行</label>
      <div class="content">
        <table>
          <tr data-drag-content>
            <td colspan="24"><span class="text">&nbsp</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="toolItem" data-key="0t1c">
      <label>零标一列</label>
      <div class="content">
        <table>
          <tr data-drag-content>
            <td colspan="24" class="field" data-drag-target="append" data-drag-allow="control">&nbsp</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="toolItem" data-key="1t1c">
      <label>一标一列</label>

      <div class="content">
        <table>
          <tr data-drag-content>
            <td colspan="7">标题</td>
            <td colspan="17" class="field" data-drag-target="append" data-drag-allow="control"></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="toolItem" data-key="2t2c">
      <label>二标二列</label>
      <div class="content">
        <table>
          <tr data-drag-content>
            <td colspan="4">标题</td>
            <td colspan="8" class="field" data-drag-target="append" data-drag-allow="control"></td>
            <td colspan="4">标题</td>
            <td colspan="8" class="field" data-drag-target="append" data-drag-allow="control"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import dndHandler from '../../../common/dndHandler'

  export default {
    data () {
      return {}
    },
    mounted: function () {
      $(this.$el).find('.toolItem').mouseover(function (e) {
        $(e.target).addClass('active')
      })
      $(this.$el).find('.toolItem').mouseout(function (e) {
        $(e.target).removeClass('active')
      })
      dndHandler.bindDragObjects($('.toolItem:not(.dragObject)', this.$el), 'layout')
    },
    methods: {},
    components: {}
  }
</script>
<style scoped>

</style>
