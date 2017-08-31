<style>

</style>
<template>
  <div>
    <div class="toolItem" data-key="label">
      <label>文本</label>

      <div class="content">
        <label data-drag-content>点击修改</label>
      </div>
    </div>
    <div class="toolItem" data-key="singleText">
      <label>单行文本框</label>

      <div class="content">
        <div class="form-group" data-drag-content>
          <!--<label>Email Address</label>-->
          <div class="input-group">
            <!--<span class="input-group-addon">-->
              <!--<i class="fa fa-envelope"></i>-->
            <!--</span>-->
            <input type="text" class="form-control" placeholder="请输入..."></div>
        </div>
        <!--<input data-drag-content type="text" value="" placeholder="请输入..."><span class="required">*</span>-->
      </div>
    </div>
    <div class="toolItem" data-key="mutiText">
      <label>多行文本框</label>

      <div class="content">
        <textarea data-drag-content rows="4"></textarea>
      </div>
    </div>
    <div class="toolItem" data-key="datePicker">
      <label>日期</label>

      <div class="content">
        <input data-drag-content class='kendoDatePicker'/>
      </div>
    </div>
    <div class="toolItem" data-key="jsonEditor">
      <label>JSON</label>

      <div class="content">
        <textarea data-drag-content data-xg='xg-jsonEditor' rows='6' readonly></textarea>
      </div>
    </div>
    <div class="toolItem" data-key="checkbox">
      <label>复选框</label>

      <div class="content">
        <div class="form-group" data-drag-content>
          <!--<label>Outline Checkboxes</label>-->
          <div class="mt-checkbox-list">
            <label class="mt-checkbox mt-checkbox-outline"> &nbsp;
              <input type="checkbox" value="1" name="test" />
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="toolItem" data-key="numericTextBox">
      <label>数字</label>
      <div class="content">
        <input data-drag-content class='kendoNumericTextBox'/>
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
      dndHandler.bindDragObjects($('.toolItem:not(.dragObject)', this.$el), 'control')
    },
    methods: {},
    components: {}
  }
</script>
