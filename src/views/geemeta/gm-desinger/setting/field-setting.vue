<template>
  <div class="panel-group accordion" id="collapse_setting">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_setting"
             href="#collapse_setting_default">数据</a>
        </h6>
      </div>
      <div id="collapse_setting_default" class="panel-collapse in">
        <div class="panel-body">
          <table class="xg-form compact xg-col-24">
            <tbody>
            <tr data-setting-value>
              <td colspan="8">值</td>
              <td colspan="16"><input type="text" v-model="options.value"></td>
            </tr>
            <tr data-setting-format>
              <td colspan="8">格式</td>
              <td colspan="16"><input type="text" value=""></td>
            </tr>
            <tr data-setting-value>
              <td colspan="8">样式</td>
              <td colspan="16"><input type="text" v-model="options.value"></td>
            </tr>
            <tr>
              <td colspan="8">标题</td>
              <td colspan="16">
                <input type="text" value="xxx">
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_setting"
             href="#collapse_setting_custom">外观</a>
        </h6>
      </div>
      <div id="collapse_setting_custom" class="panel-collapse collapse">
        <div class="panel-body">
          <table class="xg-form compact xg-col-24">
            <tbody>
            <tr data-setting-value>
              <td colspan="8">类(class)</td>
              <td colspan="16"><input type="text" v-model="options.class"></td>
            </tr>
            <tr data-setting-value>
              <td colspan="8">样式(style)</td>
              <td colspan="16"><input type="text" v-model="options.style"></td>
            </tr>
            <tr>
              <td colspan="8">提示(tip)</td>
              <td colspan="16">
                <input type="text" v-model="options.tip">
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_setting"
             href="#collapse_setting_rule">规则</a>
        </h6>
      </div>
      <div id="collapse_setting_rule" class="panel-collapse collapse">
        <div class="panel-body">
          <table class="xg-form compact xg-col-24">
            <tbody>
            <tr data-setting-value>
              <td colspan="8">值</td>
              <td colspan="16"><input type="text" v-model="options.value"></td>
            </tr>
            <tr data-setting-format>
              <td colspan="8">格式</td>
              <td colspan="16"><input type="text" value=""></td>
            </tr>
            <tr data-setting-value>
              <td colspan="8">样式</td>
              <td colspan="16"><input type="text" v-model="options.value"></td>
            </tr>
            <tr>
              <td colspan="8">标题</td>
              <td colspan="16">
                <input type="text" value="xxx">
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_setting"
             href="#collapse_setting_auth">权限</a>
        </h6>
      </div>
      <div id="collapse_setting_auth" class="panel-collapse collapse">
        <div class="panel-body">
          <table class="xg-form compact xg-col-24">
            <tbody>
            <tr data-setting-value>
              <td colspan="8">显示字段给</td>
              <td colspan="16">
                <select v-model="options.auth">
                  <option>所有人</option>
                  <option>管理员</option>
                </select>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//  import dndHandler from '../../../common/dndHandler'

  export default {
    props: {
      options: {}
    },
    data () {
      return {
        type: {
          singleText: ['value', 'format']
        }
      }
    },
    mounted: function () {
    },
    methods: {},
    components: {}
  }
</script>
<style>

</style>
